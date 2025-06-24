<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>{{ form.id ? "Edit Recipe" : "Add New Recipe" }}</h2>
      <form @submit.prevent="submitForm" class="form">
        <label>
          Name:
          <input v-model="form.name" type="text" required />
        </label>

        <label>
          Beschreibung:
          <textarea v-model="form.description" required></textarea>
        </label>

        <label>
          Kategorie:
          <input v-model="form.category" type="text" required />
        </label>

        <label>
          Schwierigkeitsgrad:
          <input v-model="form.difficultyLevel" type="text" required />
        </label>

        <label>
          YouTube Link:
          <input v-model="form.link" type="text" />
        </label>

        <label>
          Schritte (kommagetrennt):
          <textarea v-model="form.steps"></textarea>
        </label>

        <label>
          Zutaten (kommagetrennt):
          <textarea v-model="form.ingredients"></textarea>
        </label>

        <div class="buttons">
          <button type="submit">Speichern</button>
          <button type="button" @click="closeForm">Abbrechen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from "vue";
import { client } from "@/lib/axios";
import type { Recipe } from "@/types/recipe";

const emit = defineEmits(["close", "added"]);

const props = defineProps<{
  editRecipe?: Recipe | null;
}>();

const form = ref({
  id: undefined as number | undefined,
  name: "",
  description: "",
  category: "",
  difficultyLevel: "",
  link: "",
  steps: "",
  ingredients: "",
});

function resetForm() {
  form.value = {
    id: undefined,
    name: "",
    description: "",
    category: "",
    difficultyLevel: "",
    link: "",
    steps: "",
    ingredients: "",
  };
}

// Wenn editRecipe sich ändert, fülle Formular mit den Daten oder reset
watch(
  () => props.editRecipe,
  (newRecipe) => {
    if (newRecipe) {
      form.value = {
        id: newRecipe.id,
        name: newRecipe.name,
        description: newRecipe.description,
        category: newRecipe.category,
        difficultyLevel: newRecipe.difficultyLevel,
        link: newRecipe.link || "",
        steps: newRecipe.steps.join(", "),
        ingredients: newRecipe.ingredients.join(", "),
      };
    } else {
      resetForm();
    }
  },
  { immediate: true }
);

async function submitForm() {
  try {
    const payload = {
      name: form.value.name,
      description: form.value.description,
      category: form.value.category,
      difficultyLevel: form.value.difficultyLevel,
      link: form.value.link,
      steps: form.value.steps
        ? form.value.steps.split(",").map((s) => s.trim())
        : [],
      ingredients: form.value.ingredients
        ? form.value.ingredients.split(",").map((s) => s.trim())
        : [],
    };

    if (form.value.id) {
      // PUT Request zum Aktualisieren
      await client.put(`/recipes/${form.value.id}`, payload);
    } else {
      // POST Request zum Erstellen
      await client.post("/recipes", payload);
    }

    emit("added");
    closeForm();
  } catch (error) {
    console.error("Error submitting recipe:", error);
    alert("Fehler beim Speichern des Rezepts.");
  }
}

function closeForm() {
  resetForm();
  emit("close");
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 75%;
  max-width: 1000px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  max-height: 90vh;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
}
</style>
