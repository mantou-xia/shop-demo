<template>
    <div class="user-UserSecurity-container">
    <el-row :gutter="20" justify="center">
      <el-col :span="24">
        <SecuritySettings />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SecuritySettings from "../../../components/orderModules/SecuritySettings.vue";

export default {
  components: {
    SecuritySettings,
  },
  data() {
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>

</style>