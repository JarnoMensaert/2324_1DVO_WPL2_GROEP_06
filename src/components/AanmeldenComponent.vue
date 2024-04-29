<script>
</script>

<template>
  <div class="aanmelden">
    <h1>Reeds klant?</h1>
    <p>Meld je hier aan om verder te winkelen!</p>
    <form @submit.prevent="login">
      <div>
        <label for="Email">Email</label><br>
        <input type="text" id="Email" v-model="email" required>
      </div>
      <div>
        <label for="Wachtwoord">Wachtwoord</label><br>
        <input type="password" id="Wachtwoord" v-model="wachtwoord" required>
      </div>
      <div>
        <a href="#">Wachtwoord vergeten?</a>
      </div>
      <button type="submit" class="geleKnop">Aanmelden</button>
    </form>
  </div>
</template>