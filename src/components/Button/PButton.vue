<template>
  <button type="button" class="p-3 m-3 rounded-3xl bg-blue-600 text-white">
    {{ btnText }}
  </button>
</template>

<!-- :class="{'w-full': expanded}" -->

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    btnText() {
      return this.text;
    },
  },
};
</script>
