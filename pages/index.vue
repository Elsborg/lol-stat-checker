<template>
  <div class="h-screen bg-gray-950">
    <h1 class="text-white text-center text-5xl p-10">Look up summoners</h1>
    <SearchBar @summonerData="handleAccountFetched" />
    <SummonerIcon
      v-if="accountDetails"
      :summonerData="fetchedAccount"
      :accountDetails="accountDetails"
    />
    <div class="text-white">
      <h2>{{ fetchedAccount }}</h2>
    </div>
  </div>
</template>

<script setup>
const fetchedAccount = ref(null)
const accountDetails = ref(null)

const handleAccountFetched = async (account) => {
  fetchedAccount.value = account

  const { data } = await useFetch(
    `/api/account/${account.value.puuid}/${account.value.region}`
  )
  // `/api/account/${account.value.puuid}/${account.value.region}`

  accountDetails.value = data
}
</script>
