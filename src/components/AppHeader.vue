<template>
    <header class="header">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <h1 class="title">KitchenMate</h1>
    </header>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    height: 60px;
    margin-right: 1rem;
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }
  </style>
  