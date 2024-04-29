<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import KlantenserviceComponent from '../components/KlantenserviceComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {}
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
    <p>HOME / KLANTENSERVICE</p> <!--TODO: DIT DOEN IN JAVASCRIPT -->
    <hr>
  </div>
  <KlantenserviceComponent/>
  <FooterComponent/>
</template>