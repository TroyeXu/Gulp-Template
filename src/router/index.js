import Vue from 'vue'
import Router from 'vue-router'
import Dog from '@/components/Dog'
import Cat from '@/components/CatUrl'
import About from '@/page/About'
import AT from '@/page/AT'
import AH from '@/page/AH'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dog',
      component: Dog
    },
    {
      path: '/About',
      component: About,
      children: [
        { path: '/', name: 'About', component: About },
        { path: 'AH', name: 'AH', component: AH },
        { path: 'AT', name: 'AT', component: AT }
      ]
    },
    {
      path: '/hi',
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      }

    }, {
      path: '/Cat',
      name: 'Cat',
      component: Cat
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'Params',
      component: Params
    }, {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
  ]
})
