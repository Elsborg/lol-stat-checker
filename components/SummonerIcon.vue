<template>
  <div class="flex flex-col py-10 items-center w-full">
    <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
      {{ summonerData.value.gameName }}
      <span class="text-slate-500 uppercase"
        >#{{ summonerData.value.tagLine }}</span
      >
    </h3>

    <div class="relative">
      <img
        :src="getSummonerIcon(accountDetails.value.profileIconId)"
        width="128"
        height="128"
        alt="Summoner Icon"
        class="rounded-2xl"
        style="aspect-ratio: 128 / 128; object-fit: cover"
      />
      <span
        class="absolute -bottom-3 inset-x-10 flex justify-center bg-gray-900 bg-opacity-70 text-white py-1 px-2 rounded-lg text-sm font-medium"
      >
        {{ accountDetails.value.summonerLevel }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  summonerData: Object,
  accountDetails: Object,
})

// :src="getSummonerIcon(accountDetails.value.profileIconId)"
</script>
