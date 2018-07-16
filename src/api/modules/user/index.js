import fetch from '../../config'

export default {
  login (config) { return fetch('/api/login', 'get', config) }
  // login (config) { return fetch('/login', config) }
}
