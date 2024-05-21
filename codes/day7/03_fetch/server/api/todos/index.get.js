export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  try {
    const result = await $fetch(`${serverUrl}/todos`);
    return result;
  } catch (error) {
    console.error(error);
  }
});
