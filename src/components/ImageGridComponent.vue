  <script>
  import { GlSearchPlus } from "@kalimahapps/vue-icons";
  export default {
    components: {
      GlSearchPlus,
    },
    data() {
      return {
        images: [
        { 
            src: "@/assets/images/Service1.png",
            info: "<h1>Ladderlift</h1><br>Comfortmeubel biedt u de extra service ladderlift aan. Wanneer u hiervoor kiest, organiseren wij de ladderliftdienst. <br>Tijdens de verkoop in de winkel moet u dit expliciet vermelden. Bij online aankopen bieden we geen extra service ladderlift aan. Bij online aankopen kunt u contact opnemen met een ladderliftdienst in uw regio. Bv een ladderlift tot en met de 5de verdieping in Antwerpen en deelgemeentes komt op €85, tot 9e verdiep € 125, andere op aanvraag. <br>Buiten rand tot 6e verdiep € 150. <br><br>Heel belangrijk is dat er zeker 10 meter opening beschikbaar is voor de deur. Hiervoor moet u bij uw gemeente of stad op tijd parkeerborden aanvragen. Indien er geen voldoende plaats beschikbaar is en wij de levering niet kunnen uitvoeren gaat de leverdienst verder. Een tweede ladderlift komt dan met een extra kost van €85 bovenop de nieuwe ladderliftkosten. <br><br> De links van enkele regio’s waarop u parkeerborden kunt aanvragen, kunt u hieronder vinden: <br>Antwerpen: <a href='https://www.antwerpen.be/nl/info/5655c30fb2a8a79f428b45e8/aanvraag-tijdelijk-parkeerverbod'>https://www.antwerpen.be/nl/info/5655c30fb2a8a79f428b45e8/aanvraag-tijdelijk-parkeerverbod</a><br>Mechelen: <a href='https://www.mechelen.be/inname-openbaar-domein-tijdelijke-inname-voor-werken-en-verhuis'>https://www.mechelen.be/inname-openbaar-domein-tijdelijke-inname-voor-werken-en-verhuis</a>",
            title: "Ladderlift"
        },   
        { 
            src: "@/assets/images/Service2.png",
            info: "<h1>Montage</h1> <br> Comfortmeubel biedt u de extra service montage aan. Wij werken met een team van ervaren monteurs die pragmatisch en efficiënt te werk gaan. Indien u een montage wenst dient u dit duidelijk te melden in de winkel. Bij online aankopen bieden we geen montage opties, we bieden dan enkel levering. <br><br> De montagekost is afhankelijk van het te monteren product en wordt duidelijk en ondubbelzinnig meegedeeld.  ",
            title: "Montage"
        },
        { 
            src: "@/assets/images/Service3.png",
            info: "<h1>Naverkoop</h1> <br> Indien aangekochte goederen schade vertonen dient u een mail te versturen naar <a href='info@comfortmeubel.be'>info@comfortmeubel.be</a> <br><br> Gelieve volgende zaken zeker toe te voegen: <br> <ul><li>Bestelbonnummer</li><li>Naam en voornaam</li><li>Adres vermeld op uw bestelbon</li><li>Telefoonnummer</li><li>Omschrijving van de schade met een duidelijke vermelding van welk onderdeel er precies is beschadigd</li><li>2 of 3 foto’s:</li></ul><br> <br> Een foto van het geheel en een foto van dichtbij die de schade duidelijk aantoont",
            title: "Naverkoop" 
        },
        { 
            src: "@/assets/images/Service4.png",
            info: "<h1>Thuisleveringen</h1> <br> Thuislevering Checklist: <br><br><ul><li class='thuisLevering'>- We informeren je via e-mail en bellen wanneer jouw bestelling binnen is.</li><li class='thuisLevering'>- Standaardlevering tot aan de gelijkvloers, met uitzonderingen vermeld op de bestelbon.</li><li class='thuisLevering'>- Gratis levering vanaf €1000 gelijkvloers in Antwerpen. Voor leveringen buiten Antwerpen gelden extra kosten.</li><li class='thuisLevering'>- Montage en het gebruik van een ladderlift moeten vooraf worden besproken en genoteerd op de bestelbon.</li><li class='thuisLevering'>- Betaling bij levering met bankcheque, cash, of overschrijving minstens 5 werkdagen voor levering.</li><li class='thuisLevering'>- Afval veroorzaakt door montage wordt door ons afgevoerd, oud meubilair nemen we echter niet mee.</li><li class='thuisLevering'>- Voor levering van kleine meubels via trap rekenen we een bijslag van €40.</li><li class='thuisLevering'>- Leveringsafspraak kan geannuleerd of verplaatst worden mits minstens 5 werkdagen voor de afgesproken datum.</li><li class='thuisLevering'>- De levering vindt plaats tussen 08u00 en 16u00, waarbij de chauffeur een half uur voor aankomst telefonisch contact opneemt. We verwachten dat je thuis bent wanneer onze chauffeur zich aanmeldt.</li><li class='thuisLevering'>- Prijzen voor levering buiten Antwerpen:</li><li class='prijsLevering'>- Antwerpen: €60</li><li class='prijsLevering'>- Tot 50 km: €85</li><li class='prijsLevering'>- Tot 75 km: €100</li><li class='prijsLevering'>- Tot 100 km: €125</li></ul><br>Geniet van uw aankopen!",
            title: "Thuisleveringen"
        },
        { 
            src: "@/assets/images/Service5.png",
            info: "<h1>Afhalingen</h1> Wanneer uw meubels in stock zijn of geleverd zijn kunt u uw aankopen komen afhalen. U dient zich ten laatste een kwartier voor de sluitingstijd van ons magazijn aan te melden in onze winkel te Kerkstraat 114, 2060 Antwerpen samen met uw bestelbon. Het resterende bedrag kunt u dan betalen in de winkel. De winkel zorgt ervoor dat uw aankopen klaarstaan in het magazijn. <br><br> Het magazijn van Comfortmeubel is gelegen op de Helmstraat 12, 2140 Antwerpen. De afstand tussen de winkel en het magazijn is 450 meter. <br><br>Openingsuren Afhalingen <br><br><ul><li>Maandag: 9u30 tot 16u30</li><li>Dinsdag: Gesloten</li><li>Woensdag: 9u30 tot 16u30</li><li>Donderdag: 9u30 tot 16u30</li><li>Vrijdag: 9u30 tot 16u30</li><li>Zaterdag: 9u30 tot 16u30</li><li>Zondag: Gesloten</li></ul>",
            title: "Afhalingen" 
        },
        { 
            src: "@/assets/images/Service6.png",
            info: "<div class='formulierInfo><img src='@/assets/images/Service6.png'>'<div class='info'><h1>Formulieren</h1><p>Kies welkformulier u wilt invullen<p></div><button class='geleKnop'>Contactformulier</button><button class='geleKnop'>Klachtenformulier</button></div>",
            title: "Formulieren" 
        },
        ],
        hoveredIndex: null,
        activeIndex: null
      };
    },
    methods: {
      hoverImage(index) {
        this.hoveredIndex = index;
      },
      unhoverImage() {
        if (!this.activeIndex) {
          this.hoveredIndex = null;
        }
      },
      showModal(info) {
        this.activeIndex = this.hoveredIndex;
        this.$emit('button-click', info);
      }
    }
  };
  </script>
  
  <template>
    <div class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-container">
        <div class="image-wrapper" @mouseover="hoverImage(index)" @mouseleave="unhoverImage">
          <div class="image-content">
            <img :src="image.src" alt="Image">
            <span class="title">{{ image.title }}</span>
          </div>
          <button v-show="hoveredIndex === index || activeIndex === index" @click="showModal(image.info)">
            <GlSearchPlus class="quickviewButton"/>
            <span class="buttonText">Quickview</span>
          </button>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  </style>
  