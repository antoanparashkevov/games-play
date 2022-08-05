import * as api from './api.js'

//associative array
const endpoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    all:'/data/games?sortBy=_createdOn%20desc',
    create:'/data/games',
    byId:'/data/games/',
    delById:'/data/games/',
    updateById:'/data/games/'
}

export async function getRecentGames() {
    return api.get(endpoints.recent)
}

export async function getAllGames(){
    return api.get(endpoints.all)
}

export async function createGame(data){
    return api.post(endpoints.create,data);
}

export async function getById(id){
    return api.get(endpoints.byId + id)
}

export async function delById(id){
    return api.del(endpoints.delById + id)
}

export async function updateGame(id,data){
    return api.put(endpoints.updateById, data)
}
