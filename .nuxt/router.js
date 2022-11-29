import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _373e4bd6 = () => interopDefault(import('../pages/2020-1-1-1-KKV-START-2021-00400.vue' /* webpackChunkName: "pages/2020-1-1-1-KKV-START-2021-00400" */))
const _5d705cf7 = () => interopDefault(import('../pages/adatvedelmi-szabalyzat.vue' /* webpackChunkName: "pages/adatvedelmi-szabalyzat" */))
const _0e9492f2 = () => interopDefault(import('../pages/cookie-tajekoztato.vue' /* webpackChunkName: "pages/cookie-tajekoztato" */))
const _d8782546 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/landing/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/2020-1-1-1-KKV-START-2021-00400",
    component: _373e4bd6,
    name: "2020-1-1-1-KKV-START-2021-00400"
  }, {
    path: "/adatvedelmi-szabalyzat",
    component: _5d705cf7,
    name: "adatvedelmi-szabalyzat"
  }, {
    path: "/cookie-tajekoztato",
    component: _0e9492f2,
    name: "cookie-tajekoztato"
  }, {
    path: "/",
    component: _d8782546,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}