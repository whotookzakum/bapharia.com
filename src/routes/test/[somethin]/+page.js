import { error } from '@sveltejs/kit'

export function _houdini_beforeLoad({ params }) {
    // if we were given an id, convert the string to a number
    const id = params.somethin ? parseInt(params.somethin) : 1

    // check that the id falls between 1 and 151
    if (id < 1 || id > 151) {
        // return a status code 400 along with the error
        throw error(400, 'id must be between 1 and 151')
    }
}
