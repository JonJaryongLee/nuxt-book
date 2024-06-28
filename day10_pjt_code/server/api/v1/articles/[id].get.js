export default defineEventHandler(async (event) => {
    const { serverUrl } = useRuntimeConfig();
    const id = getRouterParam(event, 'id')

    try {
        const result = await $fetch(`${serverUrl}/articles/${id}`)
        return result
    } catch (error) {
        console.log(error)
    }
})
