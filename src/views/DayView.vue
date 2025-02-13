<template>
  <header><ButtonHome></ButtonHome></header>
  <div>
        <div v-if="ImageLieu">
      <img :src="ImageLieu" alt="Lieu" />
    </div>
    <div>
      <h1>{{ ville }}</h1>
      <p>{{ startDate }} - {{ endDate }}</p>
      <p>Nombre de jours : {{ daysDifference }}</p>
      <p>Date actuelle : {{ currentDate }}</p>
    </div>
    <div>
      <button
        v-for="(jour, index) in jours"
        :key="index"
       
        @click="goToJour(index + 1)"
      >
        JOUR {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ButtonHome from '@/components/ButtonHome.vue'

const router = useRouter()
const ville = ref('')
const ImageLieu = ref('')
const startDate = ref('')
const endDate = ref('')
const currentDate = ref(new Date().toLocaleDateString())
const daysDifference = computed(() => {
  if (startDate.value && endDate.value) {
    const start = new Date(startDate.value)
    const end = new Date(endDate.value)
    return Math.ceil((end - start) / (1000 * 3600 * 24)) + 1
  }
  return 0
})

const jours = computed(() => Array.from({ length: daysDifference.value }))

onMounted(() => {
  const lieux = JSON.parse(localStorage.getItem('lieux')) || []
  if (lieux.length > 0) {
    ville.value = lieux[lieux.length - 1].nom
    ImageLieu.value = lieux[lieux.length - 1].image
  } else {
    ville.value = 'Lieu non défini'
    ImageLieu.value = ''
  }

  startDate.value = localStorage.getItem('startDate') || 'Date de début non définie'
  endDate.value = localStorage.getItem('endDate') || 'Date de fin non définie'
})

const goToJour = (jour) => {
  const activite = localStorage.getItem(`activiteJour${jour}`)
  
  if (activite) {
    router.push(`/Itinerary`) 
  } else {
    router.push('/Step') 
  }
}
</script>

<style scoped>
img {
  border-radius: 10px;
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