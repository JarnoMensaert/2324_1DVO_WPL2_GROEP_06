<script setup>
import { AkSend } from "@kalimahapps/vue-icons";
import { AkFacebookFill } from "@kalimahapps/vue-icons";
import { AnFilledInstagram } from "@kalimahapps/vue-icons";
</script>
<template>
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
        <h5 class="footerTitle">Comfortmeubel</h5>
        <p>Kerkstraat 114, 2060 Antwerpen</p><br>
        <p>Maandag - Zaterdag: 09u30 - 18u00</p>
        <p>Dinsdag: Gesloten</p>
        <p>Zondag & Feestdagen: 10u00 - 18u00</p><br>
        <p>Openingsuren Magazijn: 9u30 - 16u30</p>
        <p>Zondag & Dinsdag: Gesloten</p>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">Contact</h5>
        <p>0471 03 53 65</p>
        <p>comfortmeubel@gmail.com</p>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">Let's be friends</h5>
        <AkFacebookFill  class="icon clickable"/>
        <AnFilledInstagram class="icon clickable"/>
        <!-- TODO: icoontjes sociale media-->
        <form>
          <p>Schrijf u in voor onze nieuwsbrief en ontvang de laatste updates, nieuws en productaanbiedingen via e-mail</p>
          <input id="email" type="email" placeholder="Je e-mailadres">
          <button id="submitEmail" type="submit"><AkSend class="clickable"/></button>
        </form>
      </div>
    </div>
    <div class="footerBottom">
      <a class="clickable">Algemene voorwaarden / Cookies / Privacybeleid</a>
    </div>
  </footer>
</template>