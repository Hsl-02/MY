<template>
	<div>
		<headJump :msg='isMsg'></headJump>
		<div class="inpt">
			<search :cancel='isE' :msg="isVal" :passWidth='isWidth' :passHeight='isHeight' :passPaddingLeft='isPaddingLeft' class="search" @toCancel='getCancel' @enterInput='getEnter'></search>
			<div class="inptFont" @click="clear">取消</div>
		</div>
		<div class="nearby">
			<div class="nearbyTitle">附近的店</div>
			<ul class="example">
				<li v-for="(item,index) in business" :key='index' class="exampleLi" @click="record(index)">{{item}}</li>
			</ul>
		</div>
		<div class="history">
			<div class="historyTitle">
				<div class="historyTitleFont">历史搜索</div>
				<img src="../assets/complaint/qingkonglishi.png" class="historyTitleImg"/>
			</div>
			<ul class="example">
				<li class="exampleLi" v-for="(historyItem,historyIndex) in historyLi" :key='historyIndex'>{{historyItem}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headJump from '../components/headJump.vue'
	import search from '../components/search.vue'
	
	export default{
		data(){
			return {
				isMsg:'搜索',
				isVal:'搜索店铺',
				isWidth:612,
				isHeight:76,
				isPaddingLeft:48,
				isE:false,
				business:['海底捞火锅','吉布斯海鲜牛排自助餐','良品铺子','华莱士','吉布斯海鲜牛排自助餐','海底捞火锅','吉布斯海鲜牛排自助餐'],
				historyLi:[],
			}
		},
		components:{
			headJump,
			search
		},
		methods:{
			getHistoryList(){
				let arr = localStorage.getItem('history')
				arr = JSON.parse(arr)
				this.historyLi = arr
			},
			clear(){
				this.isE = ''
			},
			getCancel(){
				this.isE = false
			},
			record(index){
				console.log(index)
			},
			getEnter(e){
				let historyList = []
				historyList = JSON.stringify(historyList)
				localStorage.setItem('history',historyList)
				let old = localStorage.getItem('history')
				if(old){
					old = JSON.parse(old)
					old.push(e)
					old = JSON.stringify(old)
					console.log(old)
					localStorage.getItem('history',old)
				}else{
					old = []
				}
			}
		},
		created() {
			this.getHistoryList()
			
		}
	}
</script>

<style scoped>
	.search{
		background-color: #f5f5f5;
		margin:0 0.24rem;
	}
	.inpt{
		display: flex;
	}
	.inptFont{
		font-size: 0.28rem;
		margin: auto 0;
		font-weight: 500;
	}
	.nearby{
		margin-top: 0.44rem;
		padding-left: 0.33rem;
	}
	.nearbyTitle{
		font-size: 0.28rem;
		margin-bottom: 0.34rem;
		font-weight: bold;
	}
	.example{
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 0.78rem;
	}
	.exampleLi{
		font-size: 0.26rem;
		font-weight: 500;
		color: #333;
		border: 0.01rem solid rgba(0,0,0,0.2);
		border-radius: 0.28rem;
		padding: 0.15rem 0.31rem;
		margin-right: 0.27rem;
		margin-bottom: 0.24rem;
	}
	.history{
		padding: 0 0.32rem;
	}
	.historyTitle{
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.34rem;
	}
	.historyTitleFont{
		font-size: 0.28rem;
		font-weight: bold;
	}
	.historyTitleImg{
		width: 0.32rem;
		height: 0.31rem;
	}
</style>
