<template>
    <div id="app">
      <ImageGrid :images="images" @button-click="showModal"/>
      <Modal v-if="showModalFlag" :info="modalInfo" @close-modal="closeModal"/>
    </div>
  </template>
  
  <script>
  import ImageGrid from '../components/ImageGridComponent.vue'
  import Modal from '../components/ModalComponent.vue';
  
  export default {
    name: 'App',
    components: {
      ImageGrid,
      Modal
    },
    data() {
      return {
        images: [
          { src: '/assets/images/Aanbieding1.jpg', info: 'Information for Image 1' },
          { src: '/assets/images/Aanbieding1.jpg', info: 'Information for Image 2' },
          { src: 'image3.jpg', info: 'Information for Image 3' },
          { src: 'image4.jpg', info: 'Information for Image 4' },
          { src: 'image5.jpg', info: 'Information for Image 5' },
          { src: 'image6.jpg', info: 'Information for Image 6' }
        ],
        showModalFlag: false,
        modalInfo: ''
      };
    },
    methods: {
      showModal(info) {
        this.showModalFlag = true;
        this.modalInfo = info;
      },
      closeModal() {
        this.showModalFlag = false;
        this.modalInfo = '';
      }
    }
  };
  </script>
  

