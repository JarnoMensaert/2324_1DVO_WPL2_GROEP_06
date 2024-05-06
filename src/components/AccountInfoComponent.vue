<script>
import { AkChevronDown } from "@kalimahapps/vue-icons";
import { AkChevronRight } from "@kalimahapps/vue-icons";

export default {
  data() {
    return {
      modalTitle: "Nieuwsbrief",
      modalText: "Inschrijven",
      groet: "Hallo",
      naam: "Jarno",
      voornaam: "Voornaam*",
      achternaam: "Achternaam*",
      email: "E-mailadres*",
      voorwaarden: "Accepteer de voorwaarden*",
      knopText: "Inschrijven",
      accItems: [
        {
          id: 1,
          accTitle: "Mijn aankopen",
          isOpen: false,
        },
        {
          id: 2,
          accTitle: "Accountinstellingen",
          isOpen: false,
        },
        {
          id: 3,
          accTitle: "Mijn punten",
          isOpen: false,
        },
        {
          id: 4,
          accTitle: "Help en Contact",
          isOpen: false,
        },
        {
          id: 5,
          accTitle: "Nieuwsbrief",
          isOpen: false,
        },
      ],
      showNewsletterModal: false
    };
  },
  components: {
    AkChevronDown,
    AkChevronRight
  },
  methods: {
    toggleAcc(item) {
      item.isOpen = !item.isOpen;
    },
    openNewsletterModal() {
      this.showNewsletterModal = true;
    },
    closeNewsletterModal() {
      this.showNewsletterModal = false;
    }
  }
}
</script>
<template>
  <div>
    <h1 class="componentTitle">{{ groet }} {{ naam }}</h1>
    <div>
      <div class="accWrapper" v-for="item in accItems" :key="item.id">
        <div class="profielInfo" @click="item.accTitle === 'Nieuwsbrief' ? openNewsletterModal() : toggleAcc(item)">
          <p>{{ item.accTitle }}</p>
          <div>
            <AkChevronRight class="faqButton" />
          </div>
        </div>
        <div class="accContent" v-if="item.isOpen && item.accTitle !== 'Nieuwsbrief'">
          <p v-html="item.accContent"></p>
        </div>
      </div>
    </div>
    <div :style="{ display: showNewsletterModal ? 'block' : 'none' }" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeNewsletterModal">&times;</span>
        <h1>{{ modalTitle }}</h1>
        <p>{{ modalText }}</p>
        <form>
          <div class="field">
            <label for="voornaam">{{ voornaam }}</label><br>
            <input type="text" id="voornaam" name="voornaam" value="">
          </div>
          <div class="field">
            <label for="achternaam">{{ achternaam }}</label><br>
            <input type="text" id="achternaam" name="achternaam" value="">
          </div>
          <br>
          <div class="field">
            <label for="email">{{ email }}</label><br>
            <input type="email" id="email" name="email" value="">
          </div>
          <div class="field"></div>
          <div class="voorwaarden">
            <input type="checkbox" id="voorwaarden" name="voorwaarden" value="voorwaarden">
            <label for="voorwaarden">{{ voorwaarden }}</label><br>
          </div>

          <button class="geleKnop" type="submit">{{ knopText }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

