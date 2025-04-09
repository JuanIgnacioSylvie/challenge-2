<template>
  <div class="bg-white w-full h-screen sm:h-auto sm:max-w-md sm:mx-auto sm:my-10 p-6 rounded-4xl">
    <h1 class="text-2xl font-bold text-center">Sign Up</h1>
    <p class="text-left text-xs text-gray-600 mt-2 p-2">Enter your phone number</p>
    <div class="mt-6 flex items-center">
      <div class="relative">
        <button type="button" class="border p-2 flex items-center justify-center" @click="toggleDropdown">
          <img :src="selectedCountry.flagPath" alt="Flag" class="w-6 h-6 mr-1" />
          <span class="text-xs text-gray-500">{{ selectedCountry.dialCode }}</span>
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul class="absolute z-10 w-28 bg-white border mt-1 max-h-48 overflow-auto text-gray-500 text-xs" v-if="isOpen">
          <li v-for="country in countries" :key="country.code" @click="selectCountry(country)" class="cursor-pointer p-2 flex items-center hover:bg-gray-100">
            <img :src="country.flagPath" alt="Flag" class="w-6 h-6 mr-1" />
            <span class="text-xs">{{ country.dialCode }}</span>
          </li>
        </ul>
      </div>
      <input type="tel" v-model="phoneNumber" @input="filterInput" class="border p-2 ml-2 flex-1 text-xs text-gray-50" placeholder="Phone number" />
    </div>
    <p class="text-xs text-gray-500 mt-1 p-2">We will send you a verification code to this number</p>
    <button
      :class="{'w-full py-3 rounded mt-6 focus:outline-none transition-colors': true, 'bg-gray-800 text-white hover:bg-gray-900': phoneNumber.length >= 4, 'bg-gray-400 text-white cursor-not-allowed': phoneNumber.length < 4}"
      :disabled="phoneNumber.length < 4"
      @click="submitPhone"
    >
      Sign Up
    </button>
    <div class="flex items-center my-6 py-5">
      <div class="flex-grow border-t border-gray-300"></div>
      <span class="mx-2 text-gray-500 text-xs px-5">OR</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>
    <div class="space-y-3">
      <SocialButton icon="apple" text="Sign up with Apple" />
      <SocialButton icon="google" text="Sign up with Google" />
      <SocialButton icon="facebook" text="Sign up with Facebook" />
      <SocialButton icon="email" text="Sign up with Email" />
    </div>
    <p class="text-center text-xs text-gray-500 mt-6 py-5">
      By continuing, you agree to Dishie's
      <a href="/" class="underline">Terms & Conditions</a> and
      <a href="/" class="underline">Privacy policy</a>
    </p>
    <p class="text-center text-xs mt-4 text-gray-500">
      Already user? <a href="/" class="underline text-black">Log in</a>
    </p>
    <p class="text-center text-xs mt-2 text-gray-500">
      Not ready to sign up? <a href="/" class="underline text-black font-bold">Guest Mode</a>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SocialButton from '@/components/SocialButton.vue'
const router = useRouter()
const isOpen = ref(false)
const phoneNumber = ref('')
const countries = ref([
  {
    code: 'AR',
    dialCode: '+54',
    flagPath: new URL('@/assets/flags/argentina-icon.png', import.meta.url).href,
  },
  {
    code: 'US',
    dialCode: '+1',
    flagPath: new URL('@/assets/flags/usa-icon.png', import.meta.url).href,
  },
  {
    code: 'FR',
    dialCode: '+33',
    flagPath: new URL('@/assets/flags/french-icon.png', import.meta.url).href,
  },
])
const selectedCountry = ref(countries.value[0])
function toggleDropdown() {
  isOpen.value = !isOpen.value
}
function selectCountry(country) {
  selectedCountry.value = country
  isOpen.value = false
}
const fullPhoneNumber = computed(() => selectedCountry.value.dialCode + phoneNumber.value)
function filterInput() {
  phoneNumber.value = phoneNumber.value.replace(/[^0-9]/g, '')
}
function submitPhone() {
  if (phoneNumber.value.length >= 4) {
    router.push({ path: '/second-wireframe', query: { phone: fullPhoneNumber.value } })
  }
}
</script>

<style scoped>
</style>
