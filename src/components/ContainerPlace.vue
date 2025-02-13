<template>
  <div>
    <div v-if="lieux.length">
      <div v-for="(lieu, index) in lieux" :key="index" class="lieu-container">
        <button @click="goToPage(lieu.nom)">{{ lieu.nom }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const lieux = ref([])
const router = useRouter()

onMounted(() => {
  const lieuxFromStorage = JSON.parse(localStorage.getItem('lieux')) || []
  lieux.value = lieuxFromStorage
})

const goToPage = (lieu) => {
  localStorage.setItem('selectedLieu', lieu)  
  router.push('/Day') 
}
</script>

<style scoped>
.lieu-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.lieu-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 5px;
  transition: background 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>
