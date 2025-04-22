<template>
    <button
      @click="emit('click')"
      class="absolute left-0 p-2"
    >
      <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
  </script>
  