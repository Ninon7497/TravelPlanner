<template>
  <header><ButtonHome></ButtonHome></header>
  <h1>Ajouter un Lieu</h1>
  <fieldset class="adresse">
    <legend>Lieu</legend>
    <input v-model="ville" type="text" placeholder="Entrez une ville" />
    <ButtonFolder></ButtonFolder>
  </fieldset>
  <button @click="savePlace">Ajouter</button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonHome from '@/components/ButtonHome.vue'
import ButtonFolder from '@/components/ButtonFolder.vue'

const router = useRouter()
const ville = ref("")
const imageLieu = ref("")

const savePlace = () => {
  if (ville.value.trim()) {
    const newPlace = { nom: ville.value, image: imageLieu.value }
    let lieux = JSON.parse(localStorage.getItem('lieux')) || []
    lieux.push(newPlace)

    localStorage.setItem('lieux', JSON.stringify(lieux))

    console.log('Lieu sauvegardé :', newPlace)
    ville.value = ""
    imageLieu.value = ""
    router.push('/dates')
  } else {
    console.error('La ville ne peut pas être vide !')
  }
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imageLieu.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
fieldset {
  margin-bottom: 15px;
}
</style>
<style>
body {
  font-family: "Times New Roman", serif;
  text-align: center;
  background-color: white;
  color: #0033cc;
  margin: 0;
  padding: 0;
}

.logo {
  margin-top: 20px;
  font-size: 30px;
}

h1 {
  font-size: 32px;
  margin-top: 20px;
}

label {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 20px;
}

label img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

input {
  width: 80%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #0033cc;
  border-radius: 20px;
  outline: none;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #0033cc;
  background-color: white;
  border: 1px solid #0033cc;
  border-radius: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0033cc;
  color: white;
}
</style>