export default defineEventHandler(async (event) => {
    const region = getRouterParam(event, 'region')
    const puuid = getRouterParam(event, 'puuid')

    console.log('region', region) 

    const { apiKey } = useRuntimeConfig()

    const uri = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`

    try {
        const data = await $fetch(uri)

        if (!data) {
            console.log('uri', uri)
            throw createError({
                statusCode: 404,
                statusMessage: 'puuid does not exist',
            })
        }
        return data

    } catch (error) {
        console.log('uri', uri)
        throw createError({
            statusCode: 404,
            statusMessage: 'puuid does not exist',
        })
    }

    return data
})