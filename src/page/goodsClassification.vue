<template>
	<div>
		<headJump :msg='this.$route.query.name'></headJump>
		<search :msg='searchMsg' :passWidth='searchWidth' :passHeight='searchHeight' :passPaddingLeft='searchPadding' class="search"></search>
		<div class="catalog">
			<div v-for="(item,index) in isCatalog" :key='index' :style="{color:item.isClick?'#000':''}" @click="swit(index)">
				{{item.name}}
				<p class="underline" v-show="item.isClick"></p>
			</div>
		</div>
		<div class="line"></div>
		<classfication class="goods"></classfication>
	</div>
</template>

<script>
	import headJump from '../components/headJump.vue'
	import search from '../components/search.vue'
	import classfication from '../components/classfication.vue'
	
	export default{
		data(){
			return {
				searchMsg:'搜索店铺',
				searchWidth:701,
				searchHeight:76,
				searchPadding:48,
				isCatalog:[{name:'综合',isClick:true},{name:'附近',isClick:false},{name:'特惠',isClick:false}]
			}
		},
		components:{
			headJump,
			search,
			classfication
		},
		created() {
				this.$route.query.name;
		},
		methods:{
			swit(index){
				this.isCatalog.forEach((i)=>{
					i.isClick=false
				})
				this.isCatalog[index].isClick=true
			}
		}
	}
</script>

<style scoped>
	.search{
		background-color: #f5f5f5;
		color: #999;
		margin: 0 auto;
	}
	.catalog{
		display: flex;
		margin-left: 0.38rem;
		margin-top: 0.34rem;
	}
	.catalog div{
		font-size: 0.28rem;
		color: #999;
		margin-right: 0.58rem;
	}
	.underline{
		width: 0.19rem;
		height: 0.04rem;
		background-color: #ff4a4a;
		margin: 0 auto;
		margin-top: 0.18rem;
	}
	.line{
		height: 0.02rem;
		width: 100%;
		background-color: #000;
		opacity: 0.08;
	}
	.goods{
		padding: 0 0.25rem;
	}
</style>
