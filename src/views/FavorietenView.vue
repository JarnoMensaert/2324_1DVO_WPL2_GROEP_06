<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FavorietenComponent from "@/components/FavorietenComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data() {
    return {

    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Favorieten() {
      this.$router.push('/favorieten')
    }
  },
  components: {
    HeaderComponent,
    FavorietenComponent,
    FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <div class="aboutTitle">Favorieten</div>
  <div class="breadcrumb">
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="Favorieten()" class="breadcrumb-link">FAVORIETEN</div></p>
    <hr>
  </div>
  <FavorietenComponent
      title="Relax Wuhan Manueel Verstelbaar Elephant"
      description="Poten metaal en bekleding PU – Max. 110 kg"
      price="€ 399,00"
      img="/public/assets/images/stoel.png"
  />
  <FavorietenComponent
      title="Bijzettafel Odile 50Ø"
      description="Gewicht: 13.56 kg 50x50x50"
      price="€ 249,00"
      img="/public/assets/images/tafel.png"
  />
  <FooterComponent/>
</template>