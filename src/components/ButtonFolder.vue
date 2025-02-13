<template>
    <div>
      <img 
        class="Folder"
        src="@/components/PicturesFolder.svg"
        alt="Folder"
        @click="openFilePicker"
      />
  
      <input 
        type="file"
        ref="fileInput"
        @change="handleFileChange"
        accept="image/*"
        style="display: none"
      />
  
      <p v-if="selectedFile">Fichier choisi : {{ selectedFile.name }}</p>
  
      <div v-if="imageSource">
        <img :src="imageSource" alt="Image choisie" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const fileInput = ref(null)
  const selectedFile = ref(null)
  const imageSource = ref(null)
  
  const openFilePicker = () => {
    fileInput.value.click()
  }
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      selectedFile.value = file
      const reader = new FileReader()
      reader.onload = () => {
        imageSource.value = reader.result
        localStorage.setItem('Lieuimage', reader.result) // Stocker l'image dans le localStorage
      }
      reader.readAsDataURL(file)
    }
  }
  
  onMounted(() => {
    const storedImage = localStorage.getItem('Lieuimage')
    if (storedImage) {
      imageSource.value = storedImage
    }
  })
  </script>
  
  <style scoped>
  .Folder {
    cursor: pointer;
    width: 50px;
    height: 50px;
  }
  
  img {
    border-radius: 10px;
    margin-top: 20px;
    max-width: 100%;
  }
  </style>
  