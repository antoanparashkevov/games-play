import {html, nothing} from '../../node_modules/lit-html/lit-html.js'
import * as gamesService from '../api/gamesService.js'
import {commentsView} from "./comments.js";


const detailsTemplate = (game, commentsView,onDelete) => html
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

                <!-- Bonus ( for Guests and Users ) -->
              ${commentsView}
                
                ${game.isOwner
                        ? html`
                            <div class="buttons">
                                <a href="/edit/${game._id}" class="button">Edit</a>
                                <a @click="${onDelete}" href="javascript:void(0)" class="button">Delete</a>
                            </div>`
                        : nothing}

            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            

        </section>
    `

export async function detailsPage(ctx) {
    const gameId = ctx.params.id;
    // console.log(gameId)
    const [game,commentsSection] = await Promise.all([
         gamesService.getById(gameId),
        commentsView(gameId)
    ])

    if (ctx.user) {//if don't have user -> null, that is falsy value
        game.isOwner = ctx.user._id === game._ownerId;//if it is true, that is the owner of the game

    }
    ctx.render(detailsTemplate(game,commentsSection, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?')
        if (choice) {
            await gamesService.delById(gameId);
            ctx.page.redirect('/')
        }
    }
}
