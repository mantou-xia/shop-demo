<template>
    <div class="user-AccountSeti-container">
    <el-row :gutter="20" justify="center">
      <el-col :span="24">
        <AccountSettings />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AccountSettings from "../../../components/orderModules/AccountSettings.vue";
export default {
  components: {
    AccountSettings,
  },
  data() {
  },
  methods: {
  },
};
</script>