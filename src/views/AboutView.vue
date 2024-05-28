<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MissieVisieComponent from '../components/MissieVisieComponent.vue'
import AdresContactComponent from '../components/AdresContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FAQSectionComponent from '../components/FAQSectionComponent.vue'

export default {
  data() {
    return {

    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    About() {
      this.$router.push('/about')
    },
  },
  components: {
    HeaderComponent,
    MissieVisieComponent,
    AdresContactComponent,
    FAQSectionComponent,
    FooterComponent,
  }
}
</script>

<template>
  <HeaderComponent/>
  <div class="aboutTitle">Over Ons</div>
  <div class="breadcrumb">
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="About()" class="breadcrumb-link">OVER ONS</div></p>
    <hr>
  </div>
  <MissieVisieComponent/>
  <AdresContactComponent/>
  <FAQSectionComponent/>
  <FooterComponent/>
</template>

