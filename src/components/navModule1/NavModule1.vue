<template>
  <!-- 顶部导航栏 -->
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    class="nav-menu"
    :router="true"
  >
    <!-- 新增网站Logo -->
    <img src="@/assets/logo.png" class="nav-logo" alt="网站Logo" />
    <el-menu-item index="/home"> 首页 </el-menu-item>
    <el-menu-item index="/category"> 商品分类 </el-menu-item>
    <el-menu-item index="/cart"> 购物车 </el-menu-item>
    <el-menu-item index="/user"> 我的账户 </el-menu-item>
    <div style="flex-grow: 1" />
    <el-menu-item index="/loginAndReg" @click="handleLogin">
      登录
    </el-menu-item>
    <el-menu-item index="/loginAndReg" @click="handleRegister">
      注册
    </el-menu-item>
  </el-menu>
</template>

<script setup>


// 新增登录注册方法
const handleLogin = () => {
  console.log("打开登录弹窗");
  // 这里可以添加登录逻辑
};

const handleRegister = () => {
  console.log("打开注册页面");
  // 这里可以添加注册逻辑
};
</script>

<style scoped lang="scss">
.nav-menu {
  height: 40px;
  // 新增Logo样式
  .nav-logo {
    position: relative;
    top: 5px; /* 调整Logo的垂直位置 */
    margin-left: 20px;
    width: 40px;
    height: 30px;
  }

  .search-input {
    width: 200px;
    float: right;
    margin-bottom: 10px;
    margin: auto;
    margin-left: 800px;
  }
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex; /* 启用flex布局 */

  /* 新增按钮间距 */
  :deep(.el-menu-item) {
    margin-left: 10px;
  }
}
</style>
