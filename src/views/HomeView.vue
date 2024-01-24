<template>
  <v-app>
    <NavBar></NavBar>
    <v-container fluid>
      <v-main>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card>
              <v-card-title class="headline">
                Welcome to Porto Components App
              </v-card-title>
              <v-card-subtitle
                >Built with Vuetify, Tailwind and Vue!</v-card-subtitle
              >

              <v-card-text>
                <p>This is a simple example of a home page.</p>
                <p>
                  Customize this page to suit your needs and start building
                  awesome applications!
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-container>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import AppFooter from "@/components/Footer/AppFooter.vue";
export default {
  components: {
    NavBar,
    AppFooter,
  },
};
</script>
