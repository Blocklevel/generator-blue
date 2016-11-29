const generator = require('yeoman-generator')
const _ = require('lodash')
const chalk = require('chalk')
const utils = require('../utils')
const moment = require('moment');

module.exports = generator.Base.extend({
  prompting: function () {
    return this.prompt([
      {
        type: 'input',
        name: 'filename',
        message: 'What\'s the name of your component?',
        default: 'my-component'
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
      const task = 'component'
      this.composeWith(`blue:file-generator`, {
        options: { filename, basic, task }
      })
    })
  }
})
