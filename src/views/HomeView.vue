<template>
  <div class="home-container">
    <AppHeader
      :recipes="recipes"
      @add="handleAdd"
      @filter-category="filterByCategory"
    />
    <div class="content">
      <RecipeList v-if="filteredRecipes.length > 0" :recipes="filteredRecipes" />
      <div v-else>
        <h2>No recipes found</h2>
        <p>Try adding a new recipe or category.</p>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import RecipeList from "@/components/RecipeList.vue";
import AppFooter from "@/components/AppFooter.vue";
import { client } from "@/lib/axios";
import type { Recipe } from "@/types/recipe";

const recipes = ref<Recipe[]>([]);

onMounted(async () => {
  const response = await client.get("https://kitchenmate-backend.onrender.com/recipes");
  console.log("Fetched recipes:", response.data);
  recipes.value = response.data;
});

const selectedCategory = ref<string | null>(null);

const filteredRecipes = computed(() => {
  if (!selectedCategory.value) return recipes.value;
  return recipes.value.filter((r) => r.category === selectedCategory.value);
});

function handleAdd(type: "recipe" | "category") {
  if (type === "recipe") {
    console.log("Recipe");
  } else {
    console.log("Category");
  }
}

function filterByCategory(category: string | null) {
  selectedCategory.value = category;
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>