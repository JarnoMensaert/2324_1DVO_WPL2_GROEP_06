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
  methods: {
    Home() {
      this.$router.push('/')
    },
    Login() {
      this.$router.push('/login')
    },
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
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="Login()" class="breadcrumb-link">INLOGGEN</div></p>
    <hr>
  </div>
  <div class="inlogInfo">
    <AanmeldenComponent/>
    <AccountAanmaakComponent/>
  </div>
  <FooterComponent/>
</template>