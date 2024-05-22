export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  const body = await readBody(event);
  try {
    const result = await $fetch(`${serverUrl}/api/articles/${id}`, {
      method: "put",
      body: body,
    });
    return result;
  } catch (error) {
    return error;
  }
});
