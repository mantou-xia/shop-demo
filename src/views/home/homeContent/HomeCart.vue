<template>
  <div class="cart-container">
    <el-main class="cart-main">
      <el-card class="cart-card">
        <!-- 购物车标题 -->
        <div class="cart-header">
          <h2>我的购物车（{{ totalItems }}件）</h2>
        </div>

        <!-- 商品列表 -->
        <el-table
          :data="cartItems"
          style="width: 100%"
        >
          <el-table-column width="80">
            <template #default="scope">
              <el-checkbox v-model="scope.row.selected" />
            </template>
          </el-table-column>

          <el-table-column label="商品">
            <template #default="scope">
              <div class="product-info">
                <img
                  :src="scope.row.image"
                  class="product-image"
                >
                <span>{{ scope.row.name }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column
            label="单价"
            width="120"
          >
            <template #default="scope">
              ¥ {{ scope.row.price }}
            </template>
          </el-table-column>

          <el-table-column
            label="数量"
            width="180"
          >
            <template #default="scope">
              <el-input-number
                v-model="scope.row.quantity"
                :min="1"
                :max="99"
                size="small"
              />
            </template>
          </el-table-column>

          <el-table-column
            label="小计"
            width="120"
          >
            <template #default="scope">
              ¥ {{ (scope.row.price * scope.row.quantity).toFixed(2) }}
            </template>
          </el-table-column>

          <el-table-column
            label="操作"
            width="80"
          >
            <template #default="scope">
              <el-button
                type="danger"
                size="small"
                @click="removeItem(scope.row.id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 结算栏 -->
        <div class="checkout-bar">
          <el-row>
            <el-col
              :span="12"
              class="total-price"
            >
              合计：<span class="price">¥ {{ totalPrice }}</span>
            </el-col>
            <el-col
              :span="12"
              class="checkout-btns"
            >
              <el-button
                type="info"
                @click="goBack"
              >
                继续购物
              </el-button>
              <el-button
                type="danger"
                @click="checkout"
              >
                去结算
              </el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟购物车数据
const cartItems = ref([
  {
    id: 1,
    name: '智能手机 X1',
    price: 2999.00,
    quantity: 1,
    image: 'https://picsum.photos/100/100?random=1',
    selected: true
  }
  // 添加更多测试数据...
])

// 计算总价
const totalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.selected)
    .reduce((sum, item) => sum + (item.price * item.quantity), 0)
    .toFixed(2)
})

// 商品总数
const totalItems = computed(() => cartItems.value.length)

// 删除商品
const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

// 页面跳转
const goBack = () => router.go(-1)
const checkout = () => router.push('/checkout')
</script>

<style scoped lang="scss">
.cart-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.cart-main {
    flex: 1;
    padding: 20px;
    background-color: #f5f5f5;
}

.cart-card {
    margin: 0 auto;
    max-width: 1200px;
}

.product-info {
    display: flex;
    align-items: center;

    .product-image {
        width: 60px;
        height: 60px;
        margin-right: 15px;
    }
}

.checkout-bar {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff8f0;

    .total-price {
        font-size: 18px;
        line-height: 40px;

        .price {
            color: #ff4500;
            font-size: 24px;
            font-weight: bold;
        }
    }

    .checkout-btns {
        text-align: right;

        .el-button {
            margin-left: 15px;
            padding: 12px 30px;
        }
    }
}
</style>

<style scoped lang="scss">
:deep(.el-table) {
  width: 100% !important;
}

:deep(.el-table__header-wrapper),
:deep(.el-table__body) {
  width: 100% !important;
}

:deep(.el-table__header) {
  th:nth-child(2) {  // 商品列
    width: 55%;      // 增加宽度比例
    padding-left: 20px;  // 增加左侧间距
  }
  th {
    text-align: center;
    &:nth-child(2) {  // 商品列保持左对齐
      text-align: left;
    }
  }
}

// 新增表体对齐设置
:deep(.el-table__body) {
  td {
    &:first-child {  // 复选框列
      text-align: center;
    }
    &:nth-child(2) {  // 商品名称左对齐
      text-align: left;
    }
    &:nth-child(3),   // 单价
    &:nth-child(4),   // 数量
    &:nth-child(5) {  // 小计
      text-align: right;
      padding-right: 20px;
    }
    &:last-child {  // 操作列
      text-align: center;
    }
  }
}
</style>

<style lang="scss" scoped>
.container {
    padding: 0 200px;
}
</style>
