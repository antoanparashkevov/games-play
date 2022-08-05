import {html, nothing} from '../../node_modules/lit-html/lit-html.js'
import * as gamesService from '../api/gamesService.js'
import {commentsView} from "./comments.js";
import {commentFormView} from "./commentForm.js";


const detailsTemplate = (game, commentsView, commentFormSection, onDelete) => html
    `
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${game.imageUrl}"/>
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>

                ${commentsView}

                ${game.isOwner
                        ? html`
                            <div class="buttons">
                                <a href="/edit/${game._id}" class="button">Edit</a>
                                <a @click="${onDelete}" href="javascript:void(0)" class="button">Delete</a>
                            </div>`
                        : nothing}

            </div>

            ${commentFormSection}

        </section>
    `

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    // console.log(gameId)
    const [game, commentsSection] = await Promise.all([
        gamesService.getById(gameId),
        commentsView(gameId)
    ])
    const commentFormSection = commentFormView(ctx)

    if (ctx.user) {//if don't have user -> null, that is falsy value
        game.isOwner = ctx.user._id === game._ownerId;//if it is true, that is the owner of the game

    }
    ctx.render(detailsTemplate(game, commentsSection, commentFormSection, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?')
        if (choice) {
            await gamesService.delById(gameId);
            ctx.page.redirect('/')
        }
    }
}
