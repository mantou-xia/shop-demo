<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavModule1 />
      </el-header>
      <el-main class="main">
        <div class="order-select">
          <el-card class="order-card">
            <el-row :gutter="10" justify="space-between">
              <el-col v-for="(item, index) in orderStatus" :key="index" :xs="8" :sm="6" :md="4" :lg="4" :xl="4"
                class="order-item" @click="handleStatusClick(item.type)">
                <div class="status-item" :class="{ active: props.type === item.type }">
                  <el-badge :value="item.count" :max="99" class="badge"
                    :type="props.type === item.type ? 'primary' : 'info'" />
                  <p class="title">{{ item.title }}</p>
                  <p class="desc">{{ getStatusDesc(item.type) }}</p>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>

        <el-empty v-if="filteredOrders.length === 0" description="暂无订单数据" />

        <div v-else class="order-list">
          <OrderItem
            v-for="order in filteredOrders"
            :key="order.id"
            :order="order"
            :type="props.type"
            @pay="handlePay"
            @cancel="handleCancel"
            @confirm="confirmReceipt"
          />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { watch, onMounted, ref, computed } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import NavModule1 from "../../components/navModule1/NavModule1";
import OrderItem from "../../components/orderItem/OrderItem";
const router = useRouter();

// 修改路由跳转方式
const handleStatusClick = (type) => {
  router.push({
    name: 'OrderStatus',
    query: { type }  // 改为query参数
  }).then(() => {
    fetchData();
  });
};

// 监听路由参数变化（当直接在地址栏修改type参数时触发）
watch(
  () => router.currentRoute.value.query.type,
  (newType) => {
    if (newType !== props.type) {
      fetchData();
    }
  }
);

// 路由更新守卫（通过程序化导航切换type参数时触发）
onBeforeRouteUpdate((to, from) => {
  if (to.query.type !== from.query.type) {
    fetchData();
  }
});


// 修改props接收方式
const props = defineProps({
  type: {
    type: String,
    default: 'all'  // 添加默认值
  }
});

const orderStatus = ref([
  { title: "待付款", count: 2, type: "pending" },
  { title: "待发货", count: 1, type: "unshipped" },
  { title: "待收货", count: 3, type: "shipped" },
  { title: "已完成", count: 8, type: "completed" },
  { title: "退换货", count: 0, type: "return" },
  {
    title: "全部订单",
    count: computed(() =>
      orderStatus.value.slice(0, 5).reduce((sum, item) => sum + item.count, 0)
    ),
    type: "all",
  },
]);


// 模拟订单数据
const orders = ref([
  {
    id: 1,
    type: "pending",
    name: "商品名称1",
    price: 199.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230001",
    quantity: 1,
    createTime: "2023-05-01 10:30",
  },
  {
    id: 2,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 3,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 4,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 5,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 6,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 7,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 8,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 9,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  },
  {
    id: 10,
    type: "unshipped",
    name: "商品名称2",
    price: 299.0,
    image:
      "https://img2.baidu.com/it/u=294791294,4284542133&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    orderNo: "NO20230002",
    quantity: 2,
    createTime: "2023-05-02 14:15",
  }
]);

const filteredOrders = computed(() => {
  return orders.value.filter((order) => order.type === props.type);
});

const getStatusDesc = (type) => {
  const descMap = {
    pending: "等待买家付款",
    unshipped: "等待商家发货",
    shipped: "商品运输中",
    completed: "交易已完成",
    return: "退换货处理中",
    all: "全部订单",
  };
  return descMap[type] || "";
};


const handlePay = (order) => {
  console.log("付款操作", order);
};

const handleCancel = (order) => {
  console.log("取消订单", order);
};

const confirmReceipt = (order) => {
  console.log("确认收货", order);
};

onMounted(() => {
  fetchData();
});

const fetchData = () => {
  console.log("当前订单类型:", props.type);
};

const validTypes = [
  "pending",
  "completed",
  "return",
  "shipped",
  "unshipped",
  "all",
];

watch(
  () => props.type,
  (newVal) => {
    if (!validTypes.includes(newVal)) {
      router.push("/404");
    }
  }
);
</script>

<style scoped lang="scss">
.common-layout {
  padding: 20px;
}

.order-select {
  height: auto !important;
  padding: 0;
  margin-bottom: 20px;
  position: fixed;
  width: 100%;
  top: 50px;
  left: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.main {
  padding: 0;
  margin-top: 150px;
  width: calc(100% - 40px);
  /* 与header保持一致 */
  min-width: 1200px;
  /* 与header保持一致 */
  margin-left: auto;
  margin-right: auto;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.order-card {
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  padding: 10px;
}

.order-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 5px 0;
}

.status-item {
  text-align: center;
  padding: 12px 0;
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #f5f7fa;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    transition: all 0.1s ease;
    background-color: #e6f1ff;
  }

  &.active {
    background-color: #f0f7ff;
    border-bottom: 2px solid #67c23a;
    box-shadow: 0 2px 8px rgba(103, 194, 58, 0.2);

    .title {
      color: #67c23a;
      font-weight: 600;
    }

    .desc {
      color: #67c23a;
    }

    .el-badge {
      :deep(.el-badge__content) {
        background-color: #67c23a;
      }
    }
  }
}

.title {
  font-size: 15px;
  font-weight: 500;
  margin: 8px 0 4px;
  color: #606266;
}

.desc {
  font-size: 12px;
  color: #909399;
  margin: 0;
}

.main {
  width: 100%;
  top: 0;
  left: 0;
  padding: 0;
}

.order-list {
  display: grid;
  gap: 20px;
}

.order-item-card {
  margin-bottom: 20px;
}

.order-content {
  width: 50vb;
  display: flex;
  padding: 15px;
}

.product-image {
  width: 120px;
  height: 120px;
  margin-right: 20px;
  border-radius: 4px;
  object-fit: cover;
}

.order-info {
  flex: 1;
}

.order-details {
  margin: 10px 0;
  color: #666;
  font-size: 14px;

  p {
    margin: 5px 0;
  }
}

.order-actions {
  margin-top: 15px;
  text-align: right;
}
</style>
