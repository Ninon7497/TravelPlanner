<template>
  <div class="min-h-screen bg-white flex flex-col items-center p-6">
    <header class="w-full flex justify-between items-center p-4">
    <header><ButtonHome></ButtonHome></header>
    </header>

    <div class="w-full max-w-md">
      <img v-if="villeImage" :src="villeImage" alt="Lieu" class="w-full rounded-lg shadow-lg" />
      <div class="text-center mt-4">
        <h1 class="text-2xl font-bold">{{ ville }}</h1>
        <p class="text-gray-700">{{ savedDate }}</p>
      </div>
    </div>

    <div class="mt-6 w-full max-w-md flex flex-col gap-4">
      <button
        v-for="(jour, index) in jours"
        :key="index"
        class="w-full text-lg font-bold text-blue-700 border-2 border-blue-700 rounded-lg py-3 text-center hover:bg-blue-100 transition"
      >
        JOUR {{ index + 1 }}
      </button>
    </div>

    <div class="mt-6 text-center">
      <p><strong>Logement :</strong> {{ Logement }} - <strong>Prix :</strong> {{ PrixL }}€</p>
      <p><strong>Transport :</strong> {{ Transport }} - <strong>Prix :</strong> {{ PrixT }}€</p>
      <p><strong>Activité :</strong> {{ Activite }} - <strong>Prix :</strong> {{ PrixA }}€</p>
      <p class="text-lg font-bold mt-4"><strong>Total :</strong> {{ totalPrix }} €</p>
    </div>
  </div>
</template>

<script setup>
import ButtonHome from '@/components/ButtonHome.vue'
import { ref, computed, onMounted } from 'vue'

const ville = ref('')
const savedDate = ref('')
const Logement = ref('')
const PrixL = ref('')
const Transport = ref('')
const PrixT = ref('')
const Activite = ref('')
const PrixA = ref('')
const villeImage = ref('')

const jours = computed(() => {
  const dates = savedDate.value.split(' au ')
  if (dates.length === 2) {
    const dateDebut = new Date(dates[0])
    const dateFin = new Date(dates[1])
    const difference = (dateFin - dateDebut) / (1000 * 60 * 60 * 24) + 1
    return Array.from({ length: difference })
  }
  return []
})

const totalPrix = computed(() => {
  return (parseFloat(PrixL.value) || 0) + (parseFloat(PrixT.value) || 0) + (parseFloat(PrixA.value) || 0)
})

onMounted(() => {
  ville.value = localStorage.getItem('Lieu') || 'Lieu non défini'
  savedDate.value = localStorage.getItem('Date') || 'Dates non définies'
  Logement.value = localStorage.getItem('Logement') || 'Non précisé'
  PrixL.value = localStorage.getItem('PrixL') || '0'
  Transport.value = localStorage.getItem('Transport') || 'Non précisé'
  PrixT.value = localStorage.getItem('PrixT') || '0'
  Activite.value = localStorage.getItem('Activite') || 'Non précisé'
  PrixA.value = localStorage.getItem('PrixA') || '0'
  villeImage.value = localStorage.getItem('LieuImage') || ''
})
</script>

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
