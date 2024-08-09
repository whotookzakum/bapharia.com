import { getSiteVersion } from "$lib/utils.js"

export const load = ({ params }) => {
    return getSiteVersion(params)
}