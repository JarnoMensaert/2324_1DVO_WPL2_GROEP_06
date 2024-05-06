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
    <p>HOME / REGISTREREN</p> <!--TODO: DIT DOEN IN JAVASCRIPT -->
    <hr>
  </div>
  <RegistreerComponent/>
  <FooterComponent/>
</template>