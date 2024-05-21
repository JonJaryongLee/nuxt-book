export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  try {
    const result = await $fetch(`${serverUrl}/posts`);
    return result;
  } catch (error) {
    console.error(error);
  }
});
