import {html, render} from '../../node_modules/lit-html/lit-html.js'


const header = document.getElementById('my-header')
const root = document.getElementById('main-content')

const navTemplate = (user) => html
    ` <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/catalog">All games</a>
        ${user
                ? html`
                    <div id="user">
                        <a href="/create">Create Game</a>
                        <a href="/logout">Logout</a>
                    </div>`
                : html`
                    <div id="guest">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>`}

    </nav>`


function ctxRender(content) {
    render(content, root)
}


//function that wil be executed before page handler
export function addRender(ctx, next) {
    // console.log(ctx.user)
    render(navTemplate(ctx.user), header)
    ctx.render = ctxRender;//as reference
    next();
}
