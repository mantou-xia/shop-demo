<template>
  <el-card class="profile-card">
    <!-- 新增头像展示 -->
    <div class="avatar-container">
      <img src="@/assets/avatar.jpg" alt="用户头像" class="user-avatar" />
    </div>

    <h3 class="profile-title">用户信息</h3>
    <hr />
    <!-- 添加表单容器实现居中 -->
    <div class="form-container">
      <el-form :model="formData" label-width="80px" ref="profileForm">
        <!-- 新增用户ID显示 -->
        <el-form-item label="用户ID">
          <el-input v-model="formData.id" disabled />
        </el-form-item>

        <el-form-item
          label="姓名"
          prop="name"
          :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]"
        >
          <el-input v-model="formData.name" />
        </el-form-item>

        <!-- 新增性别选择 -->
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="formData.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="邮箱"
          prop="email"
          :rules="[
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            {
              type: 'email',
              message: '请输入正确的邮箱格式',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="formData.email" />
        </el-form-item>

        <!-- 新增电话号码输入 -->
        <el-form-item
          label="电话"
          prop="phone"
          :rules="[
            { required: true, message: '请输入联系电话', trigger: 'blur' },
            {
              pattern: /^1[3-9]\d{9}$/,
              message: '请输入有效的手机号码',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input
            v-model="formData.phone"
            placeholder="请输入11位手机号"
            maxlength="11"
          />
        </el-form-item>
        <!-- 新增简介 -->
        <el-form-item label="简介" prop="bio">
          <el-input
            v-model="formData.bio"
            type="textarea"
            :rows="3"
            placeholder="请输入个人简介"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => ({
        id: "test123",
        name: "",
        email: "",
        gender: "male",
        bio: "",
        phone: "", // 新增电话号码字段
      }),
    },
  },
  emits: ["submit"],
  data() {
    return {
      formData: { ...this.userData },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.profileForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.formData);
        }
      });
    },
  },
};
</script>

<style scoped>
.profile-title {
  text-align: center;
}
.profile-card {
  height: auto;
  margin: auto;
  max-width: 70%;
}

.avatar-container {
  text-align: center;
  margin: auto;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #eee;
  }
}

.user-avatar {
  margin: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}

.form-container {
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
}

/* 保持原有其他样式不变 */
</style>
