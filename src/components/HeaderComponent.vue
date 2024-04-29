<script>
</script>
<template>
  <nav class="nav">
    <div class="nav-top">
      <img class="clickable iconlinks navtopitem" src="@/assets/Icons/Search.png"/>
      <RouterLink to="/"><img class="logo clickable" src="@/assets/Comfortmeubel/Logo.png"/></RouterLink>
      <img class="clickable iconrechts navtopitem" src="@/assets/Icons/Person.png"/>
      <RouterLink to="/winkelmand"><img class="clickable iconrechts navtopitem" src="@/assets/Icons/Shopping Cart.png"/></RouterLink>
    </div>
    <div class="nav-bottom">
      <ul class="navitems">
        <RouterLink to="/meubels"><li class="navitem clickable"><a href="">Meubels</a></li></RouterLink>
        <RouterLink to="/woonaccesoires"><li class="navitem clickable"><a>Woonaccesoires</a></li></RouterLink>
        <RouterLink to="/stories"><li class="navitem clickable"><a>Stories</a></li></RouterLink>
        <RouterLink to="/about"><li class="navitem clickable"><a>Over ons</a></li></RouterLink>
        <RouterLink to="/klantenservice"><li class="navitem clickable"><a>Klantenservice</a></li></RouterLink>
      </ul>
    </div>
  </nav>
</template>