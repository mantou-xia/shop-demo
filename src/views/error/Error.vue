<template>
  <div class="page-404">
    <h1 class="title">404 Not Found</h1>
    <div class="line"></div>
    <p class="desc">nginx</p>
  </div>
</template>

<script setup>
// 此处无复杂逻辑，纯展示组件
</script>

<style scoped>
.page-404 {
  text-align: center;
  padding: 50px;
  font-family: Arial, sans-serif;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
}

.line {
  height: 2px;
  width: 80%;
  margin: 20px auto;
  background-color: #66afe9;
  opacity: 0.7;
}

.desc {
  font-size: 1.1em;
  color: #333;
}
</style>
