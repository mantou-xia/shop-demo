<template>
  <!-- 页面主体 -->
  <div class="main-content">
    <SubNavModule1 />
    <!-- 商品展示区 -->
    <div class="product-area">
      <!-- 轮播图 -->
      <el-carousel
        height="300px"
        class="banner"
      >
        <el-carousel-item
          v-for="item in 4"
          :key="item"
        >
          <img
            :src="`https://picsum.photos/1200/300?random=${item}`"
            class="banner-image"
          >
        </el-carousel-item>
      </el-carousel>

      <!-- 商品列表 -->
      <el-row
        :gutter="20"
        class="product-list"
      >
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  ElCarousel, ElCarouselItem, ElRow
} from 'element-plus'
import SubNavModule1 from '../../../components/subNavModule1/SubNavModule1.vue'
import ProductItem from '../../../components/ProductItem.vue'

export default defineComponent({
  components: {
    ElCarousel,
    ElCarouselItem,
    ElRow,
    SubNavModule1,
    ProductItem // 组件注册应在此处统一完成
  },
  setup () {
    // 示例商品数据
    const products = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: `商品 ${i + 1}`,
      price: (Math.random() * 1000).toFixed(2),
      image: `https://picsum.photos/200/200?random=${i}`
    }))

    const addToCart = (product) => {
      console.log('加入购物车:', product)
      // 这里可以添加购物车逻辑
    }

    const handleCategorySelect = (index) => {
      console.log('选择分类:', index)
      // 这里可以添加分类筛选逻辑
    }

    return {
      products,
      addToCart,
      handleCategorySelect
    }
  }
})
</script>

<style scoped lang="scss">
.home-container {
    min-height: 100vh;
}

.main-content {
    display: flex;
    padding: 0 200px;
}

.product-area {
    flex: 1;
    padding: 20px;
}

.banner {
    margin-top: 0px;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-list {
    margin-top: 20px;
}

.product-card {
    margin-bottom: 20px;
    transition: transform 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
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
