<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import RegistreerComponent from '../components/RegistreerComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      aboutTitle: 'Registreren',
    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Registreer() {
      this.$router.push('/registreer')
    },
  },
  components: {
    HeaderComponent,
    RegistreerComponent,
    FooterComponent,
  }
}
</script>
<template>
  <HeaderComponent/>
  <div class="aboutTitle">{{ aboutTitle }}</div>
  <div class="breadcrumb">
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="Registreer()" class="breadcrumb-link">REGISTREREN</div></p>
    <hr>
  </div>
  <RegistreerComponent/>
  <FooterComponent/>
</template>