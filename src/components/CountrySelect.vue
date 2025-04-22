<template>
    <div class="relative inline-block">
      <button
        type="button"
        class="border p-2 flex items-center justify-center rounded-lg"
        @click="open = !open"
      >
        <img :src="modelValue.flagPath" alt="Flag" class="w-6 h-6 mr-1"/>
        <span class="text-xs text-gray-500">{{ modelValue.dialCode }}</span>
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <ul
        v-if="open"
        class="absolute z-10 w-28 bg-white border mt-1 max-h-48 overflow-auto text-gray-500 text-xs rounded-lg shadow-sm"
      >
        <li
          v-for="opt in options"
          :key="opt.code"
          @click="select(opt)"
          class="cursor-pointer p-2 flex items-center hover:bg-gray-100"
        >
          <img :src="opt.flagPath" alt="Flag" class="w-6 h-6 mr-1"/>
          <span class="text-xs">{{ opt.dialCode }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits, defineProps } from 'vue'
  
  interface Country {
    code:     string
    dialCode: string
    flagPath: string
  }
  
  // Desestructuramos props para no dejar variables sin usar
  const { options, modelValue } = defineProps<{
    options: Country[]
    modelValue: Country
  }>()
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: Country): void
  }>()
  
  const open = ref(false)
  
  function select(c: Country) {
    emit('update:modelValue', c)
    open.value = false
  }
  </script>
  