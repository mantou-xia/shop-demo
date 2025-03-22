<template>
  <div class="home-container">
    <el-header>
      <!-- 顶部导航栏 -->
      <NavModule1 />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </div>
</template>

<script>
import NavModule1 from '../../components/navModule1/NavModule1.vue'

export default {
  components: {
    NavModule1
  }
}
</script>

<style scoped></style>