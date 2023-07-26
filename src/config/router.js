import Vue from 'vue';
import VueRouter from 'vue-router';

import Sobre from '@/view/sobre.vue'
import Skills from '@/view/skills.vue'
import Formacao from '@/view/formacao.vue'
import Experiencia from '@/view/experiencia.vue'
import Projetos from '@/view/projetos.vue'
import Contato from '@/view/contato.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/sobre' },
  { path: '/sobre', component: Sobre },
  { path: '/skills', component: Skills },
  { path: '/formacao', component: Formacao },
  { path: '/experiencia', component: Experiencia },
  { path: '/projetos', component: Projetos },
  { path: '/contato', component: Contato },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;