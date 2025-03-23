<template>
  <Front class="login-and-reg-view" />
</template>

<script>
import Front from '../../components/Front.vue'

export default {
  name: 'App', // 组件名
  components: { Front } // 注册组件
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
