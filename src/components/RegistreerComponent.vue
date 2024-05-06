<script>
export default {
  data() {
    return {
      componentTitle: "Nieuwe klant?",
      mevrouw: "Mevrouw",
      meneer: "Meneer",
      voornaam: "Voornaam*",
      achternaam: "Achternaam*",
      email: "E-mail*",
      wachtwoord: "Wachtwoord*",
      repeatWachtwoord: "Herhaal wachtwoord*",
      opDeHoogteText: "Hou me op de hoogte van de laatste nieuwtjes, de nieuwe collecties en leuke acties van Comfortmeubel.",
      perEmail: "Per e-mail",

    }
  }
}
</script>

<template>
  <div class="nieuweKlant">
    <h1>{{ componentTitle }}</h1>
    <form @submit.prevent="">
      <div class="gender">
        <input type="checkbox" id="mevrouw" name="mevrouw" value="mevrouw">
        <label for="mevrouw">{{ mevrouw }}</label>
        <input type="checkbox" id="meneer" name="meneer" value="meneer">
        <label for="meneer">{{ meneer }}</label><br>
      </div>
      <div class="accountInfo">
        <label for="voornaam">{{ voornaam }}</label><br>
        <input type="text" id="voornaam" name="voornaam" value=""><br>
        <label for="achternaam">{{ achternaam }}</label><br>
        <input type="text" id="achternaam" name="achternaam" value=""><br>
        <label for="email">{{ email }}</label><br>
        <input type="email" id="email" name="email" value=""><br>
        <label for="password">{{ wachtwoord }}</label><br>
        <input type="password" id="password" name="password" value=""><br>
        <label for="repeatPassword">{{ repeatWachtwoord }}</label><br>
        <input type="repeatPassword" id="repeatPassword" name="repeatPassword" value=""><br>
      </div>
      <div class="opDeHoogte">
        <p>{{  opDeHoogteText }}</p>
        <input type="checkbox" id="perEmail" name="perEmail" value="perEmail">
        <label for="perEmail">{{ perEmail }}</label><br>
      </div>
      <input type="submit" class="geleKnop" value="Account aanmaken">
    </form>
  </div>
</template>