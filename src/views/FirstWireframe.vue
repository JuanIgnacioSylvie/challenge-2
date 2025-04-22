<template>
  <div class="bg-gray-100 min-h-screen flex justify-center pt-12">
    <div class="bg-white w-full max-w-md rounded-[40px] shadow-md overflow-hidden">
      
      <!-- barra superior / título -->
      <div class="h-12 flex items-center justify-center border-b border-gray-200">
        <h1 class="text-base font-semibold text-black">Sign up</h1>
      </div>
      
      <!-- contenido -->
      <div class="px-6 py-8">
        <!-- etiqueta -->
        <p class="text-sm text-gray-700 pb-4">
          Enter your phone number
        </p>

        <!-- selector país + input -->
        <div class="flex space-x-3 pb-4">
          <CountrySelect
            v-model="selectedCountry"
            :options="countries"
            class="border border-gray-300 rounded-lg h-10"
          />
          <input
            type="tel"
            v-model="phoneNumber"
            @input="phoneNumber = phoneNumber.replace(/[^0-9]/g,'')"
            class="flex-1 h-10 border border-gray-300 rounded-lg pl-3 text-sm placeholder-gray-400"
            placeholder="Phone number"
          />
        </div>

        <!-- nota -->
        <p class="text-xs text-gray-500 pb-6">
          We will send you a verification code to this number.
        </p>

        <!-- botón principal -->
        <button
          :disabled="phoneNumber.length < 4"
          @click="submitPhone"
          :class="phoneNumber.length < 4
            ? 'w-full h-11 bg-gray-400 rounded-lg text-base font-medium text-white cursor-not-allowed mb-8'
            : 'w-full h-11 bg-gray-500 rounded-lg text-base font-medium text-white hover:bg-gray-600 mb-8'"
        >
          Sign up
        </button>

        <!-- separador OR -->
        <div class="flex items-center p-8">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-3 text-xs text-gray-400">OR</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <!-- botones sociales -->
        <div class="space-y-2 pb-8">
          <SocialButton icon="apple"    text="Sign up with Apple"    />
          <SocialButton icon="google"   text="Sign up with Google"   />
          <SocialButton icon="facebook" text="Sign up with Facebook" />
          <SocialButton icon="email"    text="Sign up with Email"    />
        </div>

        <!-- términos -->
        <p class="text-xs text-gray-500 text-center pb-4">
          By continuing, you agree to the Dishie’s
          <a href="#" class="underline text-gray-700">Terms & Conditions</a>
          and
          <a href="#" class="underline text-gray-700">Privacy policy</a>.
        </p>

        <!-- footer links -->
        <div class="text-center text-xs text-gray-700 space-y-1">
          <p>
            Already a user?
            <a @click="goLogin" class="underline text-blue-600">Log in</a>
          </p>
          <p>
            Not ready to sign up?
            <a @click="goGuest" class="underline text-blue-600">Guest mode</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CountrySelect from '@/components/CountrySelect.vue'
import SocialButton  from '@/components/SocialButton.vue'

interface Country {
  code: string
  dialCode: string
  flagPath: string
}

const router = useRouter()

const countries = ref<Country[]>([
  { code: 'AR', dialCode: '+54', flagPath: new URL('@/assets/flags/argentina-icon.png', import.meta.url).href },
  { code: 'FR', dialCode: '+33', flagPath: new URL('@/assets/flags/french-icon.png',    import.meta.url).href },
  { code: 'IL', dialCode: '+972',flagPath:new URL('@/assets/flags/israel-icon.png',        import.meta.url).href },
  { code: 'US', dialCode: '+1', flagPath: new URL('@/assets/flags/usa-icon.png',           import.meta.url).href },
])

const selectedCountry = ref(countries.value[0])
const phoneNumber     = ref('')

function submitPhone() {
  if (phoneNumber.value.length >= 4) {
    const full = selectedCountry.value.dialCode + phoneNumber.value
    router.push({ path: '/second-wireframe', query: { phone: full } })
  }
}

function goLogin() {
  router.push('/login')
}

function goGuest() {
  router.push('/guest-mode')
}
</script>
