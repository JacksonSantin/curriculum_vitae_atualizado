import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import Sobre from '@/view/sobre'
import Skills from '@/view/skills'
import Formacao from '@/view/formacao'
import Experiencia from '@/view/experiencia'
import Projetos from '@/view/projetos'
import Contato from '@/view/contato'

const router = createRouter({
   history: createWebHistory(),
   routes: [
     { path: '/', component: Sobre },
     { path: '/skills', component: Skills },
     { path: '/formacao', component: Formacao },
     { path: '/experiencia', component: Experiencia },
     { path: '/projetos', component: Projetos },
     { path: '/contato', component: Contato },
   ],
 });
 
 export default router;