<template>
    <div class="recipe-list">
      <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </div>
  </template>
  
  <script setup lang="ts">
  import Recipe from './Recipe.vue'
  
  interface Recipe {
    id: number
    name: string
    category: string
    description: string
    instructions: string
    difficultyLevel: string
  }
  
  defineProps<{
    recipes: Recipe[]
  }>()
  </script>
  
  <style scoped>
  .recipe-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>
  