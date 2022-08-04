import page from '../node_modules/page/page.mjs'

//routing table
page('/', ()=>console.log('it works'))
page('/catalog', ()=>console.log('catalog page'))
page('/create', ()=>console.log('create page'))
page('/logout', ()=>console.log('logout page'))
page('/login', ()=>console.log('login page'))
page('/register', ()=>console.log('register page'))

page.start();
