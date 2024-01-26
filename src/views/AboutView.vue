<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main> </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
