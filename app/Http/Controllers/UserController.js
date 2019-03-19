'use strict'
const { validate } = use('Validator')
const User = use('App/Models/User')

class UserController {

    async login ({ request, auth }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
    
        return 'Logged in successfully'
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }

    async index({ view }) {
        const users = await User.all()
          
        return view.render('users.index', { users: users.toJSON() })
      }


    async store ({ request, response, session }) {
        // validate form input
        const validation = await validate(request.all(), {
          username: 'required|min:5|max:10',
          email: 'required|email|unique:users,email',
          password: 'required|min:5:mas10'
        })
      
        // show error messages upon validation fail
        if (validation.fails()) {
          session.withErrors(validation.messages())
                 .flashExcept(['password'])
      
          return response.redirect('back')
        }
      
        // persist to database
        const user = new User()
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')
        await user.save()
      
        // Fash success message to session
        session.flash({ notification: 'User added!' })
      
        return response.redirect('back')
    }
}

module.exports = UserController
