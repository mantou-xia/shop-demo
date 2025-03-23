<template>
  <el-aside
    width="200px"
    class="category-sidebar"
  >
    <el-menu
      default-active="1"
      class="category-menu"
      @select="handleCategorySelect"
    >
      <!-- todo列表渲染接数据库 -->
      <el-menu-item index="1">
        手机数码
      </el-menu-item>
      <el-menu-item index="2">
        家用电器
      </el-menu-item>
      <el-menu-item index="3">
        服饰鞋包
      </el-menu-item>
      <el-menu-item index="4">
        食品生鲜
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { defineComponent } from 'vue'
import {
  ElMenu, ElMenuItem, ElAside
} from 'element-plus'
export default defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
    ElAside
  },
  setup () {
    const handleCategorySelect = (index) => {
      console.log('选择分类:', index)
      // 这里可以添加分类筛选逻辑
    }
    return {
      handleCategorySelect
    }
  }
})
</script>

<style lang="scss" scoped>
.category-sidebar {
    background-color: #fff;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
}
</style>
