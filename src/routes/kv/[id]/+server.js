import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
    const data = await import(`../../../functions/${params.id}.js`)
    return json(data.default)
}