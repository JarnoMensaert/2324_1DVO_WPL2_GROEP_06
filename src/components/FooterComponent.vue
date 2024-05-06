<script>
import { AkSend } from "@kalimahapps/vue-icons";
import { AkFacebookFill } from "@kalimahapps/vue-icons";
import { AnFilledInstagram } from "@kalimahapps/vue-icons";

export default {
  data() {
    return {
      footerTitleL: "Categories",
      footerInfoL: [
        "Meubels",
        "Woonaccesoires",
        "Stories",
        "Over ons",
        "Klantenservice",
      ],
      footerTitleM: "Comfortmeubel",
      footerInfoM: [
        "Kerkstraat 114, 2060 Antwerpen",
        "Maandag - Zaterdag: 09u30 - 18u00",
        "Dinsdag: Gesloten",
        "Zondag & Feestdagen: 10u00 - 18u00",
        "Openingsuren Magazijn: 9u30 - 16u30",
        "Zondag & Dinsdag: Gesloten",
      ],
      footerTitleR: "Contact",
      footerInfoR:
          [
            "0471 03 53 65",
            "comfortmeubel@gmail.com",
          ],
      footerTitleR2: "Let's be friends",
      footerInfoR2: "Schrijf u in voor onze nieuwsbrief en ontvang de laatste updates, nieuws en productaanbiedingen via e-mail",
      routerFooter: "Algemene voorwaarden / Cookies / Privacybeleid",
    }
  }
}
</script>
<template>
  <footer>
    <div class="footerTop">
      <div class="footerInfo">
        <h5 class="footerTitle">{{ footerTitleL }}</h5>
        <ul class="footerList">
          <li class="footerListItem" v-for="(info, index) in footerInfoL" :key="index">
            <a>{{ info }}</a>
          </li>
        </ul>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">{{ footerTitleM }}</h5>
        <ul class="footerList">
          <li class="footerListItem" v-for="(info, index) in footerInfoM" :key="index">
            <a>{{ info }}</a>
          </li>
        </ul>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">{{ footerTitleR }}</h5>
        <ul class="footerList">
          <li class="footerListItem" v-for="(info, index) in footerInfoR" :key="index">
            <a>{{ info }}</a>
          </li>
        </ul>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">{{ footerTitleR2 }}</h5>
        <AkFacebookFill  class="icon clickable"/>
        <AnFilledInstagram class="icon clickable"/>
        <form>
          <p>{{ footerInfoR2 }}</p>
          <input id="email" type="email" placeholder="Je e-mailadres">
          <button id="submitEmail" type="submit"><AkSend class="clickable"/></button>
        </form>
      </div>
    </div>
    <div class="footerBottom">
      <RouterLink to="/voorwaarden"><a class="clickable voorwaardenFooter">{{ routerFooter }}</a></RouterLink>
    </div>
  </footer>
</template>