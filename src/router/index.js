import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Support from '../components/Support.vue';
import Team from '../components/Team.vue';

import teams from '../data/teams';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
];

let route;
Object.keys(teams).forEach((team) => {
  route = {
    path: `/team${teams[team].project.route}`,
    name: teams[team].project.name,
    component: Team,
    props: teams[team],
  };
  routes.push(route);
});

export default new Router({
  routes,
});
