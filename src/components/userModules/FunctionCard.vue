<template>
    <el-card class="function-card">
        <el-row :gutter="20">
            <el-col
v-for="(  module, index  ) in   modules  " :key="index" :span="6"
                @click="handleModuleClick(module.path)">
                <div class="function-item">
                    <span :class="['iconfont', module.icon]"></span>
                    <span>{{ module.title }}</span>
                </div>
            </el-col>
        </el-row>
    </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// import { useRouter } from 'vue-router'
// const router = useRouter()

// 功能模块数据(数据库读取)
const modules = ref([
    { icon: "icon-user", title: '账户资料', path: 'profile' }, 
    { icon: "icon-zhanghaoanquan", title: '账户安全', path: 'security' },
    { icon: "icon-house", title: '收货地址', path: 'address' },
    { icon: "icon-setting", title: '账户设置', path: 'setting' }
])

const handleModuleClick = (path) => {
    router.push({ 
        name: path
    })
}
</script>

<style scoped lang="scss">
.function-card {
    .function-item {
        padding: 20px;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
            background-color: #f5f7fa;

            span {
                color: #409eff;
            }
        }

        span {
            margin-left: 10px;
        }
    }
}
</style>