import page from '../node_modules/page/page.mjs'
import {addRender} from "./middleware/render.js";
import {homePage} from "./views/home.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";
import {addSession} from './middleware/session.js'

//routing table

//as global middleware
page(addSession)
page(addRender)

page('/', homePage)
page('/catalog', catalogPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/login', loginPage)
page('/register', registerPage)
page('/logout', onLogout)

page.start();

//get services

import * as apiGames from './api/gamesService.js'
import * as apiUser from './api/user.js'
import * as apiComments from './api/comments.js'
window.apiGames = apiGames;
window.apiUser = apiUser;
window.apiComments = apiComments;

function onLogout(){
    apiUser.logout()
    page.redirect('/')
}
