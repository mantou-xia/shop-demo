<template>
    <div class="user-AddressList-container">
    <el-row :gutter="20" justify="center">
      <el-col :span="24">
        <AddressList />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import AddressList from "../../../components/orderModules/AddressList.vue";

export default {
  components: {
    AddressList,
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