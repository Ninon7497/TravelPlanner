<!-- <template>
  <div>
    <h2>Villes enregistrées</h2>
    <p v-if="lieux.length === 0">Aucune ville enregistrée</p>
    <div v-else>
      <div v-for="(place, index) in lieux" :key="index" class="lieu-container">
        <button @click="goToPage(place.nom)">
          {{ place.nom }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const lieux = ref([])
const router = useRouter()

const loadPlaces = () => {
  const storedLieux = localStorage.getItem('lieux')
  lieux.value = storedLieux ? JSON.parse(storedLieux) : []
}

onMounted(() => {
  loadPlaces()
  console.log("Villes chargées :", lieux.value)
})

const goToPage = (nom) => {
  localStorage.setItem('ville', nom)
  router.push('/Day')
}
</script>

<style scoped>
.lieu-container {
  margin: 10px 0;
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
  margin: 5px;
}

button:hover {
  background-color: #2980b9;
}

img {
  width: 100px;
  height: auto;
  display: block;
  margin-top: 5px;
  border-radius: 5px;
}
</style> -->
