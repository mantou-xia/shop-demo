<template>
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
            <el-col v-for="(  item, index  ) in   orderStatus  " :key="index" :span="4" class="order-item"
                @click="handleOrderClick(item.type)">
                <el-badge :value="item.count" :max="99"></el-badge>
                <p>{{ item.title }}</p>
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 订单状态数据(数据库读取)
const orderStatus = ref([
  { title: '待付款', count: 2, type: 'pending' },
  { title: '待发货', count: 1, type: 'unshipped' },
  { title: '待收货', count: 3, type: 'shipped' },
  { title: '已完成', count: 8, type: 'completed' },
  { title: "退换货", count: 0, type: "return" }
])

// 点击事件处理
const handleOrderClick = (type) => {
  console.log('跳转订单类型:', type)
  // 路由跳转逻辑
  router.push({ name: 'OrderStatus', params: { type } })
}

</script>

<style scoped lang="scss">
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
</style>