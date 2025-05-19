<template>
  <div class="home-container">
    <AppHeader
      :recipes="recipes"
      @add="handleAdd"
      @filter-category="filterByCategory"
    />
    <div class="content">
      <RecipeList :recipes="filteredRecipes" />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import RecipeList from "@/components/RecipeList.vue";
import AppFooter from "@/components/AppFooter.vue";

const recipes = ref([
  {
    id: 1,
    name: "Spaghetti Bolognese",
    difficultyLevel: "Easy",
    category: "Italian",
    description: "Creamy spaghetti with minced meat and tomato sauce.",
    link: "https://www.youtube.com/watch?v=vume4a9bf-A",
    steps: [
      "Sautee garlic and onion in a frying pan.",
      "Add minced meat, celery and carrots",
      "Add tomato sauce and let it simmer for 2-3 hours",
      "Boil your spaghetti as instructed on the box",
      "Combine pasta and sauce and enjoy!",
    ],
  },
  {
    id: 2,
    name: "Pad Thai",
    difficultyLevel: "Intermediate",
    category: "Asian",
    description:
      "Noodle stir-fry with a sweet-savoury-sour sauce scattered with crushed peanuts",
    steps: [
      "Cook noodles. After, rinse with cold water.",
      "Make your sauce and set it aside.",
      "Add a tablespoon of oil to your wok and add the shrimp, chicken or tofu, garlic and bell pepper",
      "Scramble your eggs directly in the pan.",
      "Add noodles, sauce, bean sprouts and peanuts to the wok",
      "Garnish with green onion, peanuts and cilantro.",
    ],
  },
  {
    id: 3,
    name: "Pizza",
    difficultyLevel: "Easy",
    category: "Italian",
    description: "Original neapilotan pepperoni pizza.",
    link: "https://www.youtube.com/watch?v=sv3TXMSv6Lw",
    steps: [
      "Prepare your dough and let it rise",
      "Add your tomato sauce and mozzarella and bake",
      "Add your salami or othe rtoppings and bake again",
    ],
  },
  {
    id: 4,
    name: "Hummus bowl",
    difficultyLevel: "Easy",
    category: "Oriental",
    description: "Couscous bowl with falafel, veggies and homemade hummus.",
    steps: [
      "Prepare your couscous and set aside.",
      "Chop your veggies of choice and add to the bowl",
      "Fry your falafel and add your hummus on top.",
    ],
  },
]);

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
