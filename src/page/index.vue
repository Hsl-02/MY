<template>
	<div>
		<div class="top">
			<div class="topBox">
				<img src="../assets/index/ccdf01a4d2be29ed8425862efbcda2e.png" class="topBoxLogo" />
				<search :passWidth='isWidth' :passHeight='isHeight' :msg='isMsg' :passPaddingLeft='isPassPaddingLeft' class="search" @toJump='toJump'></search>
			</div>
			<div class="position" @click="jumpPosition">
				<img src="../assets/index/dibiao.png" class="positionImg" />
				<div class="positionFont">{{place}}</div>
				<img src="../assets/index/xiajiantou.png" class="positionArrow" />
			</div>
			<swiper :dataList='isDataList'></swiper>
		</div>
		<div class="classification">
			<itemize></itemize>
		</div>
		<img src="../assets/index/4ebb676c22e043d7a19080a933b5381.png" class="bannerImg"/>
		<div class="content">
			<div class="title">
				<div class="titleDiv1">附近商家</div>
				<div class="titleLine"></div>
				<div class="titleDiv2">特惠商家</div>
			</div>
			<business></business>
		</div>
		<img src="../assets/index/zhuanqian.png" class="fixedImg" @click="jumpInvitation"/>
		<navigation :shouye='shouyePass'></navigation>
	</div>
</template>

<script>
	import search from '../components/search.vue'
	import swiper from '../components/swiper.vue'
	import itemize from '../components/itemize.vue'
	import business from '../components/business.vue'
	import navigation from '../components/navigation.vue'

	export default {
		data() {
			return {
				isWidth: 348,
				isHeight: 64,
				isMsg: '搜索店铺',
				isPassPaddingLeft:28,
				isDataList: [
					require('../assets/index/indexSwiperA.jpg'),
					require('../assets/index/indexSwiperB.png'),
					require('../assets/index/indexSwiperC.png')
				],
				shouyePass:false,
				place:'雨花区运达中心广场',
			}
		},
		components: {
			search,
			swiper,
			itemize,
			business,
			navigation
		},
		methods:{
			jumpPosition(){
				this.$router.push(`/position?place=${this.place}`)
			},
			jumpInvitation(){
				this.$router.push(`/invitation`)
			},
			toJump(){
				this.$router.push(`/search`)
			}
		}

	}
</script>

<style scoped>
	.top {
		background-color: #E60012;
		height: 3.46rem;
		margin-bottom: 1.67rem;
		border-radius: 0 0 0.2rem 0.2rem;
	}

	.topBox {
		display: flex;
		margin-bottom: 0.36rem;
	}

	.topBoxLogo {
		width: 0.78rem;
		height: 0.4rem;
		margin: 0.3rem 0.34rem 0 0.31rem;
	}

	.search {
		margin-top: 0.22rem;
	}

	.position {
		display: flex;
		width: 3.3rem;
		margin-left: 0.29rem;
		margin-bottom: 0.19rem;
	}

	.positionImg {
		width: 0.33rem;
		height: 0.35rem;
	}

	.positionFont {
		font-size: 0.24rem;
		color: #FFFFFF;
		margin: 0.06rem 0.29rem 0 0.21rem;
	}

	.positionArrow {
		width: 0.26rem;
		height: 0.3rem;
	}
	.bannerImg{
		width: 7.02rem;
		height: 1.76rem;
		margin: auto;
	}
	.content{
		padding: 0.57rem 0.25rem 0 0.24rem;
		margin-bottom: 1.2rem;
	}
	.title{
		display: flex;
		margin-left: 0.04rem;
		margin-bottom: 0.18rem;
	}
	.titleDiv1{
		font-size: 0.35rem;
	}
	.titleDiv2{
		font-size: 0.3rem;
		color: #666666;
		margin: auto 0;
	}
	.titleLine{
		width: 0.01rem;
		height: 0.17rem;
		opacity: 0.2;
        background: #000000;
		margin: auto 0.2rem;
	}
	.fixedImg{
		height: 1.13rem;
		width: 1.13rem;
		position: fixed;
		right: 0;
		bottom: 1.2rem;
	}
</style>
