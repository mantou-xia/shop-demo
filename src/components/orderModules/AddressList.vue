<template>
  <el-card class="address-card">
    <h3>收货地址管理</h3>
    <el-button type="primary" @click="showDialog = true" style="margin-bottom: 20px">添加新地址</el-button>
    
    <el-table :data="addresses" style="width: 100%">
      <el-table-column prop="recipient" label="收货人" width="120" />
      <el-table-column prop="phone" label="联系电话" width="150" />
      <el-table-column prop="address" label="详细地址" />
      <el-table-column label="操作" width="180">
        <template #default="{ row }">
          <el-button size="small" @click="editAddress(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteAddress(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showDialog" :title="dialogTitle" width="600px">
      <el-form :model="currentAddress" label-width="80px" ref="addressForm">
        <el-form-item label="收货人" prop="recipient" :rules="[{ required: true, message: '请输入收货人姓名', trigger: 'blur' }]">
          <el-input v-model="currentAddress.recipient" />
        </el-form-item>
        <el-form-item label="电话" prop="phone" :rules="[
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: ['blur', 'change'] }
        ]">
          <el-input v-model="currentAddress.phone" />
        </el-form-item>
        <el-form-item label="地址" prop="address" :rules="[{ required: true, message: '请输入详细地址', trigger: 'blur' }]">
          <el-input v-model="currentAddress.address" type="textarea" :rows="3" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </template>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  props: {
    addressList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showDialog: false,
      currentAddress: this.getEmptyAddress(),
      editingIndex: -1
    }
  },
  computed: {
    addresses() {
      return this.addressList
    },
    dialogTitle() {
      return this.editingIndex === -1 ? '新增地址' : '编辑地址'
    }
  },
  methods: {
    getEmptyAddress() {
      return {
        recipient: '',
        phone: '',
        address: ''
      }
    },
    editAddress(address) {
      this.editingIndex = this.addresses.indexOf(address)
      this.currentAddress = { ...address }
      this.showDialog = true
    },
    deleteAddress(address) {
      this.$emit('delete', address)
    },
    handleSubmit() {
      this.$refs.addressForm.validate(valid => {
        if (valid) {
          if (this.editingIndex === -1) {
            this.$emit('add', this.currentAddress)
          } else {
            this.$emit('update', this.currentAddress, this.editingIndex)
          }
          this.showDialog = false
          this.resetForm()
        }
      })
    },
    resetForm() {
      this.currentAddress = this.getEmptyAddress()
      this.editingIndex = -1
    }
  }
}
</script>

<style scoped>
.address-card {
  margin: 20px;
  max-width: 1000px;
}
</style>