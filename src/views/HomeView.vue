<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue'

const recipes = [
  { id: 1, name: 'Spaghetti Bolognese', difficultyLevel: 'Easy', category: 'Italian', description: 'Delicious pasta with a meatsauce.' },
  { id: 2, name: 'Pad Thai', difficultyLevel: 'Intermediate', category: 'Asian', description: 'Ricenoodles with tofu, peanuts and soy sauce.' },
  { id: 3, name: 'Falafel Bowl', difficultyLevel: 'Easy', category: 'Oriental', description: 'Chickpea meatballs with humus and salad.' }
]
</script>

<template>
  <section>
    <h1>My Recipes</h1>
    <RecipeList :recipes="recipes" />
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 1rem;
  color: #222;
}
</style>
