import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index.vue'
import position from '@/page/position.vue'
import invitation from '@/page/invitation.vue'
import goodsClassification from '@/page/goodsClassification.vue'
import goodsDetails from '@/page/goodsDetails.vue'
import complaint from '@/page/complaint.vue'
import search from '@/page/search.vue'
import payment from '@/page/payment.vue'
import paySuccess from '@/page/paySuccess.vue'
import account from '@/page/account.vue'

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
		},
		{
			path:'/goodsDetails',
			name:'goodsDetails',
			component:goodsDetails
		},
		{
			path:'/complaint',
			name:'complaint',
			component:complaint
		},
		{
			path:'/search',
			name:'search',
			component:search
		},
		{
			path:'/payment',
			name:'payment',
			component:payment
		},
		{
			path:'/paySuccess',
			name:'paySuccess',
			component:paySuccess
		},
		{
			path:'/account',
			name:'account',
			component:account
		},
	]
})
