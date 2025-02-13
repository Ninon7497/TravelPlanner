<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  
    <RouterLink to="/">
        <img
            class="home-picture"
            src="@/components/Beach.svg"
            alt="home button"  
        />
    </RouterLink>
</template>