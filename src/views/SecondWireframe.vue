<template>
  <AuthCard>
    <!-- HEADER + BACK -->
    <div class="relative flex items-center justify-center py-2 pb-6">
      <BackButton @click="goBack" />
      <h1 class="text-center text-xl font-semibold px-6">
        Verify your mobile number
      </h1>
    </div>

    <!-- SUBTÍTULO -->
    <p class="text-left text-xs text-gray-700 pb-4">
      Please enter the code we sent to 
      <span class="font-semibold">{{ phone }}</span>
    </p>

    <!-- OTP FIELDS -->
    <OTPInput v-model="code" @complete="goContinue" />
    <div class="h-10"></div>

    <!-- BOTÓN CONTINUE -->
    <button
      :disabled="!isCodeComplete"
      @click="goContinue"
      :class="isCodeComplete
        ? 'w-full h-10 bg-gray-500 rounded-lg text-white text-sm mt-6'
        : 'w-full h-10 bg-gray-400 rounded-lg text-white text-sm mt-6 cursor-not-allowed'"
    >
      Continue
    </button>
    <div class="h-1"></div>
    <!-- BOTÓN RESEND -->
    <button
      @click="resendCode"
      class="w-full h-10 border border-gray-400 rounded-lg text-gray-700 text-sm mt-4"
    >
      Resend verification code
    </button>
  </AuthCard>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import AuthCard   from '@/components/AuthCard.vue'
import BackButton from '@/components/BackButton.vue'
import OTPInput   from '@/components/OTPInput.vue'

const router = useRouter()
const route  = useRoute()
const phone  = (route.query.phone as string) || ''

const code = ref('')
const isCodeComplete = computed(() => code.value.length === 4)

let counter = ref(59)
let timer: ReturnType<typeof setInterval> | null = null

function startTimer() {
  counter.value = 59
  timer = setInterval(() => {
    if (counter.value > 0) counter.value--
    else clearInterval(timer!)
  }, 1000)
}

function resendCode() {
  // reinicia el contador (si hicieras algo extra, va aquí)
  clearInterval(timer!)
  startTimer()
}

function goBack() {
  router.push('/first-wireframe')
}

function goContinue() {
  if (isCodeComplete.value) {
    router.push('/third-wireframe')
  }
}

onMounted(startTimer)
onBeforeUnmount(() => clearInterval(timer!))
</script>
