<template>
  <header class="header">
    <div class="logo-title">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1>KitchenMate</h1>
    </div>

    <nav class="nav">
      <!-- Add-Dropdown -->
      <div class="dropdown" @click="toggleDropdown">
        <button class="add-button">New +</button>
        <div class="dropdown-menu" v-if="showDropdown">
          <button @click="emitAdd('recipe')">New recipe</button>
          <button @click="emitAdd('category')">New category</button>
        </div>
      </div>

      <!-- Kategorien -->
      <ul class="category-list">
        <li
          v-for="category in uniqueCategories"
          :key="category"
          @click="$emit('filter-category', category)"
        >
          {{ category }}
        </li>
        <li @click="$emit('filter-category', null)" class="all-categories">
          All
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  recipes: Array<{ id: number; name: string; category: string }>
}>()

const showDropdown = ref(false)

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function emitAdd(type: 'recipe' | 'category') {
  showDropdown.value = false
  emit('add', type)
}

const emit = defineEmits(['add', 'filter-category'])

const uniqueCategories = computed(() => {
  const all = props.recipes.map((r) => r.category)
  return Array.from(new Set(all))
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0);
  padding: 1rem 2rem;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 60px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.dropdown {
  position: relative;
}

.add-button {
  background-color: #8dd3f3;
  color: rgb(0, 0, 0);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  left: 0;
  background: white;
  color: black;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
  min-width: 160px;
}

.dropdown-menu button {
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.dropdown-menu button:hover {
  background-color: #f0f0f0;
}

.category-list {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.category-list li {
  cursor: pointer;
  font-weight: 500;
}

.all-categories {
  font-style: italic;
  text-decoration: underline;
}
</style>

  