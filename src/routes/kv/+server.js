import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit';

const resolveFileImportPromises = async (files) => {
    const data = await Promise.all(files.map(async ([filePath, resolver]) => {
        // Transform "../../../functions/liquidmemories.js" into "liquidmemories"
        const kvName = filePath.slice(19, -3)

        const fileData = await resolver()
        
        // Exclude files with no default export, such as utils and incomplete files
        if (fileData.default) {
            // Return { liquidMemories: default export from liquidMemories }
            return {
                key: kvName,
                value: JSON.stringify(fileData.default)
            }
        }
    }))
    // Remove null objects and return
    return data.filter(kv => kv)
}

export const GET = async () => {
    if (!dev) throw redirect(307, 'https://bapharia.com');
    const allFiles = import.meta.glob('../../../functions/*.js')
    const data = await resolveFileImportPromises(Object.entries(allFiles))
    return json(data)
}