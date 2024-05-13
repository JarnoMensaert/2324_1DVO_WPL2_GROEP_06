<script>
export default {
  data() {
    return {
      navItem1:   "Meubels",
      navItem2:   "Woonaccesoires",
      navItem3:   "Stories",
      navItem4:   "Over ons",
      navItem5:   "Klantenservice",
      showPopup:  false,
      showBar:    false,
    }
  },
  methods: {
    Home() {
      this.$router.push('/')
    },
    Meubels() {
      this.$router.push('/meubels')
    },
    Woonaccesoires() {
      this.$router.push('/woonaccesoires')
    },
    Stories() {
      this.$router.push('/stories')
    },
    About() {
      this.$router.push('/about')
    },
    Klantenservice() {
      this.$router.push('/klantenservice')
    },
    Winkelmand() {
      this.$router.push('/winkelmand')
    },
    Profiel() {
      this.$router.push('/profiel')
    },
    Login() {
      this.$router.push('/login')
    },
    Favorieten() {
      this.$router.push('/favorieten');
    },
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    showSearchBar() {
      this.showBar = !this.showBar;
    },
  },
}
</script>

<template>
  <nav class="nav">
    <div class="nav-top">
      <img class="clickable iconlinks navtopitem" src="@/assets/Icons/Search.png" @mouseover="showSearchBar()"/>
      <input class="clickable iconlinks navtopitem searchBar" placeholder="Zoek een product..." :style="{ display: showBar ? 'block' : 'none' }"></input>
      <img @click="Home()" class="logo clickable" src="@/assets/Comfortmeubel/Logo.png"/>
      <img class="clickable iconrechts navtopitem" src="@/assets/Icons/Person.png"   @click="togglePopup()"/>
      <div class="popup" :style="{ display: showPopup ? 'block' : 'none' }">
        <div>
          <button @click="Favorieten()"><img src="/public/assets/Icons/favorite.png">Favorieten</button>
          <button @click="Profiel()"><img src="/public/assets/Icons/Person.png">Jouw Account</button>
          <button @click="Login()" class="geleKnop">Aanmelden</button>
        </div>
      </div>
      <img @click="Winkelmand()" class="clickable iconrechts navtopitem" src="@/assets/Icons/Shopping Cart.png"/>
    </div>
    <div class="nav-bottom">
      <ul class="navitems">
        <li class="navitem clickable"><a @click="Meubels()">{{ navItem1 }}</a></li>
        <li class="navitem clickable"><a @click="Woonaccesoires()">{{ navItem2 }}</a></li>
        <li class="navitem clickable"><a @click="Stories()">{{ navItem3 }}</a></li>
        <li class="navitem clickable"><a @click="About()">{{ navItem4 }}</a></li>
        <li class="navitem clickable"><a @click="Klantenservice()">{{ navItem5 }}</a></li>
      </ul>
    </div>
  </nav>
</template>