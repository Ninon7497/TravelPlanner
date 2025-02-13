<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-white text-blue-600 p-6">

    <header class="absolute top-4 left-4">
      <ButtonHome class="text-3xl"/>
    </header>

    <h1 class="text-4xl font-serif font-bold my-6">Vos Dates</h1>
    <div class="w-full max-w-sm space-y-6">
      <div class="flex flex-col">
        <label for="start" class="text-lg font-semibold flex items-center gap-2">
          📅 Date de début :
        </label>
        <input 
          type="date" 
          id="start" 
          v-model="startDate" 
          min="2025-01-31" 
          max="2025-12-31" 
          class="mt-2 p-3 border border-blue-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div class="flex flex-col">
        <label for="end" class="text-lg font-semibold flex items-center gap-2">
          📅 Date de fin :
        </label>
        <input 
          type="date" 
          id="end" 
          v-model="endDate" 
          min="2025-01-31" 
          max="2025-12-31" 
          class="mt-2 p-3 border border-blue-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button @click="saveDates">Valider</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonHome from '@/components/ButtonHome.vue'

const router = useRouter()
const startDate = ref('')
const endDate = ref('')

const saveDates = () => {
  if (startDate.value && endDate.value) {
    localStorage.setItem('startDate', startDate.value)
    localStorage.setItem('endDate', endDate.value)
    console.log('Dates sauvegardées :', startDate.value, endDate.value)
    router.push('/Day')
  } else {
    console.error('Les dates ne peuvent pas être vides !')
  }
}
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