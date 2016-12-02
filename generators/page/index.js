const generator = require('yeoman-generator')
const _ = require('lodash')

module.exports = generator.Base.extend({
  prompting: function () {
    return this.prompt([
      {
        type: 'input',
        name: 'filename',
        message: 'What\'s the name of this page?',
        default: 'my-page'
      },
      {
        type: 'list',
        name: 'basic',
        message: 'Do you want a basic structure?',
        choices: [
          {
            name: "No, thanks!",
            value: false
          },
          {
            name: "Oh yes!",
            value: true
          }
        ],
        default: 0
      }
    ]).then(({ filename, basic }) => {
      const task = 'page'
      this.composeWith(`blue:file-generator`, {
        options: { filename, basic, task }
      })
    })
  }
})
