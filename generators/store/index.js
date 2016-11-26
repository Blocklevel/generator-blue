const generator = require('yeoman-generator')
const _ = require('lodash')
const chalk = require('chalk')
const utils = require('../utils')
const moment = require('moment');

const ComponentGenerator = module.exports = generator.Base.extend({
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
    ]).then((answer) => {
      this._generateComponent(answer)
    })
  },
  _getEventList: function (events) {
    let result = _.map(events, event => _.toUpper(_.snakeCase(event)))
    return _.compact(result)
  },
  _generateComponent: function ({ filename, hasEvents, events }) {
    const user = utils.getUser()
    const name = _.kebabCase(filename)
    const tplPath = '../../templates/store'
    const distPath = 'src/app/store/modules'
    const partials = ['mutations', 'actions', 'getters', 'events', 'index', 'state']
    const eventsList = hasEvents ? this._getEventList(events.split(',')) : []

    _.each(partials, partial => {
      const file = this.templatePath(`${tplPath}/${partial}.js`)
      const dest = this.destinationPath(`${distPath}/${name}/${partial}.js`)

      this.fs.copyTpl(file, dest, { name, eventsList, user })
    })
  }
})
