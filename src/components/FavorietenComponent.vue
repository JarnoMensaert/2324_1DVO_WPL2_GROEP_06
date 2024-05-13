<script>
export default {
  props: {
    title: String,
    description: String,
    price: String,
    img: String,
  },
};
</script>

<template>
  <div class="favorieten">
    <div class="favorieten-image">
      <img :src="img">
    </div>
    <div class="favorieten-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p class="price">{{ price }}</p>
    </div>
    <div class="favorieten-icon">
      <button><img src="/public/assets/Icons/favorite.png"></button>
    </div>
  </div>
</template>
