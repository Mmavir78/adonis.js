'use strict'

class AuthController {

    async index(request, response) {
        //yield response.sendView('login')
        const view = use('View')
        return view.render('auth.index')
    }
}

module.exports = AuthController
