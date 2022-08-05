import {html} from '../../node_modules/lit-html/lit-html.js'
import * as commentsService from '../api/comments.js'


const commentsTemplate = (comments) => html
    `
        <div class="details-comments">
            <h2>Comments:</h2>
            
            ${comments.length > 0
                    ? commentsList(commentCard)
                    : html`<p class="no-comment">No comments.</p>`
            }
        </div>
    `

const commentsList = (comments) => html
    `
        <ul>
            ${comments.map(commentCard)}
        </ul>`

//comment is obj

const commentCard = (comment) => html
    `
        <li class="comment">
            <p>Content: ${comment.comment}</p>
        </li>`


export async function commentsView(gameId) {
    const comments = await commentsService.getComments(gameId)
    return commentsTemplate(comments)
}
