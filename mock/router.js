const Router = require('koa-router')
const apiPages = require('./modules')
const forEach = require('lodash/forEach')

const router = new Router()
forEach(apiPages, (apiPage) => {
  forEach(apiPage, (api) => {
    router[api.method](api.url, (ctx, next) => {
      ctx.response.status = 200
      ctx.response.body = api.data(ctx)
    })
  })
})
module.exports = router
