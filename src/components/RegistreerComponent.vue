<script>
import axios from "axios";

export default {
  data() {
    return {
      componentTitle: "Register New User",
      mevrouw: "Mevrouw",
      meneer: "Meneer",
      voornaam: "Voornaam",
      achternaam: "Achternaam",
      email: "E-mail",
      wachtwoord: "Wachtwoord",
      repeatWachtwoord: "Herhaal Wachtwoord",
      opDeHoogteText: "Op de hoogte blijven van nieuws en aanbiedingen?",
      perEmail: "Per e-mail",
      userData: {
        uservoornaam: "",
        userachternaam: "",
        useremail: "",
        userwachtwoord: "",
        nieuwpermail: false
      },
      repeatPassword: ""
    };
  },
  methods: {
    addUser() {
      // Check if passwords match
      if (this.userData.userwachtwoord !== this.repeatPassword) {
        alert("Passwords do not match");
        return;
      }

      // Prepare the request data
      const userData = {
        userid: 1,
        uservoornaam: this.userData.uservoornaam,
        userachternaam: this.userData.userachternaam,
        useremail: this.userData.useremail,
        isman: true, // Example value, replace with your logic
        userwachtwoord: this.userData.userwachtwoord,
        nieuwpermail: this.userData.nieuwpermail// Example value, replace with your logic
      };

      // Make the fetch request
      fetch('https://two324-1dvo-wpl2-groep-06-backend-1.onrender.com/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([userData])
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Response from backend:', data);
            // Handle the response from the backend here
          })
          .catch(error => {
            console.error('Error sending data to backend:', error);
            // Handle errors here
          });
    }

  }
}
</script>

<template>
  <div class="nieuweKlant">
    <h1>{{ componentTitle }}</h1>
    <form @submit.prevent="addUser">
      <div class="gender">
        <input type="checkbox" id="mevrouw" name="mevrouw" value="mevrouw">
        <label for="mevrouw">{{ mevrouw }}</label>
        <input type="checkbox" id="meneer" name="meneer" value="meneer">
        <label for="meneer">{{ meneer }}</label><br>
      </div>
      <div class="accountInfo">
        <label for="voornaam">{{ voornaam }}</label><br>
        <input type="text" id="voornaam" name="voornaam" v-model="userData.uservoornaam"><br>
        <label for="achternaam">{{ achternaam }}</label><br>
        <input type="text" id="achternaam" name="achternaam" v-model="userData.userachternaam"><br>
        <label for="email">{{ email }}</label><br>
        <input type="email" id="email" name="email" v-model="userData.useremail"><br>
        <label for="password">{{ wachtwoord }}</label><br>
        <input type="password" id="password" name="password" v-model="userData.userwachtwoord"><br>
        <label for="repeatPassword">{{ repeatWachtwoord }}</label><br>
        <input type="password" id="repeatPassword" name="repeatPassword" v-model="repeatPassword"><br>
      </div>
      <div class="opDeHoogte">
        <p>{{  opDeHoogteText }}</p>
        <input type="checkbox" id="perEmail" name="perEmail" value="perEmail" v-model="userData.nieuwpermail">
        <label for="perEmail">{{ perEmail }}</label><br>
      </div>
      <input type="submit" class="geleKnop" value="Account aanmaken">
    </form>
  </div>
</template>