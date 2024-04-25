export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, 'name')
    const tag = getRouterParam(event, 'tag')

    const { apiKey } = useRuntimeConfig()

    const uri = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}?api_key=${apiKey}`

    try {
        const data  = await $fetch(uri)

        if (!data) {
            throw createError({
                statusCode: 404,
                statusMessage: `Summoner not found`,
            })
        }
        return data

    } catch (error) {
        throw createError({
            statusCode: 404,
            statusMessage: `Summoner not found`,
        })
    }

    return data
})