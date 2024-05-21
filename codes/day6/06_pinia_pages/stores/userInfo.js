export const useUserInfoStore = defineStore("userInfo", () => {
  const name = ref("david");
  const age = ref(10);
  const introduce = computed(() => `저는 ${name.value}입니다.`);
  function changeName(newName) {
    name.value = newName;
  }
  function changeAge(newAge) {
    age.value = newAge;
  }
  return { name, age, introduce, changeName, changeAge };
});
