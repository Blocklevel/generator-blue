var generator = require('yeoman-generator')
var _ = require('lodash')

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
          },
          {
            name: 'Generate sitemap',
            value: 'sitemap'
          }
        ],
        default: 0,
        store: true
      }
    ]).then(({ task }) => {
      let sitemap = this.config.get('sitemap')

      if (!sitemap) {
        sitemap = this.config.set('sitemap', {})
      }

      this.composeWith(`blue:${task}`)
    })
  }
})
