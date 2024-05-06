<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import AanmeldenComponent from '../components/AanmeldenComponent.vue'
import AccountAanmaakComponent from '../components/AccountAanmaakComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      aboutTitle: 'Inloggen',
    }
  },
  components: {
    HeaderComponent,
    AanmeldenComponent,
    AccountAanmaakComponent,
    FooterComponent,
  },
}
</script>

<template>
  <HeaderComponent/>
  <div class="aboutTitle">{{ aboutTitle }}</div>
  <div class="breadcrumb">
    <p>HOME / INLOGGEN</p> <!--TODO: DIT DOEN IN JAVASCRIPT -->
    <hr>
  </div>
  <div class="inlogInfo">
    <AanmeldenComponent/>
    <AccountAanmaakComponent/>
  </div>
  <FooterComponent/>
</template>