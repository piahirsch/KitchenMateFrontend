<template>
  <div class="recipe-list">
    <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
      <h2>{{ recipe.name }}</h2>
      <p>Level: {{ recipe.difficultyLevel }}</p>
      <p><strong>Category:</strong> {{ recipe.category }}</p>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Recipe {
  id: number
  name: string
  category: string
  description: string
}

defineProps<{
  recipes: Recipe[]
}>()
</script>

<style scoped>
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.recipe-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.recipe-card:hover {
  transform: scale(1.02);
}

h2 {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

p {
  margin: 0.25rem 0;
  color: #555;
}
</style>
