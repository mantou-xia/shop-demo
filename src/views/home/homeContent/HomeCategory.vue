<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="4">
        <!-- 添加搜索框 -->
        <el-input
          v-model="searchKeyword"
          placeholder="搜索商品分类"
          clearable
          class="search-input"
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <el-icon><search /></el-icon>
          </template>
        </el-input>

        <el-menu
          class="mi-menu"
          default-active="1"
          mode="vertical"
          @select="handleSelect"
          :background-color="menuBackground"
          :text-color="menuText"
          :active-text-color="activeColor"
        >
          <el-menu-item index="1">种类1</el-menu-item>
          <el-menu-item index="2">种类2</el-menu-item>
          <el-menu-item index="3">种类3</el-menu-item>
          <el-menu-item index="4">种类4</el-menu-item>
          <el-menu-item index="5">种类5</el-menu-item>
          <el-menu-item index="6">种类6</el-menu-item>
        </el-menu>
      </el-col>

      <!-- 右侧内容区域 -->
      <el-col :span="20">
        <!-- 商品展示区 -->
        <div class="goods-showcase">
          <el-row :gutter="20">
            <el-col
              v-for="item in 8"
              :key="item"
              :xs="12"
              :sm="8"
              :md="6"
              class="goods-item"
            >
              <div class="mi-goods-card">
                <div class="image-container">
                  <el-image
                    src="https://via.placeholder.com/300x300"
                    fit="cover"
                    class="goods-image"
                  />
                  <span class="promo-tag">新品</span>
                </div>
                <div class="goods-info">
                  <h4 class="goods-title">商品 {{ item }}</h4>
                  <p class="goods-desc">高端旗舰 年度新品</p>
                  <div class="price-section">
                    <span class="current-price">¥{{ 1999 + item }}</span>
                    <del class="original-price">¥{{ 2999 + item }}</del>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ElRow,
  ElCol,
  ElMenu,
  ElMenuItem,
  ElImage,
  ElInput,
  ElIcon
} from 'element-plus'
import { Search } from '@element-plus/icons-vue'

// 新增搜索相关逻辑
const searchKeyword = ref('')
const handleSearch = () => {
  console.log('搜索关键词:', searchKeyword.value)
  // 这里可以添加搜索逻辑
}

// 小米主题色
const menuBackground = ref('#ffffff')
const menuText = ref('#333')
const activeColor = ref('#ff6700')

const handleSelect = (key) => {
  console.log('选中分类:', key)
}
</script>

<style lang="scss" scoped>
.container {
  .mi-menu {
    margin-top: 15px; // 增加与搜索框的间距
    border-right: none;
    :deep(.el-menu-item) {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      &.is-active {
        background-color: #fff5f0 !important;
      }
      &:hover {
        background-color: #fff5f0;
      }
    }
  }

  .goods-showcase {
    padding: 20px;
    background: white;
    border-radius: 8px;

    .mi-goods-card {
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
  }
}
</style>
<!-- 在文件末尾添加空行 -->
