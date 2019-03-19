'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {
      table.string('title')
      
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
