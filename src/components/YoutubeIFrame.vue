<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
  src: string;
  title: string;
}>();

const embeddedSrc = ref<string>(props.src.replace("watch?v=", "embed/"));
</script>

<template>
  <iframe
    :src="embeddedSrc"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>
