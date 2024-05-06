<script>
export default {
  data() {
    return {
      Titel: "Missie & Visie",
      info: "Comfortmeubel is sinds 1995 gevestigd in Antwerpen. Sindsdien werden meer dan 100.000 klanten succesvol geholpen. Onze klanten vinden gegarandeerd hun keuze uit ons rijk assortiment aan hedendaagse meubelen, interieur artikelen. Door onze rechtstreekse aankoop bij de fabrikanten in binnen- en buitenland, zonder tussenpersonen, wordt een excellente prijs/kwaliteit verhouding gegarandeerd.",
      src: "/assets/Comfortmeubel/winkel.png",
    }
  }
}
</script>

<template>
  <div class="missieVisie">
    <img :src="src"/>
    <div class="info">
      <h1 class="infoTitle">{{ Titel }}</h1>
      <p>{{ info }}</p>
    </div>
  </div>
</template>
