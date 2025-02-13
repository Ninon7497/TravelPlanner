<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  
    <RouterLink to="/place">
        <img
            class="add-picture"
            src="@/components/ButtonAdd.svg"
            alt="add button"  
        />
    </RouterLink>
</template>