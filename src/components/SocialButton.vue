<template>
  <div class="p-1">
    <button
      class="relative w-full border py-3 rounded bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none flex items-center justify-center"
      @click="$emit('click')"
    >
      <span class="absolute left-2 top-1/2 transform -translate-y-1/2">
        <img
          v-if="icon === 'apple'"
          src="@/assets/icons/apple-icon.png"
          alt="Apple"
          class="h-5 w-5"
        />
        <img
          v-else-if="icon === 'google'"
          src="@/assets/icons/google-icon.svg"
          alt="Google"
          class="h-5 w-5"
        />
        <img
          v-else-if="icon === 'facebook'"
          src="@/assets/icons/facebook-icon.png"
          alt="Facebook"
          class="h-5 w-5"
        />
        <svg
          v-else-if="icon === 'email'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </span>
      <span class="text-sm block w-full text-center text-black">
        {{ text }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
// Desestructuramos props para que icon y text queden marcados como usados
const { icon, text } = defineProps<{
  icon: 'apple' | 'google' | 'facebook' | 'email'
  text: string
}>()
</script>
