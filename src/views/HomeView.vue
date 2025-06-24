<template>
  <div class="home-container">
    <AppHeader
      :recipes="recipes"
      @add="openModal"
      @filter-category="filterByCategory"
    />
    <div class="content">
      <RecipeList
          :recipes="filteredRecipes"
          @edit="handleEditRecipe"
          @delete="handleDeleteRecipe"
          />
    </div>
    <NewRecipeForm
        v-if="isModalOpen"
        :edit-recipe="recipeToEdit"
        @close="closeModal"
        @added="handleRecipeAdded"
    />

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import RecipeList from "@/components/RecipeList.vue";
import NewRecipeForm from "@/components/NewRecipeForm.vue";
import AppFooter from "@/components/AppFooter.vue";
import { client } from "@/lib/axios";
import type { Recipe } from "@/types/recipe";

const recipes = ref<Recipe[]>([]);
const selectedCategory = ref<string | null>(null);
const isModalOpen = ref(false);
const recipeToEdit = ref<Recipe | null>(null);


const fetchRecipes = async () => {
  try {
    const response = await client.get("/recipes");
    recipes.value = response.data;
  } catch (err) {
    console.error("Error fetching recipes:", err);
  }
};

onMounted(fetchRecipes);

const filteredRecipes = computed(() => {
  if (!selectedCategory.value) return recipes.value;
  return recipes.value.filter((r) => r.category === selectedCategory.value);
});

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  recipeToEdit.value = null;
}

function handleRecipeAdded() {
  fetchRecipes();
  closeModal();
}

function handleEditRecipe(recipe: Recipe) {
  recipeToEdit.value = recipe;
  isModalOpen.value = true;
}

async function handleDeleteRecipe(id: number) {
  try {
    await client.delete(`/recipes/${id}`);
    fetchRecipes(); // Liste neu laden
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
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
  padding: 2rem;
}
</style>