export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  try {
    const result = await $fetch(`${serverUrl}/api/articles/${id}`, {
      method: "delete",
    });
    return result;
  } catch (error) {
    throw error;
  }
});
