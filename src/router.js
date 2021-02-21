import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index.vue'
import position from '@/page/position.vue'
import invitation from '@/page/invitation.vue'
import goodsClassification from '@/page/goodsClassification.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			name:'index',
			component:index
		},
		{
			path:'/position',
			name:'position',
			component:position
		},
		{
			path:'/invitation',
			name:'invitation',
			component:invitation
		},
		{
			path:'/goodsClassification',
			name:'goodsClassification',
			component:goodsClassification
		}
	]
})
