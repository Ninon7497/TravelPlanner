<template>
  <header><ButtonHome></ButtonHome></header>
  <h1>Nouvelle Étape</h1>
  <fieldset class="Lieu">
    <legend>Lieu</legend>
    <input id="Lieu" name="Lieu" type="text" />
    <ButtonFolder></ButtonFolder>
  </fieldset>

  <fieldset class="Date">
    <legend>Dates</legend>
    <input id="Date" name="Date" type="text" />
  </fieldset>

  <fieldset class="Logement">
    <legend>Logement</legend>
    <input id="Logement" name="Logement" type="text" />
    <legend>Prix</legend>
    <input id="PrixL" name="prixL" type="text" />
  </fieldset>

  <fieldset class="Transport">
    <legend>Moyen de Transport</legend>
    <input id="Transport" name="Transport" type="text" />
    <legend>Prix</legend>
    <input id="PrixT" name="prixT" type="text" />
  </fieldset>

  <fieldset class="Activite">
    <legend>Activité</legend>
    <input id="Activite" name="Activite" type="text" />
    <legend>Prix</legend>
    <input id="PrixA" name="prixA" type="text" />
  </fieldset>

  <button @click="savePlace">Ajouter</button>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonHome from '@/components/ButtonHome.vue'
import { useRouter } from 'vue-router';
import ButtonFolder from '@/components/ButtonFolder.vue'


const router = useRouter();

const savePlace = () => {
  const fields = ['Lieu', 'Date', 'Logement', 'Transport', 'Activite','PrixL','PrixT','PrixA'];
  let allValid = true;
  
  fields.forEach(field => {
    const value = document.getElementById(field).value.trim();
    if (value) {
      localStorage.setItem(field, value);
      console.log(`${field} sauvegardé :`, value);
    } else {
      console.error(`${field} ne peut pas être vide !`);
      allValid = false;
    }
  });

  if (allValid) {
    router.push('/Itinerary');
  }
};


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