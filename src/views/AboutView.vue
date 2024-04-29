<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MissieVisieComponent from '../components/MissieVisieComponent.vue'
import AdresContactComponent from '../components/AdresContactComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FAQSectionComponent from '../components/FAQSectionComponent.vue'

export default {
  data() {
    return {}
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
    <p>HOME / OVER ONS</p>
    <hr>
  </div>
  <MissieVisieComponent/>
  <AdresContactComponent/>
  <FAQSectionComponent/>
  <FooterComponent/>
</template>

