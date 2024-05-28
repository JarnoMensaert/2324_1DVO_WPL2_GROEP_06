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
        <form @submit.prevent="submitForm">
          <div class="field">
            <label for="voornaam">{{ voornaam }}</label><br>
            <input v-model="formData.voornaam" type="text" id="voornaam" name="voornaam">
          </div>
          <div class="field">
            <label for="achternaam">{{ achternaam }}</label><br>
            <input v-model="formData.achternaam" type="text" id="achternaam" name="achternaam">
          </div>
          <br>
          <div class="field">
            <label for="email">{{ email }}</label><br>
            <input v-model="formData.email" type="email" id="email" name="email">
          </div>
          <div class="field"></div>
          <div class="voorwaarden">
            <input v-model="formData.voorwaarden" type="checkbox" id="voorwaarden" name="voorwaarden" value="voorwaarden">
            <label for="voorwaarden">{{ voorwaarden }}</label><br>
          </div>
          <button class="geleKnop" type="submit">{{ knopText }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

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
      showNewsletterModal: false,
      formData: {
        voornaam: "",
        achternaam: "",
        email: "",
        voorwaarden: false
      }
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
    },
    submitForm() {
      // Concatenate voornaam and achternaam to generate name
      this.formData.name = `${this.formData.voornaam} ${this.formData.achternaam}`;

      // Send form data to the backend
      fetch('https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to submit form');
            }
            return response.json();
          })
          .then(data => {
            console.log(data); // Handle successful response
            // Optionally, you can redirect the user or display a success message here
          })
          .catch(error => {
            console.error(error); // Handle error
            // Optionally, you can display an error message to the user here
          });
    }
  }
}
</script>
