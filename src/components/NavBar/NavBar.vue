<template>
  <div class="flex bg-grey-lighten-3 h-24 justify-center items-center">
    <nav>
      <router-link :to="{ name: 'home' }">
        <PButton :text="Home"></PButton>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <PButton :text="About"></PButton>
      </router-link>
      <router-link :to="{ name: 'services' }">
        <PButton :text="Services"></PButton>
      </router-link>
      <router-link :to="{ name: 'contact' }">
        <PButton :text="Contact"></PButton>
      </router-link>
    </nav>
  </div>
</template>

<script>
import PButton from "@/components/Button/PButton.vue";

export default {
  components: {
    PButton,
  },
  data() {
    return {
      Home: "Home",
      About: "About Us",
      Services: "Services",
      Contact: "Contacts",
    };
  },
};
</script>
