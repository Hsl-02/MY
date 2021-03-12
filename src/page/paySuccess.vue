<template>
	<div>
		<headJump :msg='headJumpMsg'></headJump>
		<div class="line"></div>
		<div>
			<div>
				<img :src="businessImg" class="businessImg"/>
				<div class="businessName">{{businessName}}</div>
			</div>
			<div class="payState">支付成功</div>
			<div class="order">
				<div class="orderFont">订单号:</div>
				<div class="orderNumber">4352615372817378215783621918</div>
			</div>
			<div class="order">
				<div class="orderFont">支付金额:</div>
				<div class="orderNumber">￥ {{this.$route.query.money}}.00</div>
			</div>
			<div class="order">
				<div class="orderFont">支付方式:</div>
				<div class="orderNumber">{{this.$route.query.state}}</div>
			</div>
			<div class="order">
				<div class="orderFont">交易时间:</div>
				<div class="orderNumber">{{this.$route.query.time}}</div>
			</div>
		</div>
		<div class="btn">
			<div class="btnIndex" @click="jumpIndex">返回首页</div>
			<div class="btnReward" @click="appear">查看奖励</div>
		</div>
		<reward :msgA="firstMsgA" :msgB="firstMsgB" :msgC="firstMsgC" :passFont='isFont' :hide='firstHide' @toOut='firstOut' @toChange='getSecond' @toShare='getFirstShare' :otherHide='firstOtherHide'></reward>
		<reward :msgA="secondMsgA" :msgB="secondMsgB" :msgC="secondMsgC" :hide='secondHide' @toOut='secondOut' :passColor='secondColor' @toShare='getSecondShare' :otherHide='secondOtherHide'></reward>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'
	import reward from '../components/reward.vue'
	
	export default{
		data(){
			return {
				headJumpMsg:'详情',
				business:[],
				businessImg:'',
				businessName:'',
				firstMsgA:'恭喜你获得金币奖励',
				firstMsgB:'200.72',
				firstMsgC:'已奖励到您的账本中',
				isFont:96,
				firstHide:false,
				secondMsgA:'恭喜你获得免单返现30%',
				secondMsgB:'免单',
				secondMsgC:'本次共奖励现金￥270.4已加至返现列队，请注意查收',
				secondHide:false,
				secondColor:'ffee78',
				firstOtherHide:false,
				secondOtherHide:false
			}
		},
		components:{
			headJump,
			reward
		},
		methods:{
			jumpIndex(){
				this.$router.push('/')
			},
			appear(){
				this.firstHide = true
			},
			firstOut(){
				this.firstHide = false
				this.firstOtherHide = false
			},
			secondOut(){
				this.secondHide = false
				this.firstOtherHide = false
				this.secondMsgA='恭喜你获得免单返现30%'
			},
			getSecond(){
				this.firstHide = false
				this.secondHide = true
				this.secondOtherHide = false
			},
			getFirstShare(){
				this.firstHide = false
				this.secondHide = true
				this.secondMsgA='恭喜你获得100%免单奖励'
				this.secondOtherHide = true
			},
			getSecondShare(){
				this.secondOtherHide = true
				this.secondMsgA='恭喜你获得100%免单奖励'
			}
		},
		created() {
			this.$route.query.id
			this.$route.query.money
			this.$route.query.state
			this.$route.query.time
			axios.get('businessIndex.json')
				.then(response => {
					this.business = response.data
					this.business.forEach(item => {
						if (this.$route.query.id == item.id) {
							this.businessImg = require('@/assets/index/' + item.img)
							this.businessName = item.name
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
	.line{
		width: 100%;
		height: 0.01rem;
		background-color: #000000;
		opacity: 0.1;
	}
	.businessImg{
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		margin: 0 auto;
		margin-top: 0.5rem;
	}
	.businessName{
		font-size: 0.3rem;
		font-weight: bold;
		text-align: center;
		margin-top: 0.3rem;
	}
	.order{
		display: flex;
		padding-left: 0.7rem;
		margin-top: 0.4rem;
	}
	.orderFont{
		font-size: 0.3rem;
		color: #999;
		font-weight: 550;
		margin-right: 0.2rem;
	}
	.orderNumber{
		font-size: 0.3rem;
		color: #999;
	}
	.payState{
		font-size: 0.7rem;
		text-align: center;
		margin-top: 0.5rem;
		color: green;
		margin-bottom: 0.8rem;
	}
	.btn{
		display: flex;
		justify-content: space-around;
		margin-top: 1rem;
	}
	.btnIndex{
		font-size: 0.4rem;
		border: 0.01rem solid rgba(0,0,0,0.4);
		border-radius: 0.2rem;
		padding: 0.2rem;
		/* background-color: #A1FEFF; */
	}
	.btnReward{
		font-size: 0.4rem;
		border: 0.01rem solid rgba(0,0,0,0.4);
		border-radius: 0.2rem;
		padding: 0.2rem;
		background-color: #ffee78;
		color: brown;
	}
</style>