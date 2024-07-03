import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

export const GET = async ({ params, url }) => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    if (dev) {
        const files = import.meta.glob("../../../../../../api/*.js", { import: "default", eager: true })

        const dataArr = await Promise.all(Object.entries(files).map(async ([path, resolver]) => {
            const fileName = path.split("/").pop().split(".")[0]
            return {
                fileName,
                data: await resolver(params.lang)
            }
        }, {}))
        
        const data = dataArr.reduce((acc, curr) => {
            acc[curr.fileName] = curr.data
            return acc
        }, {})

        return json(data)
    }
}