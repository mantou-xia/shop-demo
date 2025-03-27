<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-card class="order-card">
          <el-row :gutter="20">
            <el-col
              v-for="(item, index) in orderStatus"
              :key="index"
              :span="4"
              class="order-item"
              @click="handleStatusClick(item.type)"
            >
              <div class="status-item" :class="{ active: props.type === item.type }">
                <el-badge :value="item.count" :max="99" class="badge"></el-badge>
                <p class="title">{{ item.title }}</p>
                <p class="desc">{{ getStatusDesc(item.type) }}</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-header>

      <el-main class="main">Main</el-main>
    </el-container>
  </div>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter(); // 获取路由实例
const orderStatus = ref([
  { title: "待付款", count: 2, type: "pending" },
  { title: "待发货", count: 1, type: "unshipped" },
  { title: "待收货", count: 3, type: "shipped" },
  { title: "已完成", count: 8, type: "completed" },
  { title: "退换货", count: 0, type: "return" },
]);

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

// 生命周期函数
onMounted(() => {
  fetchData(); // 调用获取数据的函数
});

// 根据类型获取数据
const fetchData = () => {
  console.log("当前订单类型:", props.type);
  // 调用不同的 API 接口
  // 例如：getOrdersByType(props.type)
};

// todo监听参数变化

// 添加参数验证
const validTypes = ["pending", "completed", "return", "shipped", "unshipped"];

watch(
  () => props.type,
  (newVal) => {
    if (!validTypes.includes(newVal)) {
      router.push("/404");
    }
  }
);

// 添加状态描述方法
const getStatusDesc = (type) => {
  const descMap = {
    pending: '等待买家付款',
    unshipped: '等待商家发货',
    shipped: '商品运输中',
    completed: '交易已完成',
    return: '退换货处理中'
  }
  return descMap[type] || ''
}

// 添加状态点击处理
const handleStatusClick = (type) => {
  router.push({ query: { type } })
}
</script>

<style scoped>
.header {
  position: relative;
  display: flex;
  height: auto !important;
  padding: 0;
  margin-top: -450px;
  left: 0px;
}

.order-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff; 
  height: auto;
  width: 1650px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.order-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.status-item {
  text-align: center;
  padding: 10px 0;
  transition: all 0.3s;
}

.status-item:hover {
  transform: translateY(-3px);
}

.status-item.active {
  color: #409eff;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}

.desc {
  font-size: 12px;
  color: #909399;
}

.badge {
  margin-top: 5px;
}
</style>
