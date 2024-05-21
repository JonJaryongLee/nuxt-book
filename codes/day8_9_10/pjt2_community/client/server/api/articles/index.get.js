export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  try {
    const result = await $fetch(`${serverUrl}/api/articles`);
    return result;
  } catch (error) {
    if (error.status === 404) {
      throw createError({
        statusCode: 404,
        data: {
          errorMessage: "작성된 게시글이 없습니다.",
        },
      });
    }
  }
});
