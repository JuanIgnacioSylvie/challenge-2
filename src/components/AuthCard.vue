<template>
    <div
      class="bg-white w-full sm:max-w-md sm:mx-auto sm:my-10 p-8 rounded-4xl
             min-w-[20rem] min-h-[24rem] sm:min-h-[40rem]"
      :class="extraClasses"
    >
      <slot/>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ extraClasses?: string }>()
  </script>
  