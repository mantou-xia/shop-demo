<template>
  <!-- 新增底部导航栏 -->
  <div class="footer-container">
    <el-row
      :gutter="20"
      class="footer-nav"
    >
      <el-col
        :md="6"
        :sm="12"
      >
        <div class="footer-section">
          <h4>帮助中心</h4>
          <a href="#">账户管理</a>
          <a href="#">购物指南</a>
          <a href="#">订单操作</a>
        </div>
      </el-col>
      <el-col
        :md="6"
        :sm="12"
      >
        <div class="footer-section">
          <h4>服务支持</h4>
          <a href="#">售后政策</a>
          <a href="#">自助服务</a>
          <a href="#">维修网点</a>
        </div>
      </el-col>
      <el-col
        :md="6"
        :sm="12"
      >
        <div class="footer-section">
          <h4>特色服务</h4>
          <a href="#">F码通道</a>
          <a href="#">礼物码</a>
          <a href="#">以旧换新</a>
        </div>
      </el-col>
      <el-col
        :md="6"
        :sm="12"
      >
        <div class="footer-section">
          <h4>关于我们</h4>
          <a href="#">了解企业</a>
          <a href="#">加入企业</a>
          <a href="#">投资者关系</a>
        </div>
      </el-col>
    </el-row>
    <div class="copyright">
      展示底部备案信息
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.el-footer {
    background-color: #fff;
    padding: 40px 0;
    margin-top: 50px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    /* 新增两侧内边距 */
    width: 100%;
}

.footer-nav {
    padding-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    margin: 0 -10px;
}

.footer-section {
    padding: 10px;

    h4 {
        font-size: 14px;
        color: #333;
        margin-bottom: 15px;
        font-weight: bold;
    }

    a {
        display: block;
        color: #666;
        font-size: 12px;
        margin-bottom: 10px;
        text-decoration: none;

        &:hover {
            color: #ff6700;
        }
    }
}

.copyright {
    text-align: center;
    color: #999;
    font-size: 12px;
    padding-top: 20px;
}
</style>
