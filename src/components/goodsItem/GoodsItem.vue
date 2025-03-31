<template>
  <div class="goods-item" @click="handleGoodsClick(itemData.id)">
    <div class="image-container">
      <el-image :src="itemData.image" fit="cover" class="goods-image" lazy :loading="isLoading">
        <template #loading>
          <div class="image-loading">
            <el-icon class="is-loading">
              <Loading />
            </el-icon>
            <span>图片加载中...</span>
          </div>
        </template>
      </el-image>
      <span v-if="itemData.promoTag" class="promo-tag">{{ itemData.promoTag }}</span>
    </div>
    <div class="goods-info">
      <h4 class="goods-title">{{ itemData.title }}</h4>
      <p class="goods-desc">{{ itemData.desc }}</p>
      <div class="price-section">
        <span class="current-price">¥{{ itemData.currentPrice }}</span>
        <del v-if="itemData.originalPrice" class="original-price">¥{{ itemData.originalPrice }}</del>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const { itemData } = defineProps({
  itemData: {
    type: Object,
    default: () => ({
      id: '',             // 商品ID（必须）
      image: '',          // 商品图片URL
      title: '默认商品',   // 商品标题（默认值）
      desc: '',           // 商品描述/副标题
      currentPrice: 0,    // 当前售价（必须）
      originalPrice: null,// 原价（可选，null时不显示）
      promoTag: ''        // 促销标签（如"新品"/"热卖"）
    })
  }
})

const router = useRouter(); // 获取路由实例

// 新增商品点击处理
const handleGoodsClick = (id) => {
  router.push(`/goods/${id}`); // 根据ID跳转到商品详情页
};
</script>

<style lang="scss" scoped>
.goods-item {
  margin-bottom: 20px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .image-container {
    position: relative;
    height: 300px;

    .goods-image {
      width: 100%;
      height: 100%;
    }

    .promo-tag {
      position: absolute;
      top: 10px;
      left: 10px;
      background: #ff6700;
      color: white;
      padding: 2px 8px;
      border-radius: 3px;
      font-size: 12px;
    }
  }

  .goods-info {
    padding: 15px;

    .goods-title {
      margin: 0 0 8px;
      font-size: 16px;
      color: #333;
    }

    .goods-desc {
      font-size: 12px;
      color: #999;
      margin-bottom: 12px;
    }

    .price-section {
      .current-price {
        color: #ff6700;
        font-size: 18px;
        margin-right: 8px;
      }

      .original-price {
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>