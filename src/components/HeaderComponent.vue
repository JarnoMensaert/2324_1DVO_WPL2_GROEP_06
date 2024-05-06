<script>
export default {
  data() {
    return {
      navItem1:   "Meubels",
      navItem2:   "Woonaccesoires",
      navItem3:   "Stories",
      navItem4:   "Over ons",
      navItem5:   "Klantenservice",
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
  },
}
</script>

<template>
  <nav class="nav">
    <div class="nav-top">
      <img class="clickable iconlinks navtopitem" src="@/assets/Icons/Search.png"/>
      <img @click="Home()" class="logo clickable" src="@/assets/Comfortmeubel/Logo.png"/>
      <img class="clickable iconrechts navtopitem" src="@/assets/Icons/Person.png"/>
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