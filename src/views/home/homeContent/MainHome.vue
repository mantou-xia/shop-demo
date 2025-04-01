<!-- eslint-disable vue/no-parsing-error -->
<template>
  <!-- 页面主体 -->
  <div class="main-container">
    <!-- 新增京东风格头部 -->
    <header class="main-header">
      <div class="header-content">
        <div class="logo">SHOP-DEMO</div>
        <el-input class="search-input" placeholder="搜索框" v-model="searchValue">
          <template #append>
            <el-button type="primary">
              <el-icon><Search /></el-icon>
              <span>搜索</span>
            </el-button>
          </template>
        </el-input>
        <div class="user-panel">会员中心</div>
      </div>
    </header>

    <div class="main-content">
      <!-- 新增侧边导航栏 -->
      <aside class="side-nav">
        <div 
          v-for="n in 10" 
          :key="n"
          class="nav-item"
          @mouseenter="handleCategorySelect(n)"
        >
          分类导航 {{ n }}
        </div>
      </aside>

      <!-- 商品展示区 -->
      <div class="product-area">
      <!-- 轮播图 -->
      <el-carousel height="300px" class="banner">
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="`https://picsum.photos/1200/300?random=${item}`" class="banner-image">
        </el-carousel-item>
      </el-carousel>

      <!-- 商品列表 -->
      <el-row :gutter="20" class="product-list">
        <el-col 
          v-for="(product, index) in products" 
          :key="index"
          :xs="12"
          :sm="8"
          :md="6"
          class="product-col"
        >
          <GoodsItem 
            :item-data="product" 
            class="product-card"
            @add-to-cart="addToCart"
          />
        </el-col>
      </el-row>
    </div>
    <!--这边下面可以加上一个更大的组件用来展示更多的商品，用于全屏展示，将导航栏截下-->
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  ElCarousel, ElCarouselItem, ElRow
} from 'element-plus'
/** * import SubNavModule1 from '../../../components/subNavModule1/SubNavModule1.vue' ***/
import GoodsItem from '../../../components/goodsItem/GoodsItem.vue'

export default defineComponent({
  components: {
    ElCarousel,
    ElCarouselItem,
    ElRow,
    // SubNavModule1,
    GoodsItem // 组件注册应在此处统一完成
  },
  setup() {
    // 示例商品数据
    const products = Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: `商品 ${i + 1}`,
      desc: '高端旗舰 年度新品',
      currentPrice: (Math.random() * 1000).toFixed(2),
      image: `https://picsum.photos/200/200?random=${i}`,
      promoTag: '热卖'
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
// 新增头部样式
.main-header {
  padding: 12px 200px;
  color: white;

  .header-content {
    display: flex;
    align-items: center;
    gap: 30px;

    .logo {
      font-size: 24px;
      font-weight: bold;
      background: linear-gradient(45deg, #ff4444, #ff8f00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .search-input {
      margin: auto;
      flex: 1;
      max-width: 800px;
      transition: all 0.3s;

      :deep(.el-input__wrapper) {
        // 添加背景色保证输入可见
        border-radius: 20px;
        border: 2px solid #ff4444;
        background: rgba(255,255,255,0.9);
        height: 40px; // 调整高度
        box-shadow: none;

        &:focus-within {
          border-color: #ff0000;
          box-shadow: 0 0 8px rgba(255,68,68,0.3);
        }
      }

      :deep(input::placeholder) {
        color: #999;
        font-size: 14px;
      }
    }

    :deep(.el-input-group__append) {
      background: linear-gradient(45deg, #4a90e2, #36d1dc) !important;
      width: 90px;
      border-radius: 20px;
      margin-left: 15px;
      padding: 0 20px;
      transition: all 0.3s;
      
      .el-button {
        display: flex;
        align-items: center;
        color: white !important;
        text-align: center;
        gap: 8px;
        font-size: 14px;
        padding: 0 12px; // 新增对称内边距
        justify-content: center; // 确保强制居中
        
        // 新增图标容器样式
        .el-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 20px;
          font-size: 18px; // 修复重复的font-size声明
          margin-right: 0; // 移除右边距
        }
        
        span {
          text-align: center;
          width: 100%; // 新增宽度设置
          padding: 0 2px; // 微调文字内边距
        }
        
        font-weight: 500;
        flex-shrink: 0; // 防止文字被压缩
        
        &:hover {
          background: rgba(255,255,255,0.1);
          box-shadow: 0 2px 8px rgba(74,144,226,0.4);
        }
      }
    }
  }
}

// 调整主内容区布局
.main-content {
  display: flex;
  padding: 20px 200px;
  gap: 20px;
}

// 新增侧边栏样式
.side-nav {
  height: auto;
  width: 200px;
  background: linear-gradient(145deg, #f8f8f8, #ffffff);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);

  .nav-item {
    padding: 12px;
    margin: 6px 0;
    border-radius: 4px;
    background: linear-gradient(90deg, #f0f9ff, #ebf4fc);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: linear-gradient(90deg, #4a90e2, #36d1dc);
      color: white;
      transform: translateX(5px);
    }
  }
}

// 修改商品卡片样式
.product-card {
  background: linear-gradient(145deg, #ffffff, #f9f9f9);
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  &:hover {
    box-shadow: 0 4px 16px rgba(255,68,68,0.2);
    background: linear-gradient(145deg, #fff5f5, #ffecec);
  }
}
</style>
