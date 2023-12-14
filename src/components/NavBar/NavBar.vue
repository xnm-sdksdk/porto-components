<template>
  <div>
    <nav>
      <PButton :text="About"></PButton>
      <PButton :text="Services"></PButton>
      <PButton :text="Contact"></PButton>
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
      About: "About Us",
      Services: "Services",
      Contact: "Contact",
    };
  },
};
</script>
