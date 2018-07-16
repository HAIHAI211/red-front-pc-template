const Mock = require('mockjs')
const Random = Mock.Random

module.exports = {
  login: {
    method: 'get',
    url: '/api/login',
    data () {
      return {
        success: true,
        code: 1000,
        data: {
          token: `${Random.string(5)}-${Random.string(5)}-${Random.string(5)}`
        }
      }
    }
  }
}
