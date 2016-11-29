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
        message: 'What\'s the name of this module?',
        default: 'my-store'
      },
      {
        type: 'list',
        name: 'hasEvents',
        message: 'Do you want to add some events with it?',
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
        default: 0,
        store: true
      },
      {
        when: function (response) {
          return response.hasEvents
        },
        type: 'input',
        name: 'events',
        message: 'Type a list of events (ex: getPost or get post)'
      }
    ]).then(({ filename, basic, events }) => {
      const task = 'store'
      this.composeWith(`blue:file-generator`, {
        options: { filename, basic, events, task }
      })
    })
  }
})
