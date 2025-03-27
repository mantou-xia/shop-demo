<template>
    <div>
        orderStatus {{ type }}
    </div>
</template>

<script setup>
import { watch,onMounted } from 'vue' 
import { useRouter } from 'vue-router'

const router = useRouter() // 获取路由实例

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

// 生命周期函数
onMounted(() => {
  fetchData() // 调用获取数据的函数
})

// 根据类型获取数据
const fetchData = () => {
  console.log('当前订单类型:', props.type)
  // 调用不同的 API 接口
  // 例如：getOrdersByType(props.type)
}

// todo监听参数变化

// 添加参数验证
const validTypes = ['pending', 'completed', 'return', 'shipped', 'unshipped']

watch(() => props.type, (newVal) => {
  if (!validTypes.includes(newVal)) {
    router.push('/404')
  }
})
</script>
