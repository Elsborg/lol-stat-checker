<template>
  <div
    class="bg-gray-900 h-screen flex items-center justify-center mx-w-sm mx-auto"
  >
    <div class="text-center">
      <p class="text-9xl font-bold text-white">{{ error.statusCode }}</p>
      <p class="mt-7 text-6xl text-white">Oops...</p>
      <p class="mt-7 text-white text-lg">{{ error.message }}</p>
      <button
        class="mt-7 px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-950 focus:outline-none"
        @click="handleClearError"
      >
        Search Again...
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["error"])

const handleClearError = () => clearError({ redirect: "/" })
</script>
