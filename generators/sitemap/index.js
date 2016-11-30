const generator = require('yeoman-generator')
const utils = require('../utils')
const _ = require('lodash')
const chalk = require('chalk')

module.exports = generator.Base.extend({
  generate: function () {
    const sitemap = this.config.get('sitemap')

    if (!sitemap) {
      const message = chalk.bold.red('[Blue Error] Missing .yo-rc.json file. Read docs at')
      const link = chalk.italic.red('https://github.com/Blocklevel/generator-blue')
      this.log(`${message} ${link}`)
      return
    }

    if (sitemap.page) {
      _.forIn(sitemap.page, (value, key) => {
        this.composeWith(`blue:file-generator`, {
          options: {
            filename: key,
            basic: value.basic,
            task: 'page'
          }
        })
      })
    }

    if (sitemap.component) {
      _.forIn(sitemap.component, (value, key) => {
        this.composeWith(`blue:file-generator`, {
          options: {
            filename: key,
            basic: value.basic,
            task: 'component'
          }
        })
      })
    }

    if (sitemap.store) {
      _.forIn(sitemap.store, (value, key) => {
        this.composeWith(`blue:file-generator`, {
          options: {
            filename: key,
            basic: value.basic,
            events: value.events,
            task: 'store'
          }
        })
      })
    }
  }
})
