const chalk = require('chalk')

const defineSitemap = (task, sitemap) => {
  const message = chalk.bold.red('[Blue Error] Missing .yo-rc.json file. Read docs at')
  const link = chalk.italic.red('https://github.com/Blocklevel/generator-blue')

  if (task === 'sitemap' && !sitemap) {
    console.log(`${message} ${link}`)
    return false
  }

  return true
}

module.exports = {
  defineSitemap
}
