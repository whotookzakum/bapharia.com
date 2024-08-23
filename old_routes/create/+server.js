import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';
import fs from "fs"
import { PRIVATE_CLOUDFLARE_API_KEY, PRIVATE_WORKERS_ACCOUNT_ID, PRIVATE_KV_NAMESPACE_ID_BNO_JA, PRIVATE_KV_NAMESPACE_ID_BNO_EN } from '$env/static/private';
import { SUPPORTED_VERSIONS } from "$lib/constants"

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    if (dev) {
        const files = import.meta.glob("../../../../_api/*.js", { import: "default", eager: true })

        const versionsData = {}

        await SUPPORTED_VERSIONS.forEach(version => {
            const { publisher, locales } = version

            locales.forEach(lang => {
                Object.entries(files).forEach(async ([path, resolver]) => {
                    const fileName = path.split("/").pop().split(".")[0]
                    console.log(`${publisher}/${lang}:`, fileName)
                    let data = await resolver(lang)

                    if (fileName === "skills") {
                        data = data.map(obj => {
                            delete obj.SkillInfo
                            return obj
                        })
                    }

                    versionsData[`${publisher}_${lang}`] ??= []
                    versionsData[`${publisher}_${lang}`].push({ key: fileName, value: JSON.stringify(data) })

                    // Write to local JSON file
                    // if (!fs.existsSync(`./_api/json/${publisher}/${lang}`)) fs.mkdirSync(`./_api/json/${publisher}/${lang}`, { recursive: true });
                    // fs.writeFileSync(`./_api/json/${publisher}/${lang}/${fileName}.json`, JSON.stringify(data))
                })
            })
        })

        // Write to Cloudflare KV
        Object.entries(versionsData).forEach(([version, namespaces]) => {
            let namespaceId;
            switch (version) {
                case "bno_en": 
                    namespaceId = PRIVATE_KV_NAMESPACE_ID_BNO_EN
                    break;
                case "bno_ja": 
                    namespaceId = PRIVATE_KV_NAMESPACE_ID_BNO_JA
                    break;
            }

            console.log(version)

            fetch(`https://api.cloudflare.com/client/v4/accounts/${PRIVATE_WORKERS_ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/bulk`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${PRIVATE_CLOUDFLARE_API_KEY}` },
                body: JSON.stringify(namespaces)
            })
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        })

        return json(versionsData)
    }
}