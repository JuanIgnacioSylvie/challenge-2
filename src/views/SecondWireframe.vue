<template>
    <div class="bg-white w-full sm:max-w-md sm:mx-auto sm:my-10 p-6 rounded-4xl h-[40rem]">
      <div class="relative flex items-center justify-center">
        <button @click="goBack" class="absolute left-0">
          <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 class="text-2xl">Verify your mobile number</h1>
      </div>
      <p class="text-xs text-gray-600 mt-4 pb-1 pt-4">
        Please enter the code we sent to <span style="font-weight: 600;">{{ phone }}</span>
      </p>
      <div class="mt-6 flex place-content-center">
        <div class="p-1">
          <input
            v-model="code1"
            ref="input1"
            type="tel"
            maxlength="1"
            @keypress="onlyNumbers"
            @input="moveFocus($event, input2)"
            class="w-20 h-12 border border-gray-400 rounded-lg text-center text-xl"
          />
        </div>
        <div class="p-1">
          <input
            v-model="code2"
            ref="input2"
            type="tel"
            maxlength="1"
            @keypress="onlyNumbers"
            @input="moveFocus($event, input3)"
            class="w-20 h-12 border border-gray-400 rounded-lg text-center text-xl"
          />
        </div>
        <div class="p-1">
          <input
            v-model="code3"
            ref="input3"
            type="tel"
            maxlength="1"
            @keypress="onlyNumbers"
            @input="moveFocus($event, input4)"
            class="w-20 h-12 border border-gray-400 rounded-lg text-center text-xl"
          />
        </div>
        <div class="p-1">
          <input
            v-model="code4"
            ref="input4"
            type="tel"
            maxlength="1"
            @keypress="onlyNumbers"
            class="w-20 h-12 border border-gray-400 rounded-lg text-center text-xl"
          />
        </div>
      </div>
      <div class="py-20">
        <div class="py-2">
          <button
            :class="{
              'w-full py-3 rounded mt-6 focus:outline-none transition-colors': true,
              'bg-gray-800 text-white hover:bg-gray-900': isCodeComplete,
              'bg-gray-400 text-white cursor-not-allowed': !isCodeComplete
            }"
            :disabled="!isCodeComplete"
            @click="goContinue"
          >
            Continue
          </button>
        </div>
        <button
          @click="resendCode"
          :disabled="counter > 0"
          class="w-full py-3 rounded mt-6 focus:outline-none transition-colors"
          :class="{
            'bg-gray-400 text-white cursor-not-allowed': counter > 0,
            'bg-gray-100 text-gray-900 hover:bg-gray-400': counter === 0
          }"
        >
          Resend verification code<span v-if="counter > 0"> (00:{{ counter < 10 ? '0' + counter : counter }})</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const router = useRouter()
  const route = useRoute()
  const phone = route.query.phone || ''
  const code1 = ref('')
  const code2 = ref('')
  const code3 = ref('')
  const code4 = ref('')
  const input1 = ref(null)
  const input2 = ref(null)
  const input3 = ref(null)
  const input4 = ref(null)
  const isCodeComplete = computed(() => code1.value && code2.value && code3.value && code4.value)
  
  function goBack() {
    router.push('/first-wireframe')
  }
  
  function goContinue() {
    router.push('/third-wireframe')
  }
  
  const counter = ref(59)
  let timerInterval = null
  
  function startTimer() {
    counter.value = 59
    timerInterval = setInterval(() => {
      if (counter.value > 0) {
        counter.value--
      } else {
        clearInterval(timerInterval)
        timerInterval = null
      }
    }, 1000)
  }
  
  function resendCode() {
    if (timerInterval) {
      clearInterval(timerInterval)
    }
    startTimer()
  }
  
  function onlyNumbers(e) {
    const char = String.fromCharCode(e.which)
    if (!/^\d$/.test(char)) {
      e.preventDefault()
    }
  }
  
  function moveFocus(e, nextInput) {
    if (e.target.value.length === e.target.maxLength && nextInput && nextInput.value) {
      nextInput.value.focus()
    }
  }
  
  onMounted(() => {
    startTimer()
  })
  
  onBeforeUnmount(() => {
    if (timerInterval) {
      clearInterval(timerInterval)
    }
  })
  </script>
  
  <style scoped>
  </style>
  