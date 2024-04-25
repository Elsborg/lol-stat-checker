<template>
  <div class="max-w-xl mx-auto bg-gray-900 p-4 rounded-md">
    <form
      @submit.prevent="handleSearch"
      class="flex items-center justify-between space-x-4"
    >
      <!-- Region Selector -->
      <div>
        <select
          v-model="selectedRegion"
          class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300"
        >
          <option value="na1">NA</option>
          <option value="euw1">EUW</option>
          <option value="eun1">EUNE</option>
          <option value="kr">KR</option>
          <option value="jp1">JP</option>
          <option value="br1">BR</option>
          <option value="la1">LAN</option>
          <option value="la2">LAS</option>
          <option value="oc1">OCE</option>
          <option value="ru">RU</option>
          <option value="tr1">TR</option>
          <option value="ph2">PH</option>
          <option value="sg2">SG</option>
          <option value="tw2">TW</option>
          <option value="th2">TH</option>
        </select>
      </div>

      <!-- Game Name and Tag Line Input Field -->
      <div>
        <input
          v-model="searchInput"
          type="text"
          :placeholder="placeholderText"
          required
          class="w-full sm:w-48 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none"
        />
      </div>

      <!-- Search Button -->
      <div>
        <button
          type="submit"
          class="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-950 focus:outline-none"
        >
          <!-- <span class="text-white">Search</span> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(["summonerData", "error"])
const selectedRegion = ref("na1")
const placeholderText = ref("Game Name + #NA")

watch(selectedRegion, (newValue) => {
  const selectedRegionElement = document.querySelector(
    `option[value="${newValue}"]`
  )
  if (selectedRegionElement) {
    placeholderText.value = `Game Name + #${selectedRegionElement.textContent.trim()}`
  } else {
    placeholderText.value = "Game Name"
  }
})

// Data variables
const searchInput = ref("")

// Method to initiate search
const handleSearch = async () => {
  const [gameName, tagLine] = searchInput.value.split("#")
  searchInput.value = ""

  const encodedGameName = encodeURIComponent(gameName)

  const { data, error } = await useFetch(
    `/api/summoner/${encodedGameName}/${tagLine}`
  )

  if (!data.value) {
    throw createError({
      statusCode: 404,
      message: `Summoner ${gameName} not found`,
      fatal: true,
    })
  }

  data.value = { ...data.value, region: selectedRegion.value }

  emit("summonerData", data)
}
</script>
