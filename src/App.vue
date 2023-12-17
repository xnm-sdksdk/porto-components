<template>
  <NavBar></NavBar>
  <AppFooter></AppFooter>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import AppFooter from "@/components/Footer/AppFooter.vue";
import { RouterView } from "vue-router";
export default {
  components: {
    NavBar,
    AppFooter,
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
