import {html} from '../../node_modules/lit-html/lit-html.js'
import {createSubmitHandler} from "../api/util.js";
import * as commentsService from '../api/comments.js'


const commentsTemplate = () => html
    `  <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
            <!-- list all comments for current game (If any) -->
            <li class="comment">
                <p>Content: I rate this one quite highly.</p>
            </li>
            <li class="comment">
                <p>Content: The best game.</p>
            </li>
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
    </div>
    `

export async function commentsView(gameId){
    const comments = await commentsService.getComments(gameId)
    return commentsTemplate(comments)
}
