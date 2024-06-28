export default defineEventHandler(async (event) => {
    const { serverUrl } = useRuntimeConfig();
    
    // 실제로 서버로부터 데이터를 가져오는 코드
    // 1. $fetch 를 사용한다.
    // 2. try catch 를 사용한다.
    try {
        const result = await $fetch(`${serverUrl}/articles`)
        return result
    } catch (error) {
        console.log(error)
    }
})
