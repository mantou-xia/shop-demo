<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="goods-detail">
    <!-- 商品主图与基本信息 -->
    <el-row :gutter="40" class="main-section">
      <el-col :span="12">
        <el-image
          :src="goodInfo.mainImage"
          :preview-src-list="goodInfo.imageList"
          fit="contain"
          class="main-image"
        >
          <template #error>
            <div class="image-error">图片加载失败</div>
          </template>
        </el-image>
      </el-col>

      <el-col :span="12">
        <h1 class="goods-title">{{ goodInfo.name }}</h1>
        <div class="price-section">
          <span class="current-price">¥{{ goodInfo.price }}</span>
          <span class="original-price">¥{{ goodInfo.originalPrice }}</span>
        </div>

        <!-- 规格选择 -->
        <div class="spec-section">
          <h3>规格选择</h3>
          <el-radio-group v-model="selectedSpec">
            <el-radio
              v-for="spec in goodInfo.specs"
              :key="spec"
              :label="spec"
              border
            >
              {{ spec }}
            </el-radio>
          </el-radio-group>
        </div>

        <!-- 操作按钮 -->
        <div class="action-buttons">
          <el-button type="danger" @click="handleAddToCart"
            >加入购物车</el-button
          >
          <el-button type="warning" @click="handleBuyNow">立即购买</el-button>
        </div>
      </el-col>
    </el-row>

    <!-- 商品详情 -->
    <div class="detail-section">
      <h2>商品详情</h2>
      <div class="detail-content" v-html="goodInfo.detailHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const route = useRoute();
const router = useRouter();
const goodInfo = ref({
  mainImage: "",
  imageList: [],
  specs: [],
});
const isLoading = ref(true);
const selectedSpec = ref("");

// 生成模拟数据（正式项目应替换为API请求）
const generateMockData = (id) => ({
  id,
  name: `商品 ${id}`,
  price: (1999 + Number(id)).toFixed(2),
  originalPrice: (2999 + Number(id)).toFixed(2),
  mainImage: `https://picsum.photos/800/800?random=${id}`,
  imageList: Array.from(
    { length: 4 },
    (_, i) => `https://picsum.photos/800/800?random=${id}-${i}`
  ),
  specs: ["标配版", "尊享版", "旗舰版"],
  detailHtml: `
    <div style="padding:20px">
      <h3>产品特色</h3>
      <p>高端旗舰 ${id} 代新品</p>
      <img src="https://picsum.photos/1200/300?random=${id}-detail" style="width:100%">
    </div>
  `,
});

onMounted(async () => {
  const productId = route.params.id;

  if (!productId || isNaN(productId)) {
    router.replace({ name: "Error" });
    return;
  }

  try {
    // 模拟加载延迟
    await new Promise((resolve) => setTimeout(resolve, 500));
    goodInfo.value = generateMockData(productId);
  } catch (error) {
    ElMessage.error("商品加载失败");
  } finally {
    isLoading.value = false;
  }
});

const handleAddToCart = () => {
  ElMessage.success(
    `已添加 ${goodInfo.value.name} ${selectedSpec.value} 到购物车`
  );
};

const handleBuyNow = () => {
  router.push({
    name: "Checkout",
    query: { productId: goodInfo.value.id, spec: selectedSpec.value },
  });
};
</script>

<style lang="scss" scoped>
.goods-detail {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  .main-section {
    padding: 20px 0;

    .main-image {
      width: 100%;
      height: 500px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  }

  .goods-title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .price-section {
    margin: 20px 0;
    .current-price {
      font-size: 28px;
      color: #ff6700;
      margin-right: 10px;
    }
    .original-price {
      font-size: 16px;
      color: #999;
      text-decoration: line-through;
    }
  }

  .spec-section {
    margin: 30px 0;

    h3 {
      margin-bottom: 15px;
      font-size: 16px;
    }
  }

  .action-buttons {
    margin-top: 40px;

    .el-button {
      width: 180px;
      height: 50px;
      font-size: 16px;
    }
  }

  .detail-section {
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 20px;

    h2 {
      font-size: 20px;
      margin-bottom: 15px;
    }
  }
}

.image-error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f5f5f5;
  color: #999;
}
</style>
