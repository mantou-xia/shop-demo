<template>
  <div class="shell">
    <div
      id="a-container"
      ref="aContainer"
      class="container a-container"
    >
      <form
        id="a-form"
        action=""
        method=""
        class="form"
      >
        <h2 class="form_title title">
          创建账号
        </h2>
        <div class="form_icons">
          <i class="iconfont icon-QQ" />
          <i class="iconfont icon-weixin" />
          <i class="iconfont icon-bilibili-line" />
        </div>
        <span class="form_span">选择注册方式活电子邮箱注册</span>
        <input
          type="text"
          class="form_input"
          placeholder="Name"
        >
        <input
          type="text"
          class="form_input"
          placeholder="Email"
        >
        <input
          type="text"
          class="form_input"
          placeholder="Password"
        >
        <button class="form_button button submit">
          Sign Up
        </button>
      </form>
    </div>

    <div
      id="b-container"
      ref="bContainer"
      class="container b-container"
    >
      <form
        id="b-form"
        action=""
        method=""
        class="form"
      >
        <h2 class="form_title title">
          Login
        </h2>
        <div class="form_icons">
          <i class="iconfont icon-QQ" />
          <i class="iconfont icon-weixin" />
          <i class="iconfont icon-bilibili-line" />
        </div>
        <span class="form_span">选择登录方式活电子邮箱登录</span>
        <input
          type="text"
          class="form_input"
          placeholder="Email"
        >
        <input
          type="text"
          class="form_input"
          placeholder="Password"
        >
        <a class="form_link">忘记密码？</a>
        <button class="form_button button submit">
          SIGN IN
        </button>
      </form>
    </div>

    <!-- Add missing refs for switch elements -->
    <div
      id="switch-cnt"
      ref="switchCtn"
      class="switch"
    >
      <div
        ref="switchCircle1"
        class="switch_circle"
      />
      <div
        ref="switchCircle2"
        class="switch_circle switch_circle-t"
      />
      <div
        id="switch-c1"
        ref="switchC1"
        class="switch_container"
      >
        <h2
          class="switch_title title"
          style="letter-spacing: 0"
        >
          Welcome Back！
        </h2>
        <p class="switch_description description">
          已经有账号了嘛，去登入账号来进入奇妙世界吧！！！
        </p>
        <button class="switch_button button switch-btn">
          To Login
        </button>
      </div>

      <div
        id="switch-c2"
        ref="switchC2"
        class="switch_container is-hidden"
      >
        <h2
          class="switch_title title"
          style="letter-spacing: 0"
        >
          Hello Friend！
        </h2>
        <p class="switch_description description">
          去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途！
        </p>
        <button class="switch_button button switch-btn">
          To Reg
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'FrontComponent',
  mounted () {
    this.initEventListeners()
  },
  methods: {
    getButtons (e) {
      e.preventDefault()
    },
    changeForm () {
      // 修改类名
      this.$refs.switchCtn.classList.add('is-gx')
      setTimeout(() => {
        this.$refs.switchCtn.classList.remove('is-gx')
      }, 1500)
      this.$refs.switchCtn.classList.toggle('is-txr');

      // 修改为数组遍历
      [this.$refs.switchCircle1, this.$refs.switchCircle2].forEach((circle) => {
        circle.classList.toggle('is-txr')
      })
      this.$refs.switchC1.classList.toggle('is-hidden')
      this.$refs.switchC2.classList.toggle('is-hidden')
      this.$refs.aContainer.classList.toggle('is-txl')
      this.$refs.bContainer.classList.toggle('is-txl')
      this.$refs.bContainer.classList.toggle('is-z')
    },
    initEventListeners () {
      const allButtons = this.$el.querySelectorAll('.submit')
      const switchBtn = this.$el.querySelectorAll('.switch-btn')

      allButtons.forEach((button) => {
        button.addEventListener('click', this.getButtons)
      })
      switchBtn.forEach((button) => {
        button.addEventListener('click', this.changeForm)
      })
    }
  }
}
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url("iconfont.ttf?t=1675543788644") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-weixin:before {
  content: "\f0106";
}

.icon-QQ:before {
  content: "\e882";
}

.icon-bilibili-line:before {
  content: "\e66d";
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* 字体无法选中 */
  user-select: none;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #ecf0f3;
  color: #a0a5a8;
}

.shell {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  min-height: 600px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

/* 设置响应式 */
@media (max-width: 1200px) {
  .shell {
    transform: scale(0.7);
  }
}

@media (max-width: 1000px) {
  .shell {
    transform: scale(0.6);
  }
}

@media (max-width: 800px) {
  .shell {
    transform: scale(0.5);
  }
}

@media (max-width: 600px) {
  .shell {
    transform: scale(0.4);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 600px;
  height: 100%;
  padding: 25px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.iconfont {
  margin: 0 5px;
  border: rgba(0, 0, 0, 0.5) 2px solid;
  border-radius: 50%;
  font-size: 25px;
  padding: 3px;
  opacity: 0.5;
  transition: 0.1s;
}

.iconfont:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

.form_input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

.form_input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form_span {
  margin-top: 30px;
  margin-bottom: 12px;
}

.form_link {
  color: #181818;
  font-size: 15px;
  margin-top: 25px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
  letter-spacing: 10px;
}

.description {
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}

.b-container {
  left: calc(100% - 600px);
  z-index: 0;
}

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
}

.switch_circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}

.switch_circle-t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}

.switch_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}

.switch_button {
  cursor: pointer;
}

.switch_button:hover,
.submit:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}

.switch_button:active,
.switch_button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}

.is-txr {
  left: calc(100% - 400px);
  transition: 1.25s;
  transform-origin: left;
}

.is-txl {
  left: 0;
  transition: 1.25s;
  transform-origin: right;
}

.is-z {
  z-index: 200;
  transition: 1.25s;
}

.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}

.is-gx {
  animation: is-gx 1.25s;
}

@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }

  30%,
  50% {
    width: 500px;
  }
}
</style>
