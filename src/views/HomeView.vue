<template>
  <v-app>
    <NavBar></NavBar>
    <v-container fluid>
      <v-main>
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center">
            <v-col :cols="12" md="5" lg="5">
              <!-- First Card -->
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
        </div>

        <!-- Second Card -->
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center">
            <v-col :cols="12" md="8">
              <v-card
                class="mx-auto"
                color="#1a1a1a"
                theme="dark"
                max-width="400"
                prepend-icon="mdi-twitter"
                title="X"
              >
                <template v-slot:prepend>
                  <v-icon size="x-large"></v-icon>
                </template>

                <v-card-text class="text-h5 py-2">
                  "When something is important enough, you do it even if the
                  odds are not in your favor."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="w-100">
                    <template v-slot:prepend>
                      <v-avatar
                        color="grey-darken-3"
                        image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-avatar>
                    </template>

                    <v-list-item-title>Elon Musk</v-list-item-title>

                    <v-list-item-subtitle>Tesla Creator</v-list-item-subtitle>

                    <template v-slot:append>
                      <div class="justify-self-end">
                        <v-icon class="me-1" icon="mdi-heart"></v-icon>
                        <span class="subheading me-2">256k</span>
                        <span class="me-1">·</span>
                        <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                        <span class="subheading">45k</span>
                      </div>
                    </template>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Third Card -->
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <div>Word of the Day</div>
              <p class="text-h4 text--primary">be•nev•o•lent</p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="deep-purple-accent-4">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <!-- Fourth Card -->
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <div>Word of the Day</div>
              <p class="text-h4 text--primary">el•ee•mos•y•nar•y</p>
              <p>adjective</p>
              <div class="text--primary">
                relating to or dependent on charity; charitable; charitable
                donations. Pertaining to alms.<br />
                "an eleemosynary educational institution." "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" color="deep-purple-accent-4">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
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
