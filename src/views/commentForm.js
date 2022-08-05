import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as commentsService from '../api/comments.js'
import {createSubmitHandler} from "../api/util.js";

const commentFormTemplate = (onSubmit)=> html
    `<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit="${onSubmit}" class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`



export  function commentFormView(ctx){
    if(ctx.user){//only authorized users can type comments.
        return commentFormTemplate(createSubmitHandler(ctx,onSubmit))
    }else{
        return nothing
    }
}

async function onSubmit(ctx,data,event){
    const gameId = ctx.params.id
    console.log(gameId)
    //value from textarea tag
    console.log(data.comment)
}