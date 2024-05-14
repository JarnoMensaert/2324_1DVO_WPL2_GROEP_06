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
    <p>HOME / REGISTREREN</p>
    <hr>
  </div>
  <AccountInfoComponent/>
  <AanbiedingenComponent/>
  <FooterComponent/>
</template>