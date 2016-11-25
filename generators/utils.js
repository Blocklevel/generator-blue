const shelljs = require('shelljs')
const _ = require('lodash')

/**
 * Get single labels from the github configuration
 * @param  {String} label
 * @return {String}
 */
const getUserInfo = (label, placeholder) => {
  const shellObject = shelljs.exec(`git config user.${label}`, { silent: true })
  const value = shellObject.toString().replace(/\n/g, '')

  return (value === '') ? placeholder : value
}

/**
 * Get github user information
 * @return {Object}
 */
const getUser = () => {
  return {
    name: getUserInfo('name', 'my name'),
    email: getUserInfo('email', 'email@example.com')
  }
}

module.exports = {
  getUser,
  getUserInfo
}
