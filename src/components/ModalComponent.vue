<!-- Modal.vue -->
<template>
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div v-html="info"></div>
        <button class="closeBtn" @click="closeModal"><CgClose/></button>
      </div>
    </div>
  </template>
  
  <script>
  import { CgClose } from "@kalimahapps/vue-icons";
  export default {
    components: {
    CgClose
    },
    props: ['info'],
    methods: {
      closeModal() {
        this.$emit('close-modal');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  button {
    margin-top: 10px;
  }
  </style>
  