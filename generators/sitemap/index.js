const generator = require('yeoman-generator')
const utils = require('../utils')
const _ = require('lodash')
const chalk = require('chalk')

module.exports = generator.Base.extend({
  generate: function () {
    const sitemap = this.config.get('sitemap')

    if (!sitemap) {
      this.log(chalk.bold.red('[Blue Error] Missing .yo-rc.json file. See documentation'))
      return
    }

    this.log('making website...')

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
