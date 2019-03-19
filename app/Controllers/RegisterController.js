'use strict'

class RegisterController {

    async index(request, response) {
    //async index (view){ 
        const view = use('View')
        //yield response.sendView('register')
        // return view.render('register/index')
        return view.render('register.index')
    }
}

module.exports = RegisterController
