<template>
  <div id="app">
    <main-tabbar />
    <router-view />
  </div>
</template>
<script>
import MainTabbar from "./components/content/mainTabbar/MainTabbar";

export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>
<style lang="scss">
@import "assets/css/base.css";
</style>
