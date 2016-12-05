const generator = require('yeoman-generator')
const _ = require('lodash')
const format = require('../format')

module.exports = generator.Base.extend({
  generate: function () {
    const sitemap = this.config.get('sitemap')
    const tasks = ['page', 'component', 'store']

    if (!format.defineSitemap('sitemap', sitemap)) {
      return
    }

    _.each(tasks, task => {
      _.forIn(sitemap[task], (value, key) => {
        const options = _.assignIn({}, value, {
          filename: key,
          task
        })

        this.composeWith(`blue:file-generator`, { options })
      })
    })
  }
})
