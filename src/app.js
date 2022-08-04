import page from '../node_modules/page/page.mjs'
import {addRender} from "./middleware/render.js";

//routing table

//as global middleware
page(addRender)

page('/', ()=>console.log('home page'))
page('/catalog', ()=>console.log('catalog page'))
page('/create', ()=>console.log('create page'))
page('/details/:id', ()=>console.log('details page'))
page('/edit/:id', ()=>console.log('edit page'))
page('/login', ()=>console.log('login page'))
page('/register', ()=>console.log('register page'))

page.start();
