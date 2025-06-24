<template>
  <div class="recipe-card" :class="{ expanded }" @click="toggleExpanded">
    <div class="card-header">
      <div class="menu">
        <button @click.stop="toggleMenu">⋮</button>
        <div v-if="menuOpen" class="dropdown" @click.stop>
          <div @click="editRecipe">Bearbeiten</div>
          <div @click="confirmDelete">Löschen</div>
        </div>
      </div>
    </div>

    <YoutubeIFrame v-if="recipe.link" :src="recipe.link" title="Recipe Video" />
    <h2>{{ recipe.name }}</h2>
    <p><strong>Category:</strong> {{ recipe.category }}</p>
    <p><strong>Level:</strong> {{ recipe.difficultyLevel }}</p>
    <p>{{ recipe.description }}</p>

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

    <!-- Lösch-Bestätigung -->
    <div v-if="showConfirm" class="modal">
      <div class="modal-box">
        <p>Möchtest du das Rezept wirklich löschen?</p>
        <button @click="deleteRecipe">Ja, löschen</button>
        <button @click="showConfirm = false">Abbrechen</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";
import YoutubeIFrame from "./YoutubeIFrame.vue";
import type { Recipe } from "@/types/recipe";

const props = defineProps<{ recipe: Recipe }>();

const emit = defineEmits<{
  (e: "delete", id: number): void;
  (e: "edit", recipe: Recipe): void;
}>();

const expanded = ref(false);
const menuOpen = ref(false);
const showConfirm = ref(false);

const storageKey = `recipe-${props.recipe.id}-checked`;
const saved = localStorage.getItem(storageKey);
const checkedSteps = ref<boolean[]>(
    saved ? JSON.parse(saved) : props.recipe.steps.map(() => false)
);

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

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function confirmDelete() {
  menuOpen.value = false;
  showConfirm.value = true;
}

function deleteRecipe() {
  emit("delete", props.recipe.id);
  showConfirm.value = false;
}

function editRecipe() {
  emit("edit", props.recipe);
  menuOpen.value = false;
}
</script>

<style scoped>
.recipe-card {
  position: relative;
  width: 300px;
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

.card-header {
  position: absolute;
  top: 10px;
  right: 10px;
}

.menu {
  position: relative;
}

.menu button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 1.8rem;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 120px;
}

.dropdown div {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown div:hover {
  background: white;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}
</style>
