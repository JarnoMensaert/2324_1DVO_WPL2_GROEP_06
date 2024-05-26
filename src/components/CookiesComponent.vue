<!-- src/components/CookieBanner.vue -->
<template>
  <div v-if="!cookiesAccepted" class="cookie-banner">
    <p>
      We use cookies to improve your experience. By using our site, you consent to cookies.
      <a href="/privacy-policy">Learn more</a>.
    </p>
    <button @click="acceptCookies" class="cookie-button">Accept</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cookiesAccepted: localStorage.getItem('cookiesAccepted') === 'true'
    };
  },
  methods: {
    acceptCookies() {
      localStorage.setItem('cookiesAccepted', 'true');
      this.cookiesAccepted = true;
    }
  }
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cookie-banner p {
  margin: 0;
  padding-right: 1em;
}

.cookie-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
}

.cookie-button:hover {
  background-color: #45a049;
}
</style>
