'use strict'

//const Lucid = use('Lucid')

class Token extends Model {

  user () {
    return this.belongsTo('App/Model/User')
  }

}

module.exports = Token
