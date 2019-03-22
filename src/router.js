import Vue from 'vue';
import VueRouter from 'vue-router';

import Contatos from './views/contatos/Contatos.vue';
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue';
import ContatosHome from './views/contatos/ContatosHome.vue';
import Home from './views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [
		{ path: '/', component: Home },
		{
			path: '/contatos',
			component: Contatos,
			children: [ 
				{ name: 'contato', path: ':id', component: ContatoDetalhes },
				{ path: '', component: ContatosHome }
			]
		}
	]
});
