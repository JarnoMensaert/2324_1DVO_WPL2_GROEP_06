<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import StoriesComponent from '../components/StoriesComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      pageTitle: "Stories",
      readMore: "Read more",
      story1:
          {
            title: 'Kortingen op al onze zetels',
            content: 'Vanaf woensdag 12/03/2024 tot maandag 18/03/2024 hebben we 15% korting op al de zetels in ons assortiment. Kom zeker eens een kijkje!',
            imageUrl: '@/assets/images/StoriesKorting.png'
          },
      story2:
          {
            title: 'Wij zoeken studenten',
            content: 'Comfortmeubel zoekt gemotiveerde studenten om ons team te verstevigen, ben je een ijverige en gemotiveerde persoon. Stuur ons dan zeker eens een mailtje',
            imageUrl: '@/assets/images/ZoekStudenten.png'
          }
    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Stories() {
      this.$router.push('/stories')
    },
  },
  components: {
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
  }
}
</script>
<template>
  <HeaderComponent/>
  <div class="aboutTitle">{{ pageTitle }}</div>
  <div class="breadcrumb">
    <p>
      <div @click="Home()" class="breadcrumb-link">HOME</div>
      <div class="breadcrumb-link">/</div>
      <div @click="Stories()" class="breadcrumb-link">STORIES</div></p>
    <hr>
  </div>
  <div class="storiesInfo">
    <img src="@/assets/images/StoriesKorting.png">
    <div class="info">
      <h1 class="infoTitle">{{ story1.title }}</h1>
      <p>{{ story1.content }}</p>
      <button class="storyKnop">{{ readMore }}</button>
    </div>
  </div>
  <StoriesComponent/>
  <div class="storiesInfo">
    <div class="info">
      <h1 class="infoTitle">{{ story2.title }}</h1>
      <p>{{ story2.content }}</p>
      <button class="storyKnop">{{ readMore }}</button>
    </div>
    <img src="@/assets/images/ZoekStudenten.png">
  </div>
  <FooterComponent/>
</template>