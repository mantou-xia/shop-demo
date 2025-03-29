<template>
  <div class="user-profile-container">
    <el-row :gutter="20">
      <el-col :span="18">
        <ProfileForm :userData="userData" @submit="handleFormSubmit" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProfileForm from '../../../components/orderModules/ProfileForm.vue'

export default {
  components: {
    ProfileForm
  },
  data() {
    return {
      activeTab: 'profile',
      userData: {
        name: '张三',
        email: 'zhangsan@example.com'
      },
      addressList: [
        {
          recipient: '张三',
          phone: '13800138000',
          address: '北京市朝阳区'
        }
      ]
    }
  },
  computed: {
    currentComponent() {
      const map = {
        profile: 'ProfileForm',
        security: 'SecuritySettings',
        address: 'AddressList'
      }
      return map[this.activeTab]
    }
  },
  methods: {
    handleMenuSelect(index) {
      this.activeTab = index
    },
    handleFormSubmit(data) {
      console.log('表单提交数据:', data)
      // 这里添加API调用逻辑
    }
  }
}
</script>