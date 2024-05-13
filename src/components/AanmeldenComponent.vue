<!-- Your Vue component -->
<template>
  <div class="aanmelden">
    <h1>{{ title }}</h1>
    <p>{{ info }}</p>
    <form @submit.prevent="login">
      <!-- Form inputs -->
      <div>
        <label for="Email">{{ email }}</label><br>
        <input type="text" id="Email" v-model="useremail" required>
      </div>
      <div>
        <label for="Wachtwoord">{{ wachtwoord }}</label><br>
        <input type="password" id="Wachtwoord" v-model="userwachtwoord" required>
      </div>
      <!-- Error message -->
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div>
        <a href="#">{{ passwordForgot }}?</a>
      </div>
      <!-- Submit button -->
      <button type="submit" class="geleKnop">{{ knopTekst }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Reeds klant?",
      info: "Meld je hier aan om verder te winkelen!",
      email: "E-mail",
      wachtwoord: "Wachtwoord",
      useremail: "",
      userwachtwoord: "",
      passwordForgot: "Wachtwoord vergeten?",
      knopTekst: "Aanmelden",
      errorMessage: ""
    };
  },
  methods: {
    login() {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          useremail: this.useremail,
          userwachtwoord: this.userwachtwoord
        })
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to authenticate');
            }
            return response.json();
          })
          // Inside the .then(data => { ... }) block of your fetch request
          .then(data => {
            console.log('Login successful:', data);
            // Redirect to the URL received from the backend
            window.location.href = data.redirectURL;
          })
          .catch(error => {
            console.error('Login failed:', error);
            this.errorMessage = 'Login failed. Please check your credentials.';
          });
    }
  }
};
</script>
