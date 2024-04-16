<script>
export default {
  name: "meubels"
}
</script>

<template>
  <nav class="nav">
    <div class="navtop">
      <img height="39" src="../assets/Icons/Search.png" width="39"/>
      <img height="96" src="../assets/Icons/LOGO.png" width="246"/>
      <img height="39" src="../assets/Icons/Person.png" width="39"/>
      <img height="39" src="../assets/Icons/Shopping Cart.png" width="39"/>
    </div>
    <div class="navbottom">
      <ul class="navitems">
        <li class="navitem"><a>Meubels</a></li>
        <li class="navitem"><a>Woonaccesoires</a></li>
        <li class="navitem"><a>Stories</a></li>
        <li class="navitem"><a>Over ons</a></li>
        <li class="navitem"><a>Klantenservice</a></li>
      </ul>
    </div>
  </nav>
  <main>
    <p class="breadcrumb">HOME / MEUBELS / ZITMEUBELS / RELAXZETELS</p> <!--TODO: DIT DOEN IN JAVASCRIPT -->
    <div class="filters"> <!--TODO: ICONS -->
      <span class="sortBy">Sort by</span> <!--TODO: CLICKABLE -->
      
    </div>
  </main>
  <footer>
    <div class="footerTop">
      <div class="footerInfo">
        <h5 class="footerTitle">Categories</h5>
        <ul class="footerList">
          <li class="footerListItem"><a>Meubels</a></li>
          <li class="footerListItem"><a>Woonaccesoires</a></li>
          <li class="footerListItem"><a>Stories</a></li>
          <li class="footerListItem"><a>Over ons</a></li>
          <li class="footerListItem"><a>Klantenservice</a></li>
        </ul>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">NordicEase</h5>
        <p>Kerkstraat 114, 2060 Antwerpen</p>
        <p>Maandag - Zaterdag: 09u30 - 18u00</p>
        <p>Dinsdag: Gesloten</p>
        <p>Zondag & Feestdagen: 10u00 - 18u00</p>
        <p>Openingsuren Magazijn:</p>
        <p>Maandag - Zaterdag: 9u30 - 16u30</p>
        <p>Zondag - Dinsdag: Gesloten</p>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">Contact</h5>
        <p>0471 03 53 65</p>
        <p>comfortmeubels@gmail.com</p>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">Let's be friends</h5>
        <!-- TODO: icoontjes sociale media-->
        <form>
          <p>Schrijf u in voor onze nieuwsbrief en ontvang de laatste updates, nieuws en productaanbiedingen via
            e-mail</p>
          <input id="email" type="text">
          <input id="submitEmail" type="submit" value="Inzenden"> <!-- TODO: Icoontje verzenden ipv filler-->
        </form>
      </div>
    </div>
    <div class="footerBottom">
      <a>Algemene voorwaarden / Cookies / Privacybeleid</a>
    </div>
  </footer>
</template>

<style scoped>

</style>