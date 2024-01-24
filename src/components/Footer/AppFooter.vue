<template>
  <footer class="bg-gray-300">
    <div>
      <ul class="flex flex-row justify-center items-center m-3">
        <li>
          <router-link :to="{ name: 'home' }" class="p-3 m-3">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="p-3 m-3"
            >About Us</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'services' }" class="p-3 m-3"
            >Services</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'contact' }" class="p-3 m-3"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
    <h3>Get in touch</h3>
    <div class="flex flex-row justify-center align-center">
      <div class="flex flex-column m-3 justify-center align-center">
        <p>Email: Email@email.com</p>
      </div>
      <div class="flex flex-column m-3 justify-center align-center">
        <p>Phone: (+xxx) 1234-5678-9876</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
