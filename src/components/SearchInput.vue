<template>
    <div class="search-container">
        <span class="iconfont icon-sousuo"></span>
        <el-input v-model="keyword" class="search-input" placeholder="搜索商品" :prefix-icon="Search" clearable
            @input="handleSearch" @keyup.enter="handleSearch" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
// lodash 是一个常用的 JavaScript 工具库，提供了许多实用的函数和方法。
// 这里使用 lodash 的 debounce 函数来实现防抖功能，
import { debounce } from 'lodash'

const emit = defineEmits(['search'])
const keyword = ref('')

const handleSearch = debounce(() => {
    emit('search', keyword.value)
}, 500)
</script>


<style lang="scss" scoped>
.search-container {
    padding: 8px 0;
    position: relative;
    .search-input {
        width: 240px;

        :deep(.el-input__inner) {
            border-radius: 20px;
            border-color: #e0e0e0;

            &:focus {
                border-color: #ff6700;
            }
        }

        &:hover :deep(.el-input__inner) {
            border-color: #ff6700;
        }
    }

    .icon-sousuo{
        font-size: 16px;
        color: #999;
        margin-right: 5px;
        position: absolute;
        top: 35%;
        left: 10px;
        z-index: 100;
    }
}
</style>
