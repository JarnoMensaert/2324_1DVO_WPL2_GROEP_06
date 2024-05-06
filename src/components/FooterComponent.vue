<script>
import { RiInstagramFill } from "oh-vue-icons/icons";
import { FaFacebookSquare } from "oh-vue-icons/icons";
import { RiSendPlane2Line } from "oh-vue-icons/icons";

export default {
  data() {
    return {
      footerTitleL: "Categories",
      footerInfoL: [
        { name: "Meubels", path: "/meubels" },
        { name: "Woonaccesoires", path: "/woonaccesoires"},
        {name: "Stories", path: "/stories"},
        {name: "Over ons", path: "/about"},
        {name: "Klantenservice", path: "/klantenservice"},
      ],
      footerTitleM: "Comfortmeubel",
      footerInfoMAdres: [
        "Kerkstraat 114, 2060 Antwerpen"
      ],
      footerInfoMOpeningsuren: [
        "Maandag - Zaterdag: 09u30 - 18u00",
        "Dinsdag: Gesloten",
      ],
      footerInfoMOpeningsurenZondag: [
        "Zondag & Feestdagen: 10u00 - 18u00"
      ],
      footerInfoMMagazijn: [
        "Openingsuren Magazijn: 9u30 - 16u30",
        "Zondag & Dinsdag: Gesloten"
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
  },
  components: {
    FaFacebookSquare,
    RiInstagramFill,
    RiSendPlane2Line
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
            <router-link :to="info.path">{{ info.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="footerInfo">
        <h5 class="footerTitle">{{ footerTitleM }}</h5>
        <ul class="footerList">
          <li class="footerListItem1 footerListItem" v-for="(info, index) in footerInfoMAdres" :key="index">
            <a>{{ info }}</a>
          </li>
          <li class="footerListItem2 footerListItem" v-for="(info, index) in footerInfoMOpeningsuren" :key="index">
            <a>{{ info }}</a>
          </li>
          <li class="footerListItem3 footerListItem" v-for="(info, index) in footerInfoMOpeningsurenZondag" :key="index">
            <a>{{ info }}</a>
          </li>
          <li class="footerListItem4 footerListItem" v-for="(info, index) in footerInfoMMagazijn" :key="index">
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
        <a href="https://www.facebook.com/comfortmeubel/"><img src="/assets/Icons/facebook.png" class="icon clickable" alt="Facebook"/></a>
        <a href="https://www.instagram.com/comfortmeubel/"><img src= "/assets/Icons/instagram.png" class="icon clickable" alt="Instagram"/></a>
        <form>
          <p>{{ footerInfoR2 }}</p>
          <input id="email" type="email" placeholder="Je e-mailadres">
          <button id="submitEmail" type="submit"><img src="/assets/Icons/sendButton.png" alt="Send" class="clickable"/></button>
        </form>
      </div>
    </div>
    <div class="footerBottom">
      <RouterLink to="/voorwaarden"><a class="clickable voorwaardenFooter">{{ routerFooter }}</a></RouterLink>
    </div>
  </footer>
</template>