<template>
  <div class="recipe-list">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
      @delete="emit('delete', recipe.id)"
      @edit="emit('edit', recipe)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import RecipeCard from "./RecipeCard.vue";
import type { Recipe } from "@/types/recipe";

const props = defineProps<{
  recipes: Recipe[];
  expandedId?: number;
}>();

const emit = defineEmits<{
  (e: "edit", recipe: Recipe): void;
  (e: "delete", id: number): void;
}>();
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
}
</style>
