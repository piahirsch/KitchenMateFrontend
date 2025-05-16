<template>
 <div class="app-container">
   <header class="app-header">
     <button type="button" @click="toggleTheme">
       Switch to {{ themeLabel }} mode
     </button>
   </header>
   <main class="main-content">
     <router-view />
   </main>
 </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';


console.log('App.vue loaded'); // Check script execution

const theme = ref<'light' | 'dark'>('light');
const themeLabel = computed(() => (theme.value === 'light' ? 'dark' : 'light'));

// Initialize from saved preference or system setting
const saved = localStorage.getItem('theme');
if (saved === 'light' || saved === 'dark') {
 theme.value = saved;
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
 theme.value = 'dark';
}

// Sync attribute and storage whenever theme changes
watch(theme, (newTheme) => {
 console.log('Applying theme via watcher:', newTheme);
 document.documentElement.className = newTheme;

 localStorage.setItem('theme', newTheme);
});

// Set initial theme on mount
onMounted(() => {
 console.log('Initial theme on mounted:', theme.value);
 document.documentElement.className = theme.value;
});

// Toggle function
function toggleTheme() {
 console.log('Button clicked. Toggling theme.');
 theme.value = theme.value === 'light' ? 'dark' : 'light';
}
</script>
