<template>
    <div class="recipe">
      <h2>{{ recipe.name }}</h2>
      <p><strong>Category:</strong> {{ recipe.category }}</p>
      <p>Level: {{ recipe.difficultyLevel }}</p>
      <p><i>{{ recipe.description }}</i></p>
      <p>Intructions:<br> {{ recipe.instructions }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Recipe {
    id: number
    name: string
    category: string
    description: string
    instructions: string
    difficultyLevel: string
  }
  
  defineProps<{
    recipe: Recipe
  }>()
  </script>
  
  <style scoped>
  .recipe {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 20px;
  }
  </style>
  