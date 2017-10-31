import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Cinema from '@/components/cinema/cinema'
import discover from '@/components/discover/discover'
import mine from '@/components/mine/mine'
import slice from '@/common/slice'
import sliceImg from '@/common/sliceImg'
=======
import HelloWorld from '@/components/HelloWorld'

>>>>>>> 380bb92be45520af4917ccb0e64ef040423e7568
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/discover',
      name: 'discover',
      component: discover
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/slice',
      name: 'slice',
      component: slice
    },
    {
      path: '/sliceimg',
      name: 'sliceImg',
      component: sliceImg
=======
      name: 'Hello',
      component: HelloWorld
>>>>>>> 380bb92be45520af4917ccb0e64ef040423e7568
    }
  ]
})
