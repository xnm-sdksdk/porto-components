<template>
  <v-app>
    <NavBar></NavBar>
    <v-container fluid>
      <v-main>
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center">
            <v-col :cols="10">
              <!-- First Card -->
              <v-card class="rounded-xl bg-red-lighten-1">
                <v-card-title class="text-h4">
                  Welcome to Porto Components App
                </v-card-title>
                <v-divider class="m-3"></v-divider>
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
        </div>

        <!-- Second Card -->
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center">
            <v-col :cols="5">
              <v-card class="rounded-xl bg-red-lighten-1">
                <v-card-title class="text-h5">Web Development</v-card-title>
                <v-card-text class="text-left">
                  Our expert team crafts stunning and responsive websites
                  tailored to meet your business goals. Whether you need a
                  simple landing page or a complex e-commerce platform, we
                  deliver cutting-edge web solutions.
                </v-card-text>
                <v-card-actions class="flex justify-end m-2">
                  <v-btn class="bg-white"> Learn More </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col :cols="5">
              <v-card class="rounded-xl bg-red-lighten-1">
                <v-card-title class="text-h5">Software Solutions</v-card-title>
                <v-card-text class="text-left">
                  Transform your business with our custom software solutions.
                  From user-friendly applications to enterprise-grade systems,
                  we develop software that enhances efficiency, productivity,
                  and user satisfaction.
                </v-card-text>
                <v-card-actions class="flex justify-end m-2">
                  <v-btn class="bg-white"> Explore Solutions </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Third Card -->
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center">
            <v-col :cols="10">
              <v-card class="rounded-xl bg-red-lighten-1">
                <v-card-title class="text-h5"> Cloud Computing </v-card-title>
                <v-card-text class="text-left">
                  Harness the power of the cloud with our scalable and secure
                  solutions. Whether you're looking to migrate to the cloud,
                  optimize your infrastructure, or implement cloud-native
                  applications, we've got you covered.
                </v-card-text>
                <v-card-actions class="flex justify-end m-2">
                  <v-btn class="bg-white"> Cloud Services </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
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
