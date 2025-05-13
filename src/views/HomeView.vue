<template>
  <div>
    <AppHeader
      :recipes="recipes"
      @add="handleAdd"
      @filter-category="filterByCategory"
    />
    <RecipeList :recipes="filteredRecipes" />
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import RecipeList from '@/components/RecipeList.vue'
import AppFooter from '@/components/AppFooter.vue'

const recipes = ref([
  { id: 1, name: 'Spaghetti Bolognese', difficultyLevel: 'Easy', category: 'Italian', description: 'Creamy spaghetti with meatballs and tomato sauce.' },
  { id: 2, name: 'Pad Thai', difficultyLevel: 'Intermediate', category: 'Asian', description: 'Noodle stir-fry with a sweet-savoury-sour sauce scattered with crushed peanuts' },
  { id: 3, name: 'Pizza', difficultyLevel: 'Easy', category: 'Italian', description: 'Original neapilotan pepperoni pizza.' },
  { id: 4, name: 'Hummus bowl', difficultyLevel: 'Easy', category: 'Oriental', description: 'Couscous bowl with falafel, veggies and homemade hummus.'}
])

const selectedCategory = ref<string | null>(null)

const filteredRecipes = computed(() => {
  if (!selectedCategory.value) return recipes.value
  return recipes.value.filter(
    (r) => r.category === selectedCategory.value
  )
})

function handleAdd(type: 'recipe' | 'category') {
  if (type === 'recipe') {
    console.log('Recipe')
    // z. B. Modal öffnen
  } else {
    console.log('Category')
  }
}

function filterByCategory(category: string | null) {
  selectedCategory.value = category
}
</script>
