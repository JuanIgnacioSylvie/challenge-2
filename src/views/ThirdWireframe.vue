<template>
    <div class="bg-white w-full sm:max-w-md sm:mx-auto sm:my-10 p-6 rounded-4xl">
      <div class="relative flex items-center justify-center">
        <button @click="goBack" class="absolute left-0">
          <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1 class="text-2xl">Add your password</h1>
      </div>
      <p class="text-xs text-gray-600 mt-4 pb-1 pt-4">Password</p>
      <div class="relative mt-6">
        <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" class="w-full h-12 border border-gray-400 rounded-lg text-xs pr-10 pl-2"/>
        <button @click="toggleShowPassword" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <svg v-if="showPassword" class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10C2 7.386 2.277 6.071 2.775 4.875M9.88 9.88a3 3 0 104.242 4.242"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l5 5m-5-5l-5-5"/>
          </svg>
          <svg v-else class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-10.084-7z"/>
          </svg>
        </button>
      </div>
      <p class="text-xs text-gray-600 mt-2">Must be 8 or more characters and contain at least 1 number and special character</p>
      <div class="py-20">
        <button :class="{'w-full py-3 rounded mt-6 focus:outline-none transition-colors': true, 'bg-gray-800 text-white hover:bg-gray-900': isPasswordValid, 'bg-gray-400 text-white cursor-not-allowed': !isPasswordValid}" :disabled="!isPasswordValid">
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const password = ref('')
  const showPassword = ref(false)
  function toggleShowPassword() {
    showPassword.value = !showPassword.value
  }
  function goBack() {
    router.push('/second-wireframe')
  }
  const isPasswordValid = computed(() => {
    const regex = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
    return regex.test(password.value)
  })
  </script>
  
  <style scoped>
  </style>
  