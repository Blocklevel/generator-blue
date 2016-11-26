const generator = require('yeoman-generator')

module.exports = generator.Base.extend({
  prompting: function () {
    return this.prompt([
      {
        type: 'list',
        name: 'task',
        message: 'What you want to do?',
        choices: [
          {
            name: 'Make a new component',
            value: 'component'
          },
          {
            name: 'Make a new page',
            value: 'page'
          },
          {
            name: 'Make a new store module',
            value: 'store'
          }
        ],
        default: 0,
        store: true
      }
    ]).then((answer) => {
      this.composeWith(`blue:${answer.task}`)
    })
  }
})
