<template>
  <el-card class="profile-card">
    <h3>基本信息</h3>
    <el-form :model="formData" label-width="80px" ref="profileForm">
      <el-form-item label="姓名" prop="name" :rules="[{ required: true, message: '请输入姓名', trigger: 'blur' }]">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :rules="[
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
      ]">
        <el-input v-model="formData.email" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => ({
        name: '',
        email: ''
      })
    }
  },
  data() {
    return {
      formData: { ...this.userData }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.profileForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.formData)
        }
      })
    }
  }
}
</script>

<style scoped>
.profile-card {
  margin: 20px;
  max-width: 600px;
}
</style>