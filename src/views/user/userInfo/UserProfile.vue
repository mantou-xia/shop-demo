<template>
  <div class="user-profile-container">
    <el-row :gutter="20" justify="center">
      <el-col :span="24">
        <ProfileForm :user-data="userData" class="box" @submit="handleFormSubmit" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ProfileForm from "../../../components/orderModules/ProfileForm.vue";

export default {
  components: {
    ProfileForm,
  },
  data() {
    return {
      activeTab: "profile",
      userData: {
        name: "张三",
        email: "zhangsan@example.com",
      },
      addressList: [
        {
          recipient: "张三",
          phone: "13800138000",
          address: "北京市朝阳区",
        },
      ],
    };
  },
  computed: {
    currentComponent() {
      const map = {
        profile: "ProfileForm",
        security: "SecuritySettings",
        address: "AddressList",
      };
      return map[this.activeTab];
    },
  },
  methods: {
    handleMenuSelect(index) {
      this.activeTab = index;
    },
    handleFormSubmit(data) {
      console.log("表单提交数据:", data);
      // 这里添加API调用逻辑
    },
  },
};
</script>

<style scoped lang="scss">
.user-profile-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f7fa;
  padding: 20px;

  .el-row {
    width: 100%;

    .el-col {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vb;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .box {
        padding: 20px;
        border-radius: 20px;
        background-color: #ffffff;
      }
     
    }
  }
}
</style>
