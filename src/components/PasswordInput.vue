<template>
    <div class="relative mt-6">
      <input
        :type="show ? 'text' : 'password'"
        v-model="innerValue"
        class="w-full h-12 border border-gray-400 rounded-lg text-xs pr-10 pl-2"
        placeholder="Password"
      />
      <button
        type="button"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        @click="show = !show"
      >
        <svg v-if="show" class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <!-- ojo abierto -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10..."/>
        </svg>
        <svg v-else class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <!-- ojo tachado -->
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478..."/>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps, defineEmits } from 'vue'
  
  const props = defineProps<{ modelValue: string }>()
  
  const emit = defineEmits<{
    (e: 'update:modelValue', v: string): void
  }>()
  
  const innerValue = ref(props.modelValue)
  const show = ref(false)
  
  watch(innerValue, v => emit('update:modelValue', v))
  </script>
  