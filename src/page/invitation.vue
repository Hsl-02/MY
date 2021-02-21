<template>
	<div>
		<headJump :msg='isMsg' class="head"></headJump>
		<img src="../assets/invitation/mainImg.png" class="mainImg"/>
		<div class="swiper">
			<div class="swiperTitle">收益动态图</div>
			<upSwiper></upSwiper>
			<div class="record">我的邀请记录</div>
		</div>
		<div class="free"></div>
	</div>
</template>

<script>
	import headJump from '../components/headJump.vue'
	import upSwiper from '../components/upSwiper.vue'
	
	export default{
		data(){
			return {
				isMsg:'赚钱攻略'
			}
		},
		components:{
			headJump,
			upSwiper
		}
	}
</script>

<style scoped>
	.head{
		position: fixed;
		top: -0.46rem;
		background-color: #fff;
		width: 100%;
		padding-top: 0.2rem;
	}
	.mainImg{
		width: 100%;
		height: 100%;
		margin-top: 0.83rem;
	}
	.swiper{
		background-color: #df0707;
		padding:  0 0.3rem;
		position: relative;
	}
	.swiperTitle{
		font-size: 0.36rem;
		color: #FFE5CF;	
		text-align: center;
		margin-bottom: 0.2rem;
	}
	.record{
		width: 2.61rem;
		height: 0.81rem;
		position: absolute;
		right: 0;
		font-size: 0.28rem;
		color: #ffe5cf;
		background: linear-gradient(to left, #DF0707 0%,#FF881E 100%);
		border-radius: 0.5rem 0 0 0.5rem;
		text-align: center;
		line-height: 0.81rem;
	}
	.free{
		width: 100%;
		height: 1.8rem;
		background-color: #df0707;
	}
</style>
