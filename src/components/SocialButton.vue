<template>
  <div class="p-1"><button class="relative w-full border py-3 rounded bg-gray-200 hover:bg-gray-100 transition-colors focus:outline-none">
    <!-- Ícono fijo en la izquierda -->
    <span class="absolute left-2 top-1/2 transform -translate-y-1/2">
      <!-- Icono Apple (PNG) -->
      <img
        v-if="icon === 'apple'"
        src="@/assets/icons/apple-icon.png"
        alt="Ícono de Apple"
        class="h-5 w-5"
      />

      <!-- Icono Google (SVG) -->
      <img
        v-else-if="icon === 'google'"
        src="@/assets/icons/google-icon.svg"
        alt="Ícono de Google"
        class="h-5 w-5"
      />

      <!-- Icono Facebook (PNG) -->
      <img
        v-else-if="icon === 'facebook'"
        src="@/assets/icons/facebook-icon.png"
        alt="Ícono de Facebook"
        class="h-5 w-5"
      />

      <!-- Icono Email (SVG inline) -->
      <svg
        v-else-if="icon === 'email'"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-black"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 4H4C2.9 4 2 .9 2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    </span>

    <!-- Texto centrado y en negrita -->
    <span class="text-sm block w-full text-center text-black">
      {{ text }}
    </span>
  </button>
</div>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados para SocialButton aquí si es necesario */
</style>
