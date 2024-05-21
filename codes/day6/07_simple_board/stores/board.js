export const useBoardStore = defineStore("board", () => {
  const nextId = ref(8);
  const articles = ref([
    {
      id: 5,
      title: "안녕",
      content: "반가워",
    },
    {
      id: 6,
      title: "Nuxt 너무 어려워",
      conent: "좀 쉬운 강의 없을까?",
    },
    {
      id: 7,
      title: "과제 도와줄사람?",
      content: "시간이 너무 없네",
    },
  ]);
  function addArticle(newArticle) {
    articles.value.push({ id: nextId.value, ...newArticle });
    nextId.value++;
    return nextId.value;
  }
  function deleteArticle(id) {
    const newArticles = articles.value.filter((article) => article.id !== id);
    articles.value = newArticles;
  }
  return { articles, addArticle, deleteArticle };
});
