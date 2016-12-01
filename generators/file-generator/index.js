const generator = require('yeoman-generator')
const utils = require('../../utils')
const _ = require('lodash')

module.exports = generator.Base.extend({
  generate: function () {
    const { task, filename, basic, events } = this.options
    const user = utils.getUser()
    const name = _.kebabCase(filename)
    const eventsList = events && (events !== '') ? utils.eventParser(events) : []
    const tasksFileStructure = [
      {
        task: 'page',
        tplFiles: ['index.js', 'index.vue', 'index.css'],
        destFiles: [`${name}.js`, `${name}.vue`, `${name}.css`],
        tplPath: '../../../templates/page',
        destPath: 'src/app/page'
      },
      {
        task: 'component',
        tplFiles: ['index.js', 'index.vue', 'index.css'],
        destFiles: [`${name}.js`, `${name}.vue`, `${name}.css`],
        tplPath: '../../../templates/component',
        destPath: 'src/app/component'
      },
      {
        task: 'store',
        tplFiles: ['mutations.js', 'actions.js', 'getters.js', 'events.js', 'index.js', 'state.js'],
        destFiles: ['mutations.js', 'actions.js', 'getters.js', 'events.js', 'index.js', 'state.js'],
        tplPath: '../../../templates/store',
        destPath: 'src/app/store/modules'
      }
    ]
    const currentTask = _.find(tasksFileStructure, { task })

    let sitemap = this.config.get('sitemap')
    let params = { basic }

    if (task === 'store') {
      params.events = events
    }

    sitemap[task] = _.merge(sitemap[task], {
      [name]: params
    })

    this.config.set({ sitemap })

    _.each(currentTask.destFiles, (file, i) => {
      const { tplFiles, destFiles, tplPath, destPath } = currentTask
      const copyFrom = this.templatePath(`${tplPath}/${tplFiles[i]}`)
      const pasteTo = this.destinationPath(`${destPath}/${name}/${file}`)

      this.fs.copyTpl(copyFrom, pasteTo, { name, user, basic, eventsList })
    })
  }
})
