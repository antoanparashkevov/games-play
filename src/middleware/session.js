import {getUserData} from "../api/util.js";

export function addSession(ctx){
    ctx.user = getUserData()
}
