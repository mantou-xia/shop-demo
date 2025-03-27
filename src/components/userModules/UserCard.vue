<template>
    <el-card class="user-card">
        <div class="user-info">
            <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
            <div class="user-detail">
                <h2>{{ username }}</h2>
                <div class="vip-info">
                    <el-tag type="warning">
                        {{ level }}
                    </el-tag>
                    <span class="points">积分：3580</span>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script setup>
// 接受父组件传递
// 因为eslint的问题必须解构prop
const { username, level } = defineProps({
    username: {
        type: String,
        default: 'Mr.Tang'
    },
    level: {
        type: String,
        default: '非会员'
    }
})

</script>

<style scoped lang="scss">
.user-info {
    display: flex;
    align-items: center;
    padding: 20px;

    .user-detail {
        margin-left: 30px;

        .vip-info {
            margin-top: 10px;
            display: flex;
            align-items: center;

            .points {
                margin-left: 15px;
                color: #666;
            }
        }
    }
}
</style>