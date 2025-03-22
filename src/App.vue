<template>
  <div id="view-container">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style scoped lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#view-container {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ecf0f3;
}
</style>
