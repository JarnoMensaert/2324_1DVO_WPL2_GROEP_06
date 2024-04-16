<script>

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
    <div class="fullScreen">
      <div class="caroussel">
        <button id="discover">Discover more</button>
      </div>
    </div>
    <div class="middleScreen">
      <h3 class="groteTekst">Dit is een quote en je gaat er niks aan hebben.</h3>
      <div class="aanbieding">
        <span></span>
        <img height="360" src="../assets/Images/zetel.png" width="283"/>
        <h5 class="aanbtitel">Ligzetel</h5>
        <p class="aanbprijs">€250,00</p>
      </div>
      <div class="aanbieding">
        <span></span>
        <img height="360" src="../assets/Images/griekseeettafel.png" width="283"/>
        <h5 class="aanbtitel">Griekse eettafel</h5>
        <p class="aanbprijs">€1700,00</p>
      </div>
      <div class="aanbieding">
        <span><p>30%</p></span>
        <img height="360" src="../assets/Images/zetel.png" width="283"/>
        <h5 class="aanbtitel">Eenpersoons bed</h5>
        <p class="initialprijs">€1700,00</p>
        <p class="aanbprijs">€250,00</p>
      </div>
    </div>
    <div class="fullscreen">
      <h3>What are you looking for?</h3>
      <div class="groteTekst">
        <img height="360" src="../assets/Images/Zitmeubels.png" width="288"/>
        <p class="homeCategorie">Zitmeubels</p>
        <a class="shopNow">Shop now</a> <!-- TODO: Hier nog icoontje toevoegen zie figma -->
      </div>
      <div class="lookingFor">
        <img height="360" src="../assets/Images/Eetkamer.png" width="288"/>
        <p class="homeCategorie">Eetkamer</p>
        <a class="shopNow">Shop now</a> <!-- TODO: Hier nog icoontje toevoegen zie figma -->
      </div>
      <div class="lookingFor">
        <img height="360" src="../assets/Images/Slapen.png" width="288"/>
        <p class="homeCategorie">Slapen</p>
        <a class="shopNow">Shop now</a> <!-- TODO: Hier nog icoontje toevoegen zie figma -->
      </div>
      <div class="lookingFor">
        <img height="360" src="../assets/Images/Tafels.png" width="288"/>
        <p class="homeCategorie">Tafels</p>
        <a class="shopNow">Shop now</a> <!-- TODO: Hier nog icoontje toevoegen zie figma -->
      </div>
      <div class="lookingFor">
        <img height="360" src="../assets/Images/Kasten.png" width="288"/>
        <p class="homeCategorie">Kasten</p>
        <a class="shopNow">Shop now</a> <!-- TODO: Hier nog icoontje toevoegen zie figma -->
      </div>
    </div>
    <div class="kleineRuimte">
      <h3 class="groteTekst">Stories</h3>
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

<style>
html {
  background: white;
}
</style>