<script>
export default {
  data() {
    return {
      title: "Adres & Contact",

      adres: "Kerkstraat 114, 2060 Antwerpen",
      telefoon: "03 235 78 74",
      email: "info@Comfortmeubel.be",
    }
  }
}
</script>

<template>
  <div class="adresContact">
    <div class="info">
      <h1 class="infoTitle">{{ title }}</h1>
      <p>{{ adres }}</p>
      <p>{{ telefoon }}</p>
      <p>{{ email }}</p>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4998.001598855133!2d4.430649976109121!3d51.21906093172721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f709ae8ec267%3A0x17b51aaeb8fcefde!2sComfortmeubel!5e0!3m2!1snl!2sbe!4v1713648558630!5m2!1snl!2sbe"></iframe>
  </div>
</template>