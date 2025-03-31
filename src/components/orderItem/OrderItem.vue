<template>
  <el-card class="order-item-card" shadow="hover">
    <div class="order-content">
      <img :src="order.image" class="product-image" />
      <div class="order-info">
        <h3>{{ order.name }}</h3>
        <div class="order-shipping">
          <el-card class="shipping-card" shadow="never">
            <h4>运输信息</h4>
            <div v-if="shippingInfo" class="shipping-details">
              <p>物流公司：{{ shippingInfo.company }}</p>
              <p>运单号码：{{ shippingInfo.trackingNumber }}</p>
              <p>当前状态：{{ shippingInfo.status }}</p>
              <p>更新时间：{{ shippingInfo.updateTime }}</p>
            </div>
            <div v-else class="shipping-empty">
              暂无物流信息
            </div>
          </el-card>
        </div>
        <div class="order-details">
          <p>订单号: {{ order.orderNo }}</p>
          <p>价格: ¥{{ order.price }}</p>
          <p>数量: {{ order.quantity }}</p>
          <p>下单时间: {{ order.createTime }}</p>
        </div>
        <div class="order-actions">
          <el-button v-if="type === 'pending'" type="primary" @click="$emit('pay', order)">
            立即付款
          </el-button>
          <el-button v-if="type === 'unshipped'" plain @click="$emit('cancel', order)">
            取消订单
          </el-button>
          <el-button v-if="type === 'shipped'" type="success" @click="$emit('confirm', order)">
            确认收货
          </el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  order: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'all'
  },
  shippingInfo: {
    type: Object,
    default: () => ({
      company: '',
      trackingNumber: '',
      status: '运输中',
      updateTime: ''
    })
  }
});
</script>

<style scoped lang="scss">
.order-item-card {
  margin-bottom: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
}

.product-image {
  width: 180px;
  height: 180px;
  margin-right: 28px;
  border-radius: 6px;
}

.order-details p {
  color: #333;
  font-size: 14px;
  line-height: 22px;
}

.order-actions .el-button {
  min-width: 100px;
  border-radius: 20px;
  &--primary {
    background: linear-gradient(90deg, #e2231a, #c91419);
    border-color: transparent;
  }
}

.order-content {
  width: 100%;
  display: flex;
  align-items: stretch;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
}

.product-image {
  width: 200px;
  height: 100%;
  margin-right: 28px;
  object-fit: cover;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: cover;
  background: linear-gradient(135deg, #f5f5f5 25%, #fafafa 100%);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  }
}

.order-content {
  padding: 24px;
  @media (max-width: 768px) {
    padding: 16px;
  }
}

.order-info {
  flex: 0 0 60%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.order-details {
  p {
    font-size: 15px;
    color: #666;
    line-height: 24px;
    strong {
      color: #e2231a;
      font-size: 18px;
    }
  }
}

.order-actions {
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  flex-wrap: wrap;

  .el-button {
    min-width: 120px;
    margin: 4px 0;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &--primary {
      box-shadow: 0 4px 6px rgba(0, 102, 255, 0.2);
    }

    &--success {
      box-shadow: 0 4px 6px rgba(0, 180, 138, 0.2);
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .el-button {
      width: 100%;
      min-width: unset;
    }
  }
}

.shipping-card {
  border-left: 3px solid #e2231a;
  margin-top: 15px;
  h4 {
    color: #333;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .shipping-details p {
    color: #666;
    font-size: 14px;
    line-height: 24px;
    &:not(:last-child) {
      border-bottom: 1px solid #f5f5f5;
      padding-bottom: 8px;
    }
  }
}
</style>