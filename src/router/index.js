import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/programmes',
      name: 'programmes',
      component: () => import('@/views/Programmes.vue'),
      meta: {
        pageTitle: 'Programmes',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
          {
            text: 'Programmes',
            active: false,
          },
        ],
      },
    },
    {
      path: '/sites',
      name: 'sites',
      component: () => import('@/views/Sites.vue'),
      meta: {
        pageTitle: 'Sites',
        breadcrumb: [
          {
            text: 'Home',
            active: false,
          },
          {
            text: 'Contracts',
            active: false,
          },
          {
            text: 'Contract',
            active: false,
          },
          {
            text: 'Lot',
            active: false,
          },
          {
            text: 'Sites',
            active: true,
          },
        ],
      },
    },

    {
      path: '/site/:1',
      name: 'site',
      component: () => import('@/views/Site.vue'),
      meta: {
        pageTitle: 'Sites',
        breadcrumb: [
          {
            text: 'Home',
            active: false,
          },
          {
            text: 'Contracts',
            active: false,
          },
          {
            text: 'Contract',
            active: false,
          },
          {
            text: 'Lot',
            active: false,
          },
          {
            text: 'Sites',
            active: true,
          },

          {
            text: 'Site',
            active: true,
          },
        ],
      },
    },
    {
      path: '/contracts',
      name: 'contracts',
      component: () => import('@/views/Contracts.vue'),
      meta: {
        pageTitle: 'Contracts',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
          {
            text: 'Contracts',
            active: false,
          },
        ],
      },
    },

    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
          {
            text: 'Users',
            active: false,
          },
        ],
      },
    },

    {
      path: '/user/:1',
      name: 'user',
      component: () => import('@/views/User.vue'),
      meta: {
        pageTitle: 'User',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
          {
            text: 'Users',
            active: true,
          },
          {
            text: 'User',
            active: false,
          },
        ],
      },
    },

    {
      path: '/contract/:id',
      name: 'contract',
      component: () => import('@/views/Contract.vue'),
      meta: {
        pageTitle: 'Contract',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
          {
            text: 'Contracts',
            active: true,
          },
          {
            text: 'Contract',
            active: false,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
