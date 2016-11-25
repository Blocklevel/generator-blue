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
    ]).then((answer) => {
      this._generateComponent(answer)
    })
  },
  _generateComponent: function ({ filename, basic }) {
    const user = utils.getUser()
    const name = _.kebabCase(filename)
    const tplPath = '../../templates/page'
    const distPath = 'src/app/page'
    const componentStructure = ['js', 'vue', 'css']

    _.each(componentStructure, (type) => {
      const file = this.templatePath(`${tplPath}/index.${type}`)
      const dest = this.destinationPath(`${distPath}/${name}/${name}.${type}`)

      this.fs.copyTpl(file, dest, { name, user, basic })
    })
  }
})
