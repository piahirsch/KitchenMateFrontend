<template>
  <div class="recipe-list">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
      :expanded="expandedId === recipe.id"
      @toggle="emit('toggle', recipe.id)"
    />
  </div>
</template>

<script setup lang="ts">
import RecipeCard from './RecipeCard.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  recipes: {
    id: number
    name: string
    difficultyLevel: string
    category: string
    description: string
    steps: string[]
  }[]
  expandedId: number | null
}>()

const emit = defineEmits<{
  (e: 'toggle', id: number): void
}>()
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
