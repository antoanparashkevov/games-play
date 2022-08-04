import page from '../node_modules/page/page.mjs'
import {addRender} from "./middleware/render.js";
import {homePage} from "./views/home.js";
import {catalogPage} from "./views/catalog.js";
import {createPage} from "./views/create.js";
import {detailsPage} from "./views/details.js";
import {editPage} from "./views/edit.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";

//routing table

//as global middleware
page(addRender)

page('/', homePage)
page('/catalog', catalogPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/login', loginPage)
page('/register', registerPage)

page.start();

//get services

import * as api from './api/gamesService.js'
window.api = api;
