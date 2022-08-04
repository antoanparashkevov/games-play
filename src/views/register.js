import {html} from '../../node_modules/lit-html/lit-html.js'

import {createSubmitHandler} from "../api/util.js";
import * as userService from '../api/user.js'

const registerTemplate = (onSubmit) => html
    `
        <section id="register-page" class="content auth">
            <form id="register" @submit="${onSubmit}">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    `

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(ctx, onSubmit)))
}

async function onSubmit(ctx, data, event) {
    // data from dataForm (all inputs between <form> tag)
    if (data.email === '' || data.password === '') {
        alert('All fields are required!')
        return;
    }
    if (data.password !== data['confirm-password']) {
        alert('Password don\'t match!')
        return;
    }
    await userService.register(data.email, data.password)
    event.target.reset();//reset all inputs
    ctx.page.redirect('/')
}
