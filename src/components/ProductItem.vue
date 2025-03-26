<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6" class="product-item">
    <el-card class="product-card">
      <img :src="product.image" class="product-image">
      <h3 class="product-title">
        {{ product.name }}
      </h3>
      <p class="product-price">
        ¥ {{ product.price }}
      </p>
      <el-button type="primary" class="add-to-cart" @click="$emit('add-to-cart', product)">
        加入购物车
      </el-button>
    </el-card>
  </el-col>
</template>

<script setup>
// 组件属性定义
defineProps({
  product: {
    type: Object,
    required: true
  }
})

</script>

<style scoped lang="scss">
.product-item {
  padding: 10px;

  :deep(.el-input__inner) {
    width: 100%;
    min-width: 120px;
  }
}

.product-card {
  margin-bottom: 20px;
  transition: transform 0.3s;

  :deep(.el-card__body) {
    padding: 15px;
  }

  &:hover {
    transform: translateY(-5px);
  }
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-title {
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
}

.product-price {
  color: #ff4444;
  font-size: 18px;
  text-align: center;
  margin: 10px 0;
}

.add-to-cart {
  width: 100%;
}
</style>
