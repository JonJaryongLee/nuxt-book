export default defineEventHandler(async (event) => {
    const { serverUrl } = useRuntimeConfig();
    const body = await readBody(event);

    try {
        const result = 
            await $fetch(`${serverUrl}/articles`, {
                method: 'post',
                body: body
            })
        return result
    } catch (error) {
        console.log(error)
    }
})
