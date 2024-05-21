export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const id = getRouterParam(event, "id");
  try {
    const result = await $fetch(`${serverUrl}/posts/${id}`);
    return result;
  } catch (error) {
    console.error(error);
  }
});
