<template>
    <div class="mt-6 flex justify-center space-x-6">
      <input
        v-for="i in length"
        :key="i"
        ref="inputs"
        type="text"
        maxlength="1"
        class="min-w-[3rem] h-12 border border-gray-400 rounded-lg text-center text-lg"
        v-model="digits[i-1]"
        @input="onInput(i-1)"
        @keydown.backspace="onBackspace(i-1)"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps, defineEmits, nextTick, onMounted } from 'vue'
  
  const props = defineProps<{ modelValue: string; length?: number }>()
  const emit = defineEmits<{
    (e: 'update:modelValue', val: string): void
    (e: 'complete', val: string): void
  }>()
  
  const length = props.length ?? 4
  const digits = ref<string[]>(Array(length).fill(''))
  const inputs = ref<HTMLInputElement[]>([])
  
  watch(() => props.modelValue, v => {
    digits.value = v.split('').concat(Array(length).fill('')).slice(0, length)
  })
  
  function onInput(idx: number) {
    digits.value[idx] = digits.value[idx].replace(/[^0-9]/g, '')
    const val = digits.value.join('')
    emit('update:modelValue', val)
    if (val.length === length) emit('complete', val)
    if (digits.value[idx] && idx < length - 1) {
      nextTick(() => inputs.value[idx + 1]?.focus())
    }
  }
  
  // Eliminado el parámetro `e` porque no se usa
  function onBackspace(idx: number) {
    if (!digits.value[idx] && idx > 0) {
      nextTick(() => inputs.value[idx - 1]?.focus())
    }
    digits.value[idx] = ''
    emit('update:modelValue', digits.value.join(''))
  }
  
  onMounted(() => {
    // Si necesitas capturar refs manualmente, hazlo aquí
  })
  </script>
  