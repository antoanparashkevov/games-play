import * as api from './api.js'

//associative array
const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category'
}

export async function getRecentGames() {
    return api.get(endpoints.recent)
}
