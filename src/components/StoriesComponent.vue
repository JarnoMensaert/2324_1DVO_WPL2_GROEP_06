<script>
export default {
  data() {
    return {
      stories: [
        {
          title: "Nieuwe favoriete eettafel",
          description: "Mijn eettafel van Comfortmeubel heeft mijn huis getransformeerd tot een plek van samenzijn en vreugde. Met zijn tijdloze ontwerp ...",
          image: "/assets/images/favEettafel.png"
        },
        {
          title: "Comfortabele zetel",
          description: "Mijn relaxfauteuil, gekozen met zorg bij Comfortmeubel, is niet zomaar een meubelstuk; het is een oase van rust in mijn huis. Met zijn...",
          image: "/assets/images/comfZetel.png"
        },
        {
          title: "Perfecte zitbank",
          description: "Mijn Comfortmeubel zetel is meer dan slechts een stuk meubilair; het is een toevluchtsoord van troost en rust in mijn huis. Met zijn omhelzende...",
          image: "/assets/images/perfZitbank.png"
        }
      ]
    };
  }
};
</script>
<template>
  <div class="kleineRuimte">
    <div class="stories">
      <div class="story" v-for="(story, index) in stories" :key="index">
        <img class="storyImage" :src="story.image">
        <div class="storyTitel">{{ story.title }}</div>
        <div class="storyBeschrijving">{{ story.description }}</div>
        <button class="storyKnop">Read more</button>
      </div>
    </div>
  </div>
</template>



