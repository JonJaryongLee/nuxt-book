export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  try {
    const result = await $fetch(`${serverUrl}/api/articles/${id}`);
    return result;
  } catch (error) {
    if (error.status === 404) {
      throw createError({
        statusCode: 404,
        data: {
          errorMessage: "해당 게시글이 존재하지 않습니다.",
        },
      });
    }
  }
});
