<template>
  <div class="container">
    <!-- 用户信息卡片 -->
    <UserCard class="user-card" :username="username" :level="level"/>
    <!-- 订单状态概览 -->
    <OrderCard class="order-card"/>
    <!-- 功能模块 -->
    <FunctionCard class="function-card"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserCard from "../../../components/userModules/UserCard"
import OrderCard from "../../../components/userModules/OrderCard"
import FunctionCard from "../../../components/userModules/FunctionCard"
// 用户信息，使用ref创建响应式引用
const username = ref('Mr.Tang')
const level = ref('普通会员')

</script>

<style lang="scss" scoped>
.container {
  padding: 0 200px;

  .user-card {
    margin-bottom: 20px;
  }

  .order-card {
    margin-bottom: 20px;
  }

}
</style>
