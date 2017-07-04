import Vue from 'vue';
import Router from 'vue-router';
import ratings from 'components/ratings/ratings.vue';
import goods from 'components/goods/goods.vue';
import seller from 'components/seller/seller.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
});
