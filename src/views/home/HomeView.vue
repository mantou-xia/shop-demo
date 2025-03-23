<template>
  <div class="home-container">
    <el-header>
      <!-- 顶部导航栏 -->
      <NavModule1 />
    </el-header>
    <el-main>
      <!-- 页边距200px -->
      <router-view />
    </el-main>
    <el-footer>
      <!-- 底部导航栏 -->
      <FootNavModule1 />
    </el-footer>
  </div>
</template>

<script>
import NavModule1 from '../../components/navModule1/NavModule1.vue'
import FootNavModule1 from '../../components/footNavModule1/FootNavModule1.vue'
export default {
  components: {
    NavModule1,
    FootNavModule1
  }
}
</script>
<style scoped lang="scss">
.home-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-main {
  flex: 1;
  padding: 0;
}

.el-footer {
  height: 200px;
  /* 固定高度 */
  min-height: 180px;
  /* 最小高度保障 */
  padding: 20px 0;
  /* 调整内边距 */
}
</style>
