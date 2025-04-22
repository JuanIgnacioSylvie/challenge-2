<!-- src/views/ThirdWireframe.vue -->
<template>
  <AuthCard>
    <!-- HEADER + BACK -->
    <div class="relative flex items-center justify-center py-2 pb-6">
      <BackButton @click="goBack" />
      <h1 class="text-center text-xl font-semibold px-6">
        Add your password
      </h1>
    </div>

    <!-- LABEL -->
    <p class="text-left text-sm text-gray-700 pb-2">
      Password
    </p>

    <!-- INPUT -->
    <PasswordInput v-model="password" placeholder="Password" />

    <!-- HELP TEXT -->
    <p class="text-xs text-gray-500 mt-1 pb-6">
      Must be 8 or more characters and contain at least 1 number and 1 special character
    </p>

    <!-- BOTÓN CONTINUE -->
    <button
      :disabled="!isPasswordValid"
      @click="submitPassword"
      :class="isPasswordValid
        ? 'w-full h-10 bg-gray-500 rounded-lg text-white text-sm'
        : 'w-full h-10 bg-gray-400 rounded-lg text-white text-sm cursor-not-allowed'"
    >
      Continue
    </button>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import AuthCard      from '@/components/AuthCard.vue'
import BackButton    from '@/components/BackButton.vue'
import PasswordInput from '@/components/PasswordInput.vue'

const router   = useRouter()
const password = ref('')

const isPasswordValid = computed(() => {
  // Al menos 8 chars, un número y un carácter especial
  const rx = /^(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
  return rx.test(password.value)
})

function submitPassword() {
  if (isPasswordValid.value) {
    router.push('/dashboard')
  }
}
function goBack() {
  router.push('/second-wireframe')
}
</script>
