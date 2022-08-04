import * as api from './api.js'

//associative array
const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    all:'/data/games?sortBy=_createdOn%20desc'
}

export async function getRecentGames() {
    return api.get(endpoints.recent)
}

export async function getAllGames(){
    return api.get(endpoints.all)
}
