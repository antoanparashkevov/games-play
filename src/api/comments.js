import * as api from "../api/api.js"


const endpoints = {
    byId: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    post:'/data/comments'
}

export async function getComments(id){
    return api.get(endpoints.byId(id))
}

export async function postComment(comment){
    return api.post(endpoints.post,comment)
}
