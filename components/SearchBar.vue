<template>
    <div class="max-w-xl mx-auto bg-gray-900 p-4 rounded-md">
      <div class="flex items-center justify-between space-x-4">
        <!-- Region Selector -->
        <div>
          <select v-model="selectedRegion" class="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300">
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
          <input v-model="searchInput" type="text" :placeholder="placeholderText" class=" w-full sm:w-48 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none">
        </div>
  
        <!-- Search Button -->
        <div>
          <button @click="search" type="button" class="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-950 focus:outline-none">
            <span class="text-white">Search</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    const selectedRegion = ref('na1')
    const placeholderText = ref('Game Name + #NA')

    watch(selectedRegion, (newValue) => {
      const selectedRegionElement = document.querySelector(`option[value="${newValue}"]`);
      if (selectedRegionElement) {
        placeholderText.value = `Game Name + #${selectedRegionElement.textContent.trim()}`;
      } else {
        placeholderText.value = 'Game Name';
      }
    });
  
  // Data variables
  const searchInput = ref('');
  
  // Method to initiate search
  const search = async () => {
    try {
      // Split the search input based on '#'
      const [gameName, tagLine] = searchInput.value.split('#');
      // Encode spaces in gameName as %20
      const encodedGameName = gameName.replace(/\s/g, '%20');
      // Make the API request
      const { data, error } = await useFetch(`/api/account-id/${selectedRegion.value}/${encodedGameName}/${tagLine}`);
      if (error) {
        console.error('Error fetching account ID:', error);
        return;
      }
      // Handle response data as needed
      console.log('Account ID:', data);
    } catch (error) {
      console.error('Error fetching account ID:', error);
    }
  };
  </script>
  
  <style scoped>
  /* Add custom styles here if needed */
  </style>
  