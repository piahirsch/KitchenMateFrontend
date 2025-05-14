<template>
  <div class="recipe-grid">
    <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
      <h2>{{ recipe.name }}</h2>
      <p><strong>Level:</strong> {{ recipe.difficultyLevel }}</p>
      <p><strong>Category:</strong> {{ recipe.category }}</p>
      <p>{{ recipe.description }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">


defineProps<{
  recipes: {
    id: number
    name: string
    difficultyLevel: string
    category: string
    description: string
  }[]
}>()
</script>

<style scoped>
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
}

.recipe-card {
  width: 250px;
  height: 200px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
</style>
