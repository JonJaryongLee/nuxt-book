export default defineEventHandler(async (event) => {
  const { serverUrl } = useRuntimeConfig(event);
  const body = await readBody(event);
  try {
    const result = await $fetch(`${serverUrl}/todos`, {
      method: "post",
      body: body,
    });
    return result;
  } catch (error) {
    console.error(error);
  }
});
