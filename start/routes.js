'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('tasks/index', 'TaskController.index')
Route.post('tasks', 'TaskController.store')
Route.delete('tasks/:id', 'TaskController.destroy')
Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')
  
  Route.get('/login', 'AuthController.index')
  Route.post('/login', 'AuthController.login')

  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')

  Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')