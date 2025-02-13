<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonAddPlace from '@/components/ButtonAddPlace.vue'
import ContainerPlace from '@/components/ContainerPlace.vue'
</script>

<template>
    <header><ButtonAddPlace></ButtonAddPlace></header>
    <h1>MY TRAVEL PLANNER</h1>
    <ContainerPlace></ContainerPlace>
</template>

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