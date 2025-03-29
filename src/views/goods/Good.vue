<template>
    <div>
        <!-- 添加商品详情展示区域 -->
        <div v-if="goodInfo">
            <h1>{{ goodInfo.name }}</h1>
            <p>价格：{{ goodInfo.price }}</p>
            <p>商品描述：{{ goodInfo.description }}</p>
        </div>
        <div v-else-if="!isLoading">
            <p>加载中...</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const goodInfo = ref(null)
const isLoading = ref(true)

onMounted(async () => {
    const productId = route.params.id
    
    // 验证ID有效性
    if (!productId || isNaN(productId)) {
        router.replace({ name: 'Error' })
        return
    }

    try {
        // 模拟API请求（需要替换为真实接口）
        const response = await fetch(`/api/goods/${productId}`)
        if (!response.ok) throw new Error('商品不存在')
        goodInfo.value = await response.json()
    } catch (error) {
        router.replace({ name: 'Error' })
    } finally {
        isLoading.value = false
    }
})
</script>