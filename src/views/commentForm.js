import {html,nothing} from '../../node_modules/lit-html/lit-html.js'
import * as commentsService from '../api/comments.js'

const commentFormTemplate = ()=> html
    `<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`



export async function commentFormView(ctx,gameId){
    if(ctx.user){
        return commentFormTemplate()
    }else{
        return nothing
    }
}
