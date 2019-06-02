import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarStandart from '../sidebars/SidebarStandart.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShopingCart from '../cart/ShopingCart.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: SidebarStandart,
      },
    },
    {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [
        {
          path: '/heads',
          name: 'RobotHeads',
          component: RobotHeads,
        },
        {
          path: '/arms',
          name: 'RobotArms',
          component: RobotArms,
        },
        {
          path: '/bases',
          name: 'RobotBases',
          component: RobotBases,
        },
        {
          path: '/torsos',
          name: 'RobotTorsos',
          component: RobotTorsos,
        },
      ],
    },
    {
      path: '/parts/:partType/:id',
      name: 'PartInfo',
      component: PartInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: ShopingCart,
    },
  ],
});

export default router;
