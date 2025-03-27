<template>
  <div class="container">
    <!-- 用户信息卡片 -->
    <el-card class="user-card">
      <div class="user-info">
        <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        <div class="user-detail">
          <h2>{{ username }}</h2>
          <div class="vip-info">
            <el-tag type="warning">
              金牌会员
            </el-tag>
            <span class="points">积分：3580</span>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 订单状态概览 -->
    <el-card class="order-card">
      <template #header>
        <div class="card-header">
          <span>我的订单</span>
          <span class="view-all" @click="router.push({ name: 'OrderStatus', params: { type: 'all' } })">
            查看全部订单 >
          </span>
        </div>
      </template>
      <el-row :gutter="20">
        <el-col v-for="(item, index) in orderStatus" :key="index" :span="4" class="order-item"
          @click="handleOrderClick(item.type)">
          <el-badge :value="item.count" :max="99"></el-badge>
          <p>{{ item.title }}</p>
        </el-col>
      </el-row>
    </el-card>

    <!-- 功能模块 -->
    <el-card class="function-card">
      <el-row :gutter="20">
        <el-col v-for="(module, index) in modules" :key="index" :span="6" @click="handleModuleClick(module.path)">
          <div class="function-item">
            <span :class="['iconfont', module.icon]"></span>
            <span>{{ module.title }}</span>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 用户信息，使用ref创建响应式引用
const username = ref('Mr.Tang')

// 订单状态数据(数据库读取)
const orderStatus = ref([
  { title: '待付款', count: 2, type: 'pending' },
  { title: '待发货', count: 1, type: 'unshipped' },
  { title: '待收货', count: 3, type: 'shipped' },
  { title: '已完成', count: 8, type: 'completed' },
  { title: "退换货", count: 0, type: "return" }
])

// 功能模块数据(数据库读取)
const modules = ref([
  { icon: "icon-user", title: '账户资料', path: '/profile' },
  { icon: "icon-zhanghaoanquan", title: '账户安全', path: '/security' },
  { icon: "icon-house", title: '收货地址', path: '/address' },
  { icon: "icon-setting", title: '账户设置', path: '/settings' }
])

// 点击事件处理
const handleOrderClick = (type) => {
  console.log('跳转订单类型:', type)
  // 路由跳转逻辑
  router.push({ name: 'OrderStatus', params: { type } })
}

const handleModuleClick = (path) => {
  console.log('跳转路径:', path)
  // 实际开发中这里应使用路由跳转
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 200px;

  .user-card {
    margin-bottom: 20px;

    .user-info {
      display: flex;
      align-items: center;
      padding: 20px;

      .user-detail {
        margin-left: 30px;

        .vip-info {
          margin-top: 10px;
          display: flex;
          align-items: center;

          .points {
            margin-left: 15px;
            color: #666;
          }
        }
      }
    }
  }

  .order-card {
    margin-bottom: 20px;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .view-all {
        &:hover {
          color: #409eff;
        }
        cursor: pointer;
      }
    }

    .order-item {
      text-align: center;
      cursor: pointer;

      &:hover {
        color: #409eff;
      }

      p {
        margin-top: 10px;
      }
    }
  }

  .function-card {
    .function-item {
      padding: 20px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s;

      &:hover {
        background-color: #f5f7fa;

        span {
          color: #409eff;
        }
      }

      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
