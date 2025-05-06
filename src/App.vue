<template>
  <div>
    <h1>Rezepte</h1>
    <RecipeList :recipes="recipes" />
  </div>
</template>

<script>
import RecipeList from './components/RecipeList.vue'

export default {
  name: 'App',
  components: {
    RecipeList
  },
  data() {
    return {
      recipes: [
      { id: 1, name: 'Feta Pasta', category: 'Trending', description: 'Creamy feta with tomatoes and pasta', instructions: '1. Put feta in the baking dish, add tomatoes, olive oil and seasonings. 2. Put it in the oven at 200°C for 30-40min. 3. Cook your pasta of choice following the box instructions. 4. Combine.', difficultyLevel: 'Easy' },
      { id: 2, name: 'Pad Thai', category: 'Asian', description: 'Noodle stir-fry with a sweet-savoury-sour sauce scattered with crushed peanuts', instructions: '1. Soak noodles for 5mins.\n2. Mix the sauce in a small bowl.\n 3. Cook the chicken with onion and garlic.\n 4. Pour an egg into the pan and scramble.\n 5. Add your veggies, peanuts, noodles and sauce.\n 6. Enjoy', difficultyLevel: 'Easy' }
      ]
    }
  }
}
</script>
