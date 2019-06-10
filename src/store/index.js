import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});

export default store;
