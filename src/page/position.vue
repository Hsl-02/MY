<template>
	<div>
		<headJump :msg='isMsg'></headJump>
		<div class="city">
			<div>长沙</div>
			<img src="../assets/position/xiajiantou.png" />
			<search :msg='searchMsg' :passWidth='searchWidth' :passHeight='searchHeight' :passPaddingLeft='isPassPaddingLeft' class="search" @toInpt='getInpt' @toBlur='getBlur'></search>
		</div>
		<div class="location">
			<div class="locationCurrent">当前位置: {{this.$route.query.place}}</div>
			<div class="locationAgain">
				<img src="../assets/position/dingwei.png"/>
				<div>重新定位</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="nearby">
			<div class="nearbyTitle">附近地址</div>
			<div class="nearbyLocal">运达中央广场二期</div>
			<div class="nearbyLocal">长沙W酒店</div>
			<div class="nearbyLocal">运达童梦乐园</div>
			<div class="nearbyLocal">运达国际新城</div>
		</div>
	</div>
</template>

<script>
	import headJump from '../components/headJump.vue'
	import search from '../components/search.vue'

	export default {
		data() {
			return {
				isMsg: '选择位置',
				searchMsg: '搜索地址',
				searchWidth: 552,
				searchHeight: 70,
				isPassPaddingLeft:203
			}
		},
		components: {
			headJump,
			search
		},
		created() {
				this.$route.query.place;
		},
		methods:{
			getInpt(){
				this.isPassPaddingLeft=10
			},
			getBlur(){
				this.isPassPaddingLeft=203
			}
		}
	}
</script>

<style scoped>
	.city {
		display: flex;
		padding-left: 0.29rem;
		margin-top: 0.22rem;
		margin-bottom: 0.39rem;
	}

	.city div {
		font-size: 0.32rem;
		margin: auto 0;
	}

	.city img {
		width: 0.18rem;
		height: 0.2rem;
		opacity: 0.3;
		margin: auto 0.29rem auto 0.25rem;
	}

	.search {
		/* padding-left: 2.03rem; */
		background-color: #eee;
	}

	.search div::-webkit-input-placeholder {
		/* WebKit browsers */
		color: #999 !important;
	}
	.location{
		display: flex;
		justify-content: space-between;
		padding: 0 0.33rem;
		margin-bottom: 0.37rem;
	}
	.locationCurrent{
		font-size: 0.28rem;
	}
	.locationAgain{
		display: flex;
	}
	.locationAgain img{
		width: 0.27rem;
		height: 0.26rem;
	}
	.locationAgain div{
		font-size: 0.26rem;
		color: #ff1818;
		margin-left: 0.14rem;
	}
	
	.line{
		width: 100%;
		height: 0.18rem;
		background-color: #f5f5f5;
	}
	
	.nearby{
		padding-left: 0.33rem;
		padding-top: 0.33rem;
	}
	.nearbyTitle{
		font-size: 0.3rem;
		color: #999;
		margin-bottom: 0.53rem;
	}
	.nearbyLocal{
		font-size: 0.28rem;
		font-weight: bold;
		margin-bottom: 0.79rem;
	}
</style>
