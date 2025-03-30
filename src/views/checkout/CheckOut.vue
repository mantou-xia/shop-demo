<template>
  <div class="checkout-container">
    <!-- 进度条 -->
    <el-steps :active="2" align-center class="checkout-steps">
      <el-step title="购物车" />
      <el-step title="核对订单" />
      <el-step title="成功提交订单" />
    </el-steps>

    <!-- 收货地址 -->
    <el-card class="address-card">
      <div class="address-header">
        <h3>收货信息</h3>
        <el-button type="text" @click="manageAddress">管理地址</el-button>
      </div>
      <el-radio-group v-model="selectedAddress">
        <div v-for="addr in addressList" :key="addr.id" class="address-item">
          <el-radio :label="addr.id">
            <div class="address-info">
              <span class="user-info">{{ addr.name }} {{ addr.tel }}</span>
              <span class="detail">{{ addr.province }}{{ addr.city }}{{ addr.district }}{{ addr.address }}</span>
              <el-tag v-if="addr.isDefault" size="mini" type="danger">默认</el-tag>
            </div>
          </el-radio>
        </div>
      </el-radio-group>
    </el-card>

    <!-- 商品清单 -->
    <el-card class="goods-card">
      <h3>商品清单</h3>
      <div class="goods-list">
        <div class="goods-item">
          <el-image :src="orderInfo.image" class="goods-image" fit="contain"></el-image>
          <div class="goods-info">
            <h4>{{ orderInfo.productName }}</h4>
            <p class="spec">规格：{{ orderInfo.spec }}</p>
            <div class="price-info">
              <span class="price">¥{{ orderInfo.price }}</span>
              <span class="quantity">x1</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 支付方式 -->
    <el-card class="payment-card">
      <h3>支付方式</h3>
      <el-radio-group v-model="paymentMethod">
        <el-radio label="alipay">
          <el-icon><OfficeBuilding /></el-icon>
          支付宝支付
        </el-radio>
        <el-radio label="wechat">
          <el-icon><ChatDotRound /></el-icon>
          微信支付
        </el-radio>
      </el-radio-group>
    </el-card>

    <!-- 优惠促销 -->
    <el-card class="coupon-card">
      <h3>优惠促销</h3>
      <div class="coupon-list">
        <el-select v-model="selectedCoupon" placeholder="请选择优惠券">
          <el-option
            v-for="coupon in coupons"
            :key="coupon.id"
            :label="coupon.name"
            :value="coupon.id"
          >
            <span>{{ coupon.name }}</span>
            <span class="coupon-value">-¥{{ coupon.value }}</span>
          </el-option>
        </el-select>
      </div>
    </el-card>

    <!-- 发票信息 -->
    <el-card class="invoice-card">
      <el-collapse v-model="activeCollapse">
        <el-collapse-item name="invoice">
          <template #title>
            <h3>发票信息</h3>
          </template>
          <el-radio-group v-model="invoiceType">
            <el-radio label="none">不开发票</el-radio>
            <el-radio label="personal">个人发票</el-radio>
            <el-radio label="company">公司发票</el-radio>
          </el-radio-group>
          <div v-if="invoiceType !== 'none'" class="invoice-form">
            <el-input v-model="invoiceTitle" placeholder="发票抬头"></el-input>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>

    <!-- 订单备注 -->
    <el-card class="remark-card">
      <h3>订单备注</h3>
      <el-input
        v-model="orderRemark"
        type="textarea"
        :rows="3"
        placeholder="请输入备注信息（例如：配送要求等）"
      ></el-input>
    </el-card>

    <!-- 价格汇总 -->
    <div class="price-summary">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="商品总金额">¥{{ orderInfo.price }}</el-descriptions-item>
        <el-descriptions-item label="运费">¥0.00</el-descriptions-item>
        <el-descriptions-item label="优惠金额">-¥{{ discountAmount }}</el-descriptions-item>
        <el-descriptions-item label="实付金额" class="total-price">
          ¥{{ totalAmount }}
        </el-descriptions-item>
      </el-descriptions>
      <el-button type="danger" class="submit-btn" @click="submitOrder">提交订单</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  ElMessage, 
  ElIcon, 
  ElCollapse, 
  ElCollapseItem 
} from 'element-plus'
import { OfficeBuilding, ChatDotRound } from '@element-plus/icons-vue'

// 显式声明组件引用

const route = useRoute()

// 订单基础信息
const orderInfo = ref({
  productId: route.query.productId,
  spec: route.query.spec,
  productName: `商品 ${route.query.productId}`,
  price: (1999 + Number(route.query.productId)).toFixed(2),
  image: `https://picsum.photos/100/100?random=${route.query.productId}`
})

// 地址管理
const selectedAddress = ref('')
const addressList = ref([
  {
    id: 1,
    name: '张三',
    tel: '13800138000',
    province: '北京市',
    city: '北京市',
    district: '朝阳区',
    address: '朝阳门内大街1号',
    isDefault: true
  },
  {
    id: 2,
    name: '李四',
    tel: '13900139000',
    province: '上海市',
    city: '上海市',
    district: '浦东新区',
    address: '陆家嘴环路100号',
    isDefault: false
  }
])

// 支付方式
const paymentMethod = ref('alipay')

// 优惠信息
const selectedCoupon = ref('')
const coupons = ref([
  { id: 1, name: '新用户优惠券', value: 50 },
  { id: 2, name: '会员专属券', value: 30 }
])

// 发票信息
const activeCollapse = ref([])
const invoiceType = ref('none')
const invoiceTitle = ref('')

// 订单备注
const orderRemark = ref('')

// 金额计算
const discountAmount = computed(() => {
  const coupon = coupons.value.find(c => c.id === selectedCoupon.value)
  return coupon ? coupon.value : 0
})

const totalAmount = computed(() => {
  return (orderInfo.value.price - discountAmount.value).toFixed(2)
})

const manageAddress = () => {
  ElMessage.info('地址管理功能待实现')
}

const submitOrder = () => {
  if (!selectedAddress.value) {
    ElMessage.error('请选择收货地址')
    return
  }
  
  if (!paymentMethod.value) {
    ElMessage.error('请选择支付方式')
    return
  }

  // 实际开发中此处应调用提交订单接口
  ElMessage.success('订单提交成功，跳转支付...')
}
</script>

<style lang="scss" scoped>
.checkout-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #f5f5f5;

  .checkout-steps {
    margin-bottom: 30px;
  }

  .address-card {
    margin-bottom: 20px;

    .address-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .address-item {
      padding: 15px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }

      .address-info {
        margin-left: 10px;

        .user-info {
          font-weight: bold;
          margin-right: 15px;
        }

        .detail {
          color: #666;
        }

        .el-tag {
          margin-left: 10px;
        }
      }
    }
  }

  .goods-card {
    margin-bottom: 20px;

    .goods-item {
      display: flex;
      padding: 15px;

      .goods-image {
        width: 80px;
        height: 80px;
        margin-right: 15px;
      }

      .goods-info {
        flex: 1;

        .spec {
          color: #999;
          margin: 5px 0;
        }

        .price-info {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .price {
            color: #ff6700;
            font-size: 16px;
          }

          .quantity {
            color: #666;
          }
        }
      }
    }
  }

  .price-summary {
    margin-top: 20px;
    text-align: right;

    .el-descriptions {
      margin-bottom: 20px;

      :deep(.el-descriptions__label) {
        width: 120px;
      }

      .total-price {
        :deep(.el-descriptions__content) {
          color: #ff6700;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }

    .submit-btn {
      width: 200px;
      height: 50px;
      font-size: 18px;
    }
  }

  .coupon-card,
  .payment-card,
  .invoice-card,
  .remark-card {
    margin-bottom: 20px;

    .el-radio {
      margin-right: 30px;
    }

    .coupon-value {
      color: #ff6700;
      margin-left: 10px;
    }
  }

  .invoice-form {
    margin-top: 15px;
    max-width: 300px;
  }
}
</style>