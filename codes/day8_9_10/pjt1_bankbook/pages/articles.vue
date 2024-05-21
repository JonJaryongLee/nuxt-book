<script setup>
const tableData = [
  {
    id: 1,
    author: "서현범",
    title: "퍼가요~",
  },
  {
    id: 2,
    author: "장하림",
    title: "방문합니다",
  },
  {
    id: 3,
    author: "김문수",
    title: "안녕하세요",
  },
  {
    id: 4,
    author: "양건희",
    title: "금리가 오를까요?",
  },
];
</script>

<template>
  <div>
    <BaseBanner bannerText="게시판" backgroundColor="#5159b3" />
    <div class="page">
      <h2 class="title">게시판</h2>
      <el-table :data="tableData">
        <el-table-column
          class="col1"
          prop="id"
          label="글번호"
          width="80"
          align="center"
        />
        <el-table-column
          class="col2"
          prop="author"
          label="작성자"
          width="120"
          align="center"
        />
        <el-table-column
          class="col3"
          prop="title"
          label="제목"
          align="center"
        />
      </el-table>
    </div>
  </div>
</template>

<style scoped>
.title {
  border-bottom: 1px solid #5159b3;
}
</style>
