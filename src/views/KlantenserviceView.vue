<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import KlantenserviceComponent from '../components/KlantenserviceComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {}
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Klantenservice() {
      this.$router.push('/klantenservice')
    },
  },
  components: {
    HeaderComponent,
    KlantenserviceComponent,
    FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <div class="aboutTitle">Klantenservice</div>
  <div class="breadcrumb">
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="Klantenservice()" class="breadcrumb-link">KLANTENSERVICE</div></p>
    <hr>
  </div>
  <KlantenserviceComponent/>
  <FooterComponent/>
</template>