import fs from "fs"
import { PRIVATE_CLOUDFLARE_API_KEY, PRIVATE_WORKERS_ACCOUNT_ID, PRIVATE_KV_NAMESPACE_ID_BNO_JA, PRIVATE_KV_NAMESPACE_ID_BNO_EN } from '$env/static/private';
import { SUPPORTED_VERSIONS } from "$lib/constants"

// Used in /src/routes/api/create
// import { json } from '@sveltejs/kit'
// import { consolidateDb, updateKv } from '../../../../scripts/update-kv.js';
// export const GET = async ({ params, url }) => {
//     const db = await consolidateDb()
//     updateKv(db)
//     return json(db)
// }

// Gather all API endpoints into objects with keys such as bno_ja, bno_en to efficiently bulk write to Cloudflare KV
export async function consolidateDb() {
    const files = import.meta.glob("../_api/*.js", { import: "default", eager: true })

    const db = {}

    for (const version of SUPPORTED_VERSIONS) {
        const { publisher, locales } = version

        for (const lang of locales) {
            for (const [path, resolver] of Object.entries(files)) {
                const fileName = path.split("/").pop().split(".")[0]
                console.log(`${publisher}/${lang}:`, fileName)
                let data = await resolver(lang)

                if (fileName === "skills") {
                    data = data.map(obj => {
                        delete obj.SkillInfo
                        return obj
                    })
                }

                db[`${publisher}_${lang}`] ??= []
                db[`${publisher}_${lang}`].push({ key: fileName, value: JSON.stringify(data) })

                // Write to local JSON file
                // if (!fs.existsSync(`./_api/json/${publisher}/${lang}`)) fs.mkdirSync(`./_api/json/${publisher}/${lang}`, { recursive: true });
                // fs.writeFileSync(`./_api/json/${publisher}/${lang}/${fileName}.json`, JSON.stringify(data))
            }
        }
    }
    
    return db
}

// Write to Cloudflare KV
export function updateKv(db) {
    Object.entries(db).forEach(([version, namespaces]) => {
        let namespaceId;
        switch (version) {
            case "bno_en":
                namespaceId = PRIVATE_KV_NAMESPACE_ID_BNO_EN
                break;
            case "bno_ja":
                namespaceId = PRIVATE_KV_NAMESPACE_ID_BNO_JA
                break;
        }

        console.log("Updating KV:", version)

        fetch(`https://api.cloudflare.com/client/v4/accounts/${PRIVATE_WORKERS_ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/bulk`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${PRIVATE_CLOUDFLARE_API_KEY}` },
            body: JSON.stringify(namespaces)
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })
}