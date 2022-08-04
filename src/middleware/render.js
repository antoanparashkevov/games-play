import {render} from '../../node_modules/lit-html/lit-html.js'

const root = document.getElementById('main-content')

function ctxRender(content){
    render(content,root)
}


//function that wil be executed before page handler
export function addRender(ctx,next){
    ctx.render = ctxRender;//as reference
    next();
}
