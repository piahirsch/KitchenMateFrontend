<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue'

const recipes = [
  { id: 1, name: 'Feta Pasta', category: 'Trending', description: 'Creamy feta with tomatoes and pasta', instructions: '1. Put feta in the baking dish, add tomatoes, olive oil and seasonings. 2. Put it in the oven at 200°C for 30-40min. 3. Cook your pasta of choice following the box instructions. 4. Combine.', difficultyLevel: 'Easy' },
  { id: 2, name: 'Pad Thai', category: 'Asian', description: 'Noodle stir-fry with a sweet-savoury-sour sauce scattered with crushed peanuts', instructions: 'Soak noodles for 5mins. 2. Mix the sauce in a small bowl. 3. Cook the chicken with onion and garlic. 4. Pour an egg into the pan and scramble. 6. Add your veggies, peanuts, noodles and sauce. 7. Enjoy', difficultyLevel: 'Easy' }
]
</script>

<template>
  <main>
    <h1>Rezepte</h1>
    <RecipeList :recipes="recipes" />
  </main>
</template>
