<template>
	<div>
		<div class="top">
			<headJump :msg='isMsg'></headJump>
			<img :src="imgsrc" class="bannerImg" />
			<div class="goods">
				<div class="goodsName">{{name}}</div>
				<div class="goodsOther">
					<div class="goodsOtherLabel">
						<img src="../assets/goodsDetails/biaoqian.png"/>
						<div>美容美发</div>
					</div>
					<div class="goodsOtherRedu">
						<img src="../assets/index/redu.png"/>
						<div>热度 44</div>
					</div>
					<div class="complaint">
						<img src="../assets/goodsDetails/tousu.png"/>
						<div>投诉</div>
					</div>
				</div>
			</div>
			<div class="chart">
				<div class="free">
					<div class="tip">384人已免单</div>
					<div class="freeFont">
						<img src="../assets/goodsDetails/miandan.png"/>
						<div>免单指数</div>
					</div>
					<div class="freeProgress">
						<Progress :val='isFree' :color="freeColor"></Progress>
					</div>
				</div>
				<div class="deduction">
					<div class="deductionFont">
						<img src="../assets/goodsDetails/dikou.png"/>
						<div>金币抵扣</div>
					</div>
					<div class="deductionProgress">
						<Progress :val='isDeduction' :color="deductionColor"></Progress>
					</div>
				</div>
				<div class="cash">
					<div class="cashFont">
						<img src="../assets/goodsDetails/fanxian.png"/>
						<div>金币返现</div>
					</div>
					<div class="cashProgress">
						<Progress :val='isCash' :color="cashColor"></Progress>
					</div>
				</div>
			</div>
			<div class="line"></div>
		</div>
		<div class="explain">
			<div class="time">
				<img src="../assets/goodsDetails/shijian.png"/>
				<div>营业时间 09:00-23:00</div>
			</div>
			<div class="explainLine"></div>
			<div class="place">
				<img src="../assets/goodsDetails/didian.png" class="placeImg"/>
				<div>雨花区沙湾路与曲塘路交叉路口天湘华庭三楼 | {{distance}}</div>
				<p class="placeLine"></p>
				<img src="../assets/goodsDetails/dianhua.png" class="telepho"/>
			</div>
		</div>
		<div class="line"></div>
		<div class="introduce">
			<div class="introduceTitle">商家说明</div>
			<div class="introduceFont">此处是商家说明，此处是商家说明，此处是商家说明， 此处是商家说明说明说明，此处是商家说明，此处是 商家说明，此处是商家说明，此处是商家说明说明说明， 此处是商家说明，此处是 商家说明，此处是商家说明，</div>
		</div>
		<bigButton :content='isContent' :passWidth='isPassWidth' :passHeight='isPassHeight' :color='isColor' class="btn"></bigButton>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'
	import Progress from '../components/progress.vue'
	import bigButton from '../components/bigButton.vue'

	export default {
		data() {
			return {
				isMsg: '商户详情',
				goods: [],
				imgsrc: '',
				name: '',
				isFree:50,
				freeColor:'#e60012',
				isDeduction:0,
				deductionColor:'#f98c17',
				isCash:100,
				cashColor:'#e60057',
				distance:0,
				isContent:'买单',
				isPassWidth:678,
				isPassHeight:96,
				isColor:'red'
			}
		},
		components: {
			headJump,
			Progress,
			bigButton
		},
		created() {
			this.$route.query.id
			axios.get('businessIndex.json')
				.then(response => {
					this.goods = response.data
					this.goods.forEach(item => {
						if (this.$route.query.id == item.id) {
							this.imgsrc = require('@/assets/index/' + item.img)
							this.name = item.name
							this.isFree = item.free
							this.isDeduction = item.deduction
							if(item.distance>=1000){
								item.distance=item.distance/1000+'km'
							}else{
								item.distance=item.distance+'m'
							}
							this.distance = item.distance
						}
					})
				})
				.catch(error => {
					console.log(error)
					alert('网络错误，不能访问')
				})

		}
	}
</script>

<style scoped>
	.top{
		position: relative;
	}
	.bannerImg {
		width: 7.5rem;
		height: 2.8rem;
	}

	.goods {
		width: 7.18rem;
		height: 1.56rem;
		margin-left: 0.16rem;
		box-shadow: 0px 2px 35px 0px rgba(0, 92, 178, 0.13);
		border-radius: 0.16rem;
		padding: 0.29rem 0.35rem 0.34rem 0.33rem;
		background-color: #fff;
		position: absolute;
		top: 3.3rem;
		margin-bottom: 0.31rem;
	}

	.goodsName {
		font-size: 0.36rem;
	}
	.goodsOther{
		display: flex;
	}
	.goodsOtherLabel{
		display: flex;
		margin-top: 0.37rem;
	}
	.goodsOtherLabel img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.14rem;
	}
	.goodsOtherLabel div{
		font-size: 0.24rem;
		color: #f98c17;
		margin-top: 0.05rem;
		margin-right: 0.61rem;
	}
	.goodsOtherRedu{
		display: flex;
		margin-top: 0.36rem;
	}
	.goodsOtherRedu img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.09rem;
	}
	.goodsOtherRedu div{
		font-size: 0.24rem;
		color: #f98c17;
		margin-top: 0.05rem;
	}
	.complaint{
		display: flex;
		margin-top: 0.42rem;
		margin-left: 2.45rem;
	}
	.complaint img{
		width: 0.25rem;
		height: 0.27rem;
		margin-right: 0.08rem;
	}
	.complaint div{
		font-size: 0.2rem;
		color: #c1c1c1;
		margin-top: 0.04rem;
	}
	.chart{
		display: flex;
		margin-bottom: 0.23rem;
	}
	.free{
		margin-top: 1.84rem;
		width: 2.18rem;
		height: 1.29rem;
		border: 0.02rem solid rgba(0,0,0,0.16);
		border-radius: 0.16rem;
		padding: 0.24rem 0rem 0.26rem 0.18rem;
		margin-left: 0.24rem;
		position: relative;
	}
	.freeFont{
		display: flex;
		margin-bottom: 0.3rem;
	}
	.freeFont img{
		width: 0.32rem;
		height: 0.32rem;
	}
	.freeFont div{
		font-size: 0.26rem;
		margin-top: 0.05rem;
		margin-left: 0.17rem;
	}
	.deduction{
		margin-top: 1.84rem;
		width: 2.18rem;
		height: 1.29rem;
		border: 0.02rem solid rgba(0,0,0,0.16);
		border-radius: 0.16rem;
		padding: 0.24rem 0rem 0.26rem 0.18rem;
		margin-left: 0.24rem;
	}
	.deductionFont{
		display: flex;
		margin-bottom: 0.3rem;
	}
	.deductionFont img{
		width: 0.32rem;
		height: 0.32rem;
	}
	.deductionFont div{
		font-size: 0.26rem;
		margin-top: 0.05rem;
		margin-left: 0.17rem;
	}
	.cash{
		margin-top: 1.84rem;
		width: 2.18rem;
		height: 1.29rem;
		border: 0.02rem solid rgba(0,0,0,0.16);
		border-radius: 0.16rem;
		padding: 0.24rem 0rem 0.26rem 0.18rem;
		margin-left: 0.24rem;
	}
	.cashFont{
		display: flex;
		margin-bottom: 0.3rem;
	}
	.cashFont img{
		width: 0.32rem;
		height: 0.32rem;
	}
	.cashFont div{
		font-size: 0.26rem;
		margin-top: 0.05rem;
		margin-left: 0.17rem;
	}
	.line{
		width: 100%;
		height: 0.24rem;
		background-color: #f5f5f5;
	}
	.tip{
		width: 1.48rem;
		height: 0.36rem;
		font-size: 0.2rem;
		background-color: #e60012;
		color: white;
		line-height: 0.36rem;
		text-align: center;
		border-radius: 0.2rem 0.2rem 0.2rem 0;
		position: absolute;
		top: -0.25rem;
		right: 0;
	}
	.time{
		display: flex;
		margin-top: 0.28rem;
		margin-left: 0.29rem;
	}
	.time img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.21rem;
	}
	.time div{
		font-size: 0.28rem;
		margin-top: 0.02rem;
	}
	.explain{
		margin-bottom: 0.29rem;
	}
	.explainLine{
		width: 6.8rem;
		height: 0.01rem;
		background-color: #000;
		margin-left: 0.7rem;
		opacity: 0.1;
		margin-top: 0.26rem;
		margin-bottom: 0.29rem;
	}
	.place{
		display: flex;
		margin-top: 0.22rem;
		margin-left: 0.24rem;
	}
	.placeImg{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.21rem;
		margin-top: 0.05rem;
	}
	.place div{
		font-size: 0.28rem;
		margin-top: 0.02rem;
		width: 5.1rem;
		line-height: 0.38rem;
	}
	.placeLine{
		width: 0.02rem;
		height: 0.5rem;
		background-color: #000000;
		opacity: 0.1;
		margin-left: 0.29rem;
		margin-top: 0.15rem;
	}
	.telepho{
		width: 0.32rem;
		height: 0.32rem;
		margin:auto;
	}
	.introduce{
		padding: 0.26rem 0.31rem 0 0.29rem;
	}
	.introduceTitle{
		font-size: 0.28rem;
		font-weight: bold;
		margin-bottom: 0.27rem;
	}
	.introduceFont{
		font-size: 0.28rem;
	}
	.btn{
		color: white;
		font-size: 0.36rem;
		font-weight: 500;
		line-height: 0.96rem;
		position: fixed;
		bottom: 0.33rem;
		left: 0.34rem;
	}
</style>
