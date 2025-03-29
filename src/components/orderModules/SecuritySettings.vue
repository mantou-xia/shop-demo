<template>
  <el-card class="security-card">
    <h3>安全设置</h3>
    <el-form label-width="120px" ref="securityForm">
      <el-form-item label="旧密码" prop="oldPassword" :rules="[{ required: true, message: '请输入旧密码', trigger: 'blur' }]">
        <el-input v-model="form.oldPassword" type="password" show-password />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword" :rules="[
        { required: true, message: '请输入新密码', trigger: 'blur' },
        { min: 6, max: 16, message: '长度在6到16个字符', trigger: ['blur', 'change'] }
      ]">
        <el-input v-model="form.newPassword" type="password" show-password />
      </el-form-item>
      <el-form-item label="两步验证" prop="twoFactor">
        <el-switch v-model="form.twoFactor" />
        <span class="tip-text">{{ form.twoFactor ? '已启用' : '已禁用' }}</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">更新安全设置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        twoFactor: false
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.securityForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form)
        }
      })
    }
  }
}
</script>

<style scoped>
.security-card {
  margin: 20px;
  max-width: 600px;
}
.tip-text {
  margin-left: 10px;
  color: #999;
}
</style>