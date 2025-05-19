<template>
  <div class="recipe-card" :class="{ expanded }" @click="toggleExpanded">
    <YoutubeIFrame v-if="recipe.link" :src="recipe.link" title="Recipe Video" />
    <h2>{{ recipe.name }}</h2>
    <p><strong>Category:</strong> {{ recipe.category }}</p>
    <p><strong>Level:</strong> {{ recipe.difficultyLevel }}</p>
    <p>{{ recipe.description }}</p>

    <!-- Steps only visible if expanded -->
    <div v-if="expanded" class="details" @click.stop>
      <ul>
        <li v-for="(step, index) in recipe.steps" :key="index">
          <label>
            <input type="checkbox" v-model="checkedSteps[index]" />
            {{ step }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import YoutubeIFrame from "./YoutubeIFrame.vue";

const props = defineProps<{
  recipe: {
    id: number;
    name: string;
    difficultyLevel: string;
    category: string;
    description: string;
    steps: string[];
    link?: string;
  };
}>();

// Expanded toggle state
const expanded = ref(false);

// Persist checkbox states in localStorage (per recipe)
const storageKey = `recipe-${props.recipe.id}-checked`;
const saved = localStorage.getItem(storageKey);
const checkedSteps = ref<boolean[]>(
  saved ? JSON.parse(saved) : props.recipe.steps.map(() => false)
);

// Save changes to localStorage
watch(
  checkedSteps,
  (val) => {
    localStorage.setItem(storageKey, JSON.stringify(val));
  },
  { deep: true }
);

function toggleExpanded() {
  expanded.value = !expanded.value;
}
</script>

<style scoped>
.recipe-card {
  width: 300px;
  min-height: 250px;
  max-height: fit-content;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.recipe-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.details {
  margin-top: 1rem;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
}
</style>
