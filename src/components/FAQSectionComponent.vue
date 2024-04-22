<script setup>
import { AkChevronDown } from "@kalimahapps/vue-icons";
import { AkChevronUp } from "@kalimahapps/vue-icons";
import { ref } from 'vue';

const accItems = ref([
  {
    id: 1,
    accTitle: "Kan ik telefonisch bestellen",
    accContent: "Neen, telefonisch nemen wij geen bestellingen aan. U kunt bestellen in de winkel, via e-mail of via de webshop.",
    isOpen: false,
  },
  {
    id: 2,
    accTitle: "Hoe kan ik betalen in de winkel?",
    accContent: "In onze winkel kan u betalen met : Bancontact, Mastercard, VISA, Maestro of cash. Betalen met ecocheques is niet mogelijk",
    isOpen: false,
  },
  {
    id: 3,
    accTitle: "Hoe kan ik betalen in de webshop?",
    accContent: "Voor online aankopen accepteren wij volgende betaalmethoden: Bancontact, Mastercard, VISA, Maestro",
    isOpen: false,
  },
  {
    id: 4,
    accTitle: "Moet ik een voorschot betalen bij mijn aankoop in de winkel?",
    accContent: "Bij aankopen op maat vragen wij een voorschot van 30%. Voor goederen op stock dient u slechts een voorschot van 20% te betalen.",
    isOpen: false,
  },
  {
    id: 5,
    accTitle: "Moet ik een voorschot betalen bij mijn online aankoop?",
    accContent: "Bij online aankopen vragen wij een voorschot van 30%.",
    isOpen: false,
  },
  {
    id: 6,
    accTitle: "Hoe kan ik betalen bij de levering?",
    accContent: "Het resterende bedrag kan u betalen in cash aan de chauffeur. Hierbij ontvangt u een betalingsbewijs en tekent hij af op de leverbon.",
    isOpen: false,
  },
  {
    id: 7,
    accTitle: "Kan ik meubelen kopen op afbetaling?",
    accContent: "Meubels kopen op afbetaling is mogelijk mits goedkeuring van de bank. Wij werken samen met zowel Cofidis als Cetelem. Hiervoor kan u terecht bij ons verkoopspersoneel tijdens onze openingsuren. Op onze online shop is het helaas niet mogelijk om te opteren voor een afbetalingsplan.",
    isOpen: false,
  },
  {
    id: 8,
    accTitle: "Wat zijn de afbetalingsmogelijkheden?",
    accContent: "Vanaf een aankoopbedrag van € 1200,- kan u genieten van een afbetalingsplan zonder interest. Hiervoor  dient u 30 % voorschot te betalen, vervolgens kan u het resterende bedrag afbetalen in 10 maanden. Afbetalingsplannen t.e.m. 24 maanden zijn ook mogelijk op interest basis.",
    isOpen: false,
  },
  {
    id: 9,
    accTitle: "Mijn aankoop is niet volledig, wat moet ik doen?",
    accContent: "U moet dan zo snel mogelijk contact opnemen met de winkel. Dit kan via de telefoon of via mail. Indien u via de webshop een aankoop heeft gedaan, kunt u het contactformulier invullen.",
    isOpen: false,
  },
  {
    id: 10,
    accTitle: "Mijn aankoop is beschadigt, wat moet ik doen?",
    accContent: "Indien aangekochte goederen schade vertonen dient u een mail te versturen naar <a href='mailto:service@comfortmeubel.be'>service@comfortmeubel.be</a>. <br> Gelieve volgende zaken zeker toe te voegen: <br> <ul><li>Bestelbonnummer</li><li>Naam en voornaam</li><li>Adres vermeld op uw bestelbon</li><li>Telefoonnummer</li><li>Omschrijving van de schade met een duidelijke vermelding van welk onderdeel er precies is beschadigd</li><li>2 of 3 foto's</li><li>Een foto van het geheel (bv. Volledige kast, zetel)</li><li>Een foto van dichtbij die de schade duidelijk aantoont</li><li>Eventueel een aanduiding van het beschadigde stuk op het montageplan</li></ul>Indien goederen aangekocht via de online shop beschadigingen vertonen gelieve het contactformulier in te vullen. Nadien zullen wij contact met u opnemen. Klachten voor goederen aangekocht via de webshop worden enkel behandeld indien ze via het contactformulier komen.",
    // Add Answer
    isOpen: false,
  },
  {
    id: 11,
    accTitle: "Ik wens mijn aankoop te annuleren, kan dit?",
    accContent: "Bij een annulatie van een aankoop in de winkel houden houden wij 30% van uw totale aankoopbedrag in. <br> Bij een annulatie via de webshop heeft u 14 dagen om via het modelformulier een aangetekende schrijven te doen. U krijgt dan het bedrag dat u al betaald heeft terug. Dit bedrag kan nooit hoger zijn dan hetgeen dat u heeft betaald. Na de 14e dag vervalt het recht.",
    isOpen: false,
  },
  {
    id: 12,
    accTitle: "Hoe lang kan er gestockeerd worden nadat de bestelling volledig is?",
    accContent: "Er wordt maximum 4 weken gestockeerd. Wij vragen u ons daarbij tijdig te verwittigen hoe lang het gestockeerd  moet worden. Dit kan via mail of telefoon. Indien de stockage 4 weken overstijgt, kan Comfortmeubel geen stockage meer garanderen.",
    isOpen: false,
  },
  {
    id: 13,
    accTitle: "Waar moet ik mijn aankoop afhalen?",
    accContent: "U dient zich ten laatste een kwartier voor de sluitingstijd van ons magazijn aan te melden in onze winkel te Kerkstraat 114, 2060 Antwerpen samen met u bestelbon.",
    isOpen: false,
  },
  {
    id: 14,
    accTitle: "Wanneer kan ik mijn aankoop komen afhalen?",
    accContent: "Het magazijn is elke dag behalve zondag en dinsdag open. Afhalingen kunnen tussen 9u30 en 16u.",
    isOpen: false,
  },
  {
    id: 15,
    accTitle: "Hoeveel kost een ladderlift huren?",
    accContent: "<strong>Antwerpen & Deelgemeentes</strong> <br> <br> Stad Antwerpen, Berchem, Berendrecht, Borgerhout, Boechout, Borsbeek, Brasschat, Brecht, Deurne, Edegem, Edegem, Ekeren, Essen, Hoboken, Hove, Kalmthout, Kapellen, Kontich, Lint, Malle, Merksem, Mortsel, Ranst, Schilde, Schoten, Stabroek, Wijnegem, Wilrijk, Wommelgem, Wuustwezel, Zandhoven, Zoersel en Zwijndrecht. <br> <br> Tot 6e verdiep €85 <br> Tot 9e verdiep €125 <br> Andere op aanvraag  <br> <br> Buiten rand <br> €150 tot 6e verdiep <br> <br>",
    isOpen: false,
  },

])
const toggleAcc = (item) => {
  item.isOpen  = !item.isOpen
}
</script>
<template>
  <h1 class="faq">Veel gestelde vragen</h1>
  <div>
    <template v-if="accItems.length > 0 && accItems[0].id === 1">
      <h2>Bestellen</h2>
    </template>

    <div class="accWrapper" v-for="item in accItems" :key="item.id">
      <div class="accTitle" @click="toggleAcc(item)">
        <p>{{ item.accTitle }}</p>
        <div>
          <AkChevronUp class="faqButton" v-if="item.isOpen" />
          <AkChevronDown class="faqButton" v-else />
        </div>
      </div>

      <div class="accContent" v-if="item.isOpen">
        <p v-html="item.accContent"></p>
      </div>

      <template v-if="item.id === 1">
        <h2>Betalingen</h2>
      </template>

      <template v-if="item.id === 8">
        <h2>Dienst na verkoop</h2>
      </template>
      <template v-if="item.id === 11">
        <h2>Afhalen</h2>
      </template>
      <template v-if="item.id === 14">
        <h2>Ladderlift</h2>
      </template>
    </div>
  </div>
</template>



