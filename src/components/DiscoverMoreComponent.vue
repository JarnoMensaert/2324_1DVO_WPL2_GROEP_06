<script>
export default {
  data() {
    return {
      title: "Discover more",
      src: "/assets/images/Discover.png",
    }
  }
}
</script>

<template>
  <div class="fullScreen">
    <div class="caroussel">
      <img :src="src" alt="Discover More">
      <button id="discover">{{ title }}</button>
    </div>
  </div>
</template>