<script>
export default {
  data() {
    return {
      title: "Nieuwe klant?",
      info: "Ontdek de nieuwste trends in decoratie en meubilair!",
      knopTekst: "Account aanmaken"
    }
  }
}
</script>

<template>
  <div class="accountAanmaken">
    <h1>{{ title }}</h1>
    <p>{{ info }}</p>
    <button class="geleKnop">{{ knopTekst }}</button>
  </div>
</template>