<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import AccountInfoComponent from '../components/AccountInfoComponent.vue'
import AanbiedingenComponent from '../components/AanbiedingenComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      aboutTitle: "Mijn profiel",
    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Profiel() {
      this.$router.push('/profiel')
    },
  },
  components: {
    HeaderComponent,
    AccountInfoComponent,
    AanbiedingenComponent,
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
      <div @click="Profiel()" class="breadcrumb-link">MIJN PROFIEL</div></p>
    <hr>
  </div>
  <AccountInfoComponent/>
  <AanbiedingenComponent/>
  <FooterComponent/>
</template>