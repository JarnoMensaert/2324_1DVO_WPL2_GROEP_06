<script>
export default {
  name: "product"
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
    <div class="productInfo">
      <div class="productLinks">
        <!-- TODO: Image-->
        <hr>
        <div id="carouselFotos">
          <!-- TODO: Images-->
        </div>
      </div>
      <div class="productRechts">
        <h2 class="productTitel">Ligzetel</h2> <!--TODO: DIT DOEN IN JAVASCRIPT -->
        <span class="stocked">IN STOCK</span> <!--TODO: DIT DOEN IN JAVASCRIPT -->
        <p class="productOmschr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae orci interdum dolor
          porttitor egestas.
          Donec sollicitudin ante in massa placerat, sit amet pellentesque odio condimentum. Vivamus ac lacus a metus
          volutpat aliquet. Nunc porttitor aliquam nulla quis volutpat. Pellentesque habitant morbi tristique
        </p> <!--TODO: DIT DOEN IN JAVASCRIPT -->
        <p class="dimensies">Dimensies:<br>
          1.2 x 1.5 m</p>
        <h2 id="productPrijs">€250,00</h2>
        <span class="addToCart">ADD TO CART</span> <!-- TODO: POSITION ABSOLUTE -->
        <hr>
        <p class="shipping1">Shipping cost and return</p>
        <p class="shipping2">For shipping info and cost, <a>click here</a></p>
        <p class="shippingExtraInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae orci interdum
          dolor porttitor egestas. Donec sollicitudin ante in massa placerat, sit amet pellentesque odio condimentum.
          Vivamus ac lacus a metus volutpat aliquet. Nunc porttitor aliquam nulla quis volutpat. Pellentesque habitant
          morbi tristique</p>
      </div>
    </div>
    <div class="itemsYouMayLike">
      <h2 class="itemsYMLTitel">Items you may like</h2>
      <!-- TODO: Images-->
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