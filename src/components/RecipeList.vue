<template>
  <div class="recipe-list">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
      @toggle="emit('toggle', recipe.id)"
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
  (e: "toggle", id: number): void;
}>();
</script>

<style scoped>
.recipe-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
</style>
