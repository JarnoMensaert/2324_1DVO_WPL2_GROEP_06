<script>
export default {
  data() {
    return {
      title: "Reeds klant?",
      info: "Meld je hier aan om verder te winkelen!",

      email: "Email",
      wachtwoord: "Wachtwoord",

      passwordForgot: "Wachtwoord vergeten?",
      knopTekst: "Aanmelden",

    }
  }
}
</script>

<template>
  <div class="aanmelden">
    <h1>{{ title }}</h1>
    <p>{{ info }}</p>
    <form @submit.prevent="login">
      <div>
        <label for="Email">{{ email }}</label><br>
        <input type="text" id="Email" v-model="email" required>
      </div>
      <div>
        <label for="Wachtwoord">{{ wachtwoord }}</label><br>
        <input type="password" id="Wachtwoord" v-model="wachtwoord" required>
      </div>
      <div>
        <a href="#">{{ passwordForgot }}?</a>
      </div>
      <button type="submit" class="geleKnop">{{ knopTekst }}</button>
    </form>
  </div>
</template>