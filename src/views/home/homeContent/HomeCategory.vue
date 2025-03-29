<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="4">
        <!-- 搜索框 -->
        <!--<SearchInput @search="handleSearch" />-->
        <el-menu
class="mi-menu" default-active="1" mode="vertical" :background-color="menuBackground"
          :text-color="menuText" :active-text-color="activeColor" @select="handleSelect">
          <el-menu-item index="1">
            种类1
          </el-menu-item>
          <el-menu-item index="2">
            种类2
          </el-menu-item>
          <el-menu-item index="3">
            种类3
          </el-menu-item>
          <el-menu-item index="4">
            种类4
          </el-menu-item>
          <el-menu-item index="5">
            种类5
          </el-menu-item>
          <el-menu-item index="6">
            种类6
          </el-menu-item>
        </el-menu>
      </el-col>

      <!-- 右侧内容区域 -->
      <el-col :span="20">
        <!-- 商品展示区 -->
        <div class="goods-showcase">
          <el-row :gutter="20">
            <el-col v-for="item in 8" :key="item" :xs="12" :sm="8" :md="6" class="goods-item">
              <GoodsItem
:item-data="{
      image: `https://picsum.photos/1200/300?random=${item}`,
      title: `商品 ${item}`,
      desc: '高端旗舰 年度新品',
      currentPrice: 1999 + item,
      originalPrice: 2999 + item,
      promoTag: '新品'
    }" />
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
  ElMenuItem
} from 'element-plus'
// import SearchInput from '../../../components/SearchInput.vue'
import GoodsItem from '../../../components/goodsItem/GoodsItem.vue'
// vue3 中的 setup 语法糖不需要注册组件

// 小米主题色
const menuBackground = ref('#ffffff')
const menuText = ref('#333')
const activeColor = ref('#ff6700')

const handleSelect = (key) => {
  console.log('选中分类:', key)
}

/** *const handleSearch = (data) => {
  console.log('收到搜索关键词:', data)
}* **/
</script>

<style lang="scss" scoped>
.container {
  .mi-menu {
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
  }
}
</style>
