import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/layouts/PageView'
import BlankView from '@/layouts/BlankView'
import TabsView from '@/layouts/TabsView'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login page',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'workplace',
              name: 'Workplace',
              component: () => import('@/pages/dashboard/workplace/WorkPlace'),
            },
            {
              path: 'analysis',
              name: 'Analysis',
              component: () => import('@/pages/dashboard/analysis/Analysis'),
            }
          ]
        },
        {
          path: 'form',
          name: 'Form',
          meta: {
            icon: 'form',
          },
          component: PageView,
          children: [
            {
              path: 'basic',
              name: 'Basic',
              component: () => import('@/pages/form/basic/BasicForm'),
            },
            {
              path: 'step',
              name: 'Step',
              component: () => import('@/pages/form/step/StepForm'),
            },
            {
              path: 'advance',
              name: 'Advance',
              component: () => import('@/pages/form/advance/AdvancedForm'),
            }
          ]
        },
        {
          path: 'list',
          name: 'List',
          meta: {
            icon: 'table'
          },
          component: PageView,
          children: [
            {
              path: 'query',
              name: 'Query',
              component: () => import('@/pages/list/QueryList'),
            },
            {
              path: 'primary',
              name: 'Primary',
              component: () => import('@/pages/list/StandardList'),
            },
            {
              path: 'card',
              name: 'Card',
              component: () => import('@/pages/list/CardList'),
            },
            {
              path: 'search',
              name: 'Search',
              component: () => import('@/pages/list/search/SearchLayout'),
              children: [
                {
                  path: 'article',
                  name: 'Article',
                  component: () => import('@/pages/list/search/ArticleList'),
                },
                {
                  path: 'application',
                  name: 'Application',
                  component: () => import('@/pages/list/search/ApplicationList'),
                },
                {
                  path: 'project',
                  name: 'Project',
                  component: () => import('@/pages/list/search/ProjectList'),
                }
              ]
            }
          ]
        },
        {
          path: 'details',
          name: 'Details',
          meta: {
            icon: 'profile'
          },
          component: BlankView,
          children: [
            {
              path: 'basic',
              name: 'Basic details page',
              component: () => import('@/pages/detail/BasicDetail')
            },
            {
              path: 'advance',
              name: 'Advanced details page',
              component: () => import('@/pages/detail/AdvancedDetail')
            }
          ]
        },
        {
          path: 'result',
          name: 'Result',
          meta: {
            icon: 'check-circle-o',
          },
          component: PageView,
          children: [
            {
              path: 'success',
              name: 'Success',
              component: () => import('@/pages/result/Success')
            },
            {
              path: 'error',
              name: 'Error',
              component: () => import('@/pages/result/Error')
            }
          ]
        },
        {
          path: 'exception',
          name: 'Exception',
          meta: {
            icon: 'warning',
          },
          component: BlankView,
          children: [
            {
              path: '404',
              name: '404',
              component: () => import('@/pages/exception/404')
            },
            {
              path: '403',
              name: '403',
              component: () => import('@/pages/exception/403')
            },
            {
              path: '500',
              name: '500',
              component: () => import('@/pages/exception/500')
            }
          ]
        },
        {
          path: 'components',
          name: 'Components',
          meta: {
            icon: 'appstore-o'
          },
          component: PageView,
          children: [
            {
              path: 'taskCard',
              name: 'Task Card',
              component: () => import('@/pages/components/TaskCard')
            },
            {
              path: 'palette',
              name: 'Palette',
              component: () => import('@/pages/components/Palette')
            }
          ]
        }
      ]
    }
  ]
})
