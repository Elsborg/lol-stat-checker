export default defineEventHandler(async (event) => {
   
    //handle query params
    const { gameName, tagLine } = useQuery(event)
    const { apiKey } = useRuntimeConfig()
    const uri = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apiKey}`

    const { data } = await $fetch(uri)

    return data

})