import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from '../pages/Coaches/CoachDetail.vue';
import CoachesList from '../pages/Coaches/CoachList.vue';
import CoachRegister from '../pages/Coaches/CoachRegister.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestReceived from '../pages/requests/RequestReceived.vue';
import NotFound from '../pages/NotFound.vue';

export default {};
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: { path: 'contact', component: ContactCoach },
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestReceived },
    { path: '/:notfound(.*)', component: NotFound },
  ],
});
