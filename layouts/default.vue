<template>
  <header class="bg-gray-800 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Left side: Lettermark -->
      <div class="flex items-center">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="24pt"
          height="24pt"
          viewBox="0 0 128.000000 128.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.16, written by Peter Selinger 2001-2019
          </metadata>
          <g
            transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M683 1260 c-170 -60 -284 -203 -306 -384 -8 -71 -7 -92 12 -166 l21
                 -85 -194 -195 c-107 -107 -199 -205 -205 -217 -28 -55 -7 -117 58 -176 35 -32
                 48 -37 89 -37 27 0 58 7 72 16 14 9 111 102 215 205 l190 189 45 -16 c153 -55
                 351 -11 467 104 102 102 137 196 131 354 -3 90 -7 111 -35 168 -54 115 -149
                 199 -270 241 -75 25 -216 25 -290 -1z m283 -125 c265 -119 269 -482 8 -615
                 -42 -21 -62 -25 -144 -25 -82 0 -102 4 -144 25 -217 111 -261 395 -86 554 105
                 94 242 117 366 61z m-588 -768 l22 -23 -118 -117 -118 -118 -24 26 -24 26 114
                 114 c63 63 117 115 121 115 3 0 15 -10 27 -23z"
            />
            <path
              d="M1002 867 c-6 -7 -16 -35 -22 -62 -17 -76 -85 -135 -154 -135 -14 0
                  -31 -9 -40 -22 -36 -50 -9 -88 62 -88 87 1 181 61 224 144 25 49 36 140 18
                   161 -15 18 -74 20 -88 2z"
            />
          </g>
        </svg>
        <span class="text-white text-lg font-bold mx-2">Lol Stat Checker</span>
      </div>

      <!-- Right side: Menu (burger menu for mobile) -->
      <div class="flex items-center space-x-4 lg:hidden">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="text-white focus:outline-none"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Menu items -->
      <div class="hidden lg:flex items-center space-x-4">
        <NuxtLink to="/" class="text-white hover:text-gray-300">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white hover:text-gray-300"
          >About</NuxtLink
        >
      </div>
    </div>

    <!-- Mobile menu (hidden by default) -->
    <div v-if="isMenuOpen" class="lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block text-white hover:text-gray-300"
          >Home</NuxtLink
        >
        <NuxtLink to="/about" class="block text-white hover:text-gray-300"
          >About</NuxtLink
        >
      </div>
    </div>
  </header>
  <div>
    <slot />
  </div>

  <footer class="bg-gray-800 py-6">
    <div
      class="container mx-auto flex items-center justify-between flex-col lg:flex-row text-white text-center lg:text-left"
    >
      <!-- Text in the middle -->
      <div
        class="flex items-center justify-center lg:justify-center lg:mb-0 lg:flex-1"
      >
        <p class="text-sm">&copy; 2024 Lol Stat Check. All rights reserved.</p>
      </div>

      <!-- GitHub icon -->
      <div class="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        <a
          href="https://github.com/yourusername/yourproject"
          target="_blank"
          class="ml-4"
        >
          <svg
            class="w-6 h-6 text-gray-400 hover:text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.038-3.338.724-4.042-1.457-4.042-1.457-.546-1.387-1.332-1.756-1.332-1.756-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.833 2.805 1.303 3.49.997.108-.776.42-1.303.764-1.603-2.675-.304-5.491-1.338-5.491-5.944 0-1.316.471-2.387 1.237-3.227-.124-.304-.536-1.527.117-3.18 0 0 1.01-.322 3.3 1.234a11.53 11.53 0 0 1 3-.402c1.018.005 2.045.137 3 .402 2.29-1.556 3.298-1.234 3.298-1.234.655 1.653.243 2.876.119 3.18.77.84 1.236 1.911 1.236 3.227 0 4.617-2.82 5.636-5.502 5.933.433.371.815 1.102.815 2.22 0 1.606-.014 2.896-.014 3.287 0 .32.215.693.825.576C20.566 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <!-- Add more icons here if needed -->
      </div>
    </div>
  </footer>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>

<style scoped>
.router-link-exact-active {
  color: #38b2ac;
}
</style>
