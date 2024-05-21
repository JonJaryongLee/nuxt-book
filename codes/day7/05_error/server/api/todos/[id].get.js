export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  try {
    const result = await $fetch(`${serverUrl}/todos/${id}`);
    return result;
  } catch (error) {
    if (error.status === 404) {
      throw createError({
        statusCode: 404,
        data: {
          foo: "bar",
        }
      })
    }
  }
});
