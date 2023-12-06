/** @type {import('houdini').ConfigFile} */
const config = {
    // watchSchema: {
    //     url: 'https://api.bapharia.com',
    // },
    schemaPath: './src/routes/graphql/schema.graphql',
    plugins: {
        "houdini-svelte": {}
    }
}

export default config