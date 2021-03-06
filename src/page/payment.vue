<template>
	<div>
		<headJump :msg='isMsg'></headJump>
		<img src="../assets/payment/banner.png" class="bannerImg" />
		<div class="details">
			<div class="detailsBusiness">
				<div class="detailsBusinessExplain">
					<img :src="imgsrc" />
					<div>{{name}}</div>
				</div>
				<div class="detailsBusinessMoney">
					<div>￥</div>
					<input type="text" placeholder="询问服务员后输入" v-model="isMoney" @input="onEnter" />
				</div>
				<div class="line"></div>
			</div>
			<div class="detailsOption">
				<div class="detailsOptionTop">
					<div class="detailsOptionTopFont">可用296金币抵现296元</div>
					<switchs :flag="isFlag" :num='isNum' @toSwitch='getSwitch'></switchs>
				</div>
				<div class="detailsOptionBottom">
					<img src="../assets/complaint/gantanhao.png" />
					<div>抵现后不再同时享受免单和金币奖励</div>
				</div>

			</div>
			<div class="mode">
				<div class="modeWX">
					<div style="display: flex;">
						<img src="../assets/complaint/weixin.png" class="modeWXFontImg" />
						<div class="modeWXFont">微信支付</div>
					</div>
					<div class="modeWXBox" v-show="appearDiv" @click="select"></div>
					<img src="../assets/complaint/xuanzhong.png" v-show="appearImg" @click="select" class="modeWXImg" />
				</div>
				<div class="modeYe">
					<div style="display: flex;">
						<img src="../assets/complaint/yue.png" class="modeWXFontImg" />
						<div class="modeWXFont">零钱支付</div>
						<div class="modeYeTips">可用￥246.00</div>
					</div>
					<div class="modeWXBox" v-show="appearDivYe" @click="selectYe"></div>
					<img src="../assets/complaint/xuanzhong.png" v-show="appearImgYe" @click="selectYe" class="modeWXImg" />
				</div>
			</div>
			<div class="agreement">
				<div>
					<div class="agreementBox" v-show="appearDivXy" @click="selectXy"></div>
					<img src="../assets/complaint/xuanzhonghuang.png" class="agreementImg" v-show="appearXyImg" @click="selectXy" />
				</div>
				<div class="agreementFont">
					<div class="agreementFontA">阅读并同意</div>
					<div class="agreementFontB">《付款前协议》</div>
				</div>
			</div>
			<bigButton :content='isContent' :passWidth='isWidth' :passHeight='isHeight' class='btn' @toSubmit='getSubmit'></bigButton>
			<popup :msg="isTxt" :flag="popupFlag" class='pop' @toCancel='getCancel' @toConfirm='getConfirm' :showA='isShowA' :showB='isShowB' :showAMsg='isShowAMsg' :showBMsg='isShowBMsg'></popup>
			<popup :msg='modeMsg' :disCancle='isYuPay' :flag="modeFlag" class="pop" @toCancel='modeCancel' @toConfirm='modeConfirm' :showAMsg='modeShowAMsg' :showBMsg='modeShowBMsg'></popup>
			<popup :msg='agreementMsg' :flag="agreementFlag" class="pop" @toCancel='agreementCancel' @toConfirm='agreementConfirm' :showAMsg='agreementShowAMsg' :showBMsg='agreementShowBMsg'></popup>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'
	import switchs from '../components/switchs.vue'
	import bigButton from '../components/bigButton.vue'
	import popup from '../components/popup.vue'

	export default {
		data() {
			return {
				isMsg: '付款',
				business: [],
				imgsrc: '',
				name: '',
				isFlag: false,
				isNum: 42,
				appearDiv: true,
				appearImg: false,
				appearDivYe: true,
				appearImgYe: false,
				appearDivXy: true,
				appearXyImg: false,
				isContentOld: '0',
				isWidth: 702,
				isHeight: 96,
				isMoney: '',
				isEvent: '',
				isTxt: '您有一张优惠劵未使用,确认不使用吗',
				popupFlag: false,
				die: 0,
				isShowA: true,
				isShowB: true,
				isShowAMsg:'使用',
				isShowBMsg:'确认',
				modeMsg:'请选择支付方式',
				modeFlag:false,
				modeShowAMsg:'微信支付',
				modeShowBMsg:'余额支付',
				agreementMsg:'请阅读并同意付款协议',
				agreementFlag:false,
				agreementShowAMsg:'同意',
				agreementShowBMsg:'拒绝'
			}
		},
		components: {
			headJump,
			switchs,
			bigButton,
			popup
		},
		computed: {
			isContent() {
				if (this.isContentOld == null || this.isContentOld == '' || this.isContentOld == undefined) {
					return ('合计付款 0.00')
				}
				return ('合计付款 ' + this.isContentOld + '.00')
			},
			isYuPay(){
				if(this.isContentOld <= 246){
					return false
				}else{
					return true
				}
			}
			
		},
		created() {
			this.$route.query.id
			axios.get('businessIndex.json')
				.then(response => {
					this.business = response.data
					this.business.forEach(item => {
						if (this.$route.query.id == item.id) {
							this.imgsrc = require('@/assets/index/' + item.img)
							this.name = item.name
						}
					})
				})
				.catch(error => {
					console.log(error)
					alert('网络错误，不能访问')
				})
			if (this.isFlag) {
				this.isNum = 42
			} else {
				this.isNum = 0
			}
		},
		methods: {
			select() {
				if (this.appearDiv) {
					this.appearDiv = false,
						this.appearImg = true,
						this.appearImgYe = false,
						this.appearDivYe = true
				} else {
					this.appearDiv = true,
						this.appearImg = false
				}
			},
			selectYe() {
				if (this.appearDivYe) {
					if (this.isContentOld <= 246) {
						this.appearDivYe = false,
							this.appearImgYe = true,
							this.appearImg = false,
							this.appearDiv = true
					} else {
						alert('余额不足，请选择其他支付方式')
					}
				} else {
					this.appearDivYe = true,
						this.appearImgYe = false
				}
			},
			selectXy() {
				if (this.appearDivXy) {
					this.appearDivXy = false,
						this.appearXyImg = true
				} else {
					this.appearDivXy = true,
						this.appearXyImg = false
				}
			},
			onEnter(event) {
				this.isEvent = event
				this.isFlag = false
				this.isNum = 0
				this.appearImg = false
				this.appearDiv = true
				this.appearDivYe = true
				this.appearImgYe = false
				if (this.isFlag) {
					this.isContentOld = Number(event.target.value) - 296
				} else {
					this.isContentOld = event.target.value
				}
			},
			getSwitch() {
				this.isFlag = !this.isFlag
				if (this.isFlag) {
					this.isNum = 44
					if (this.isMoney && this.isMoney >= 296) {
						this.isContentOld = Number(this.isEvent.target.value) - 296
					} else {
						alert('购买总额未达到优惠卷额度，确定使用吗')
						this.isContentOld = 0
					}
				} else {
					this.isNum = 0
					if (this.isMoney) {
						this.isContentOld = this.isEvent.target.value
					}
				}
			},
			getSubmit() {
				if (this.isMoney == null || this.isMoney == '' || this.isMoney == undefined) {
					alert('请询问服务员后输入价格')
				} else if (this.isFlag == false && this.isMoney >= 296) {
					this.popupFlag = true
					if (this.die == 1) {
						this.popupFlag = false
					}
				} else if (this.appearImgYe == false && this.appearImg == false) {
					this.modeFlag = true
				}else if(this.appearDivXy == true){
					this.agreementFlag = true
				}

			},
			getCancel() {
				this.popupFlag = false,
				this.die = 1
			},
			getConfirm() {
				this.isFlag = true
				this.popupFlag = false
				this.isNum = 44
				this.isContentOld = Number(this.isEvent.target.value) - 296
			},
			modeCancel(){
				this.modeFlag = false
				this.appearDivYe = false
				this.appearImgYe = true
			},
			modeConfirm(){
				this.modeFlag = false
				this.appearDiv = false
				this.appearImg = true
			},
			agreementConfirm(){
				this.agreementFlag = false
				this.appearDivXy = false
				this.appearXyImg = true
			},
			agreementCancel(){
				this.agreementFlag = false
			}
		}
	}
</script>

<style scoped>
	.bannerImg {
		width: 100%;
		height: 2.24rem;
	}

	.details {
		background-color: #f5f5f5;
		padding-top: 0.25rem;
		height: 75vh;
	}

	.detailsBusiness {
		width: 7.02rem;
		height: 2.72rem;
		margin: 0 0.24rem;
		background-color: #fff;
		padding: 0.26rem 0.25rem 0.33rem 0.26rem;
		border-radius: 0.24rem;
	}

	.detailsBusinessExplain {
		display: flex;
		margin-bottom: 0.5rem;
	}

	.detailsBusinessExplain img {
		width: 0.88rem;
		height: 0.88rem;
		margin-right: 0.32rem;
	}

	.detailsBusinessExplain div {
		font-size: 0.32rem;
		font-weight: bold;
		margin: auto 0;
	}

	.detailsBusinessMoney {
		display: flex;
	}

	.detailsBusinessMoney div {
		font-size: 0.48rem;
		font-weight: 500;
		height: 0.70rem;
		line-height: 0.7rem;
	}

	.detailsBusinessMoney input {
		font-size: 0.48rem;
		font-weight: 500;
		width: 6rem;
		font-weight: bold;
		border: none;
		outline: none;
	}

	.detailsBusinessMoney input::-webkit-input-placeholder {
		font-size: 0.32rem;
		font-weight: 500;
	}

	.line {
		width: 6.52rem;
		height: 0.01rem;
		background-color: #000;
		opacity: 0.06;
		margin-top: 0.07rem;
	}

	.detailsOption {
		width: 7.02rem;
		height: 1.48rem;
		background-color: #fff;
		border-radius: 0.24rem;
		margin: 0.23rem auto 0.25rem;
		padding: 0.25rem 0.25rem 0.33rem 0.27rem;
	}

	.detailsOptionTop {
		display: flex;
		justify-content: space-between;
	}

	.detailsOptionTopFont {
		font-size: 0.28rem;
		line-height: 0.48rem;
	}

	.detailsOptionBottom {
		display: flex;
		margin-top: 0.14rem;
	}

	.detailsOptionBottom div {
		font-size: 0.24rem;
		font-weight: 500;
		color: #c1c1c1;
		padding-top: 0.05rem;
	}

	.detailsOptionBottom img {
		width: 0.35rem;
		height: 0.35rem;
		margin-right: 0.09rem;
	}

	.mode {
		width: 7.02rem;
		height: 1.94rem;
		background-color: #fff;
		border-radius: 0.24rem;
		margin: 0 auto;
		padding: 0.33rem 0.27rem;
	}

	.modeWX {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.modeWXFontImg {
		width: 0.36rem;
		height: 0.36rem;
		margin-right: 0.19rem;
	}

	.modeWXFont {
		font-size: 0.28rem;
		font-weight: 500;
		line-height: 0.36rem;
	}

	.modeWXBox {
		width: 0.36rem;
		height: 0.36rem;
		border: 0.01rem solid rgba(0, 0, 0, 0.24);
		border-radius: 0.5rem;
	}

	.modeWXImg {
		width: 0.36rem;
		height: 0.36rem;
	}

	.modeYe {
		display: flex;
		justify-content: space-between;
	}

	.modeYeTips {
		font-size: 0.24rem;
		font-weight: 500;
		color: #c1c1c1;
		line-height: 0.4rem;
		margin-left: 0.25rem;
	}

	.agreement {
		display: flex;
		padding-left: 0.51rem;
		margin-top: 0.26rem;
	}

	.agreementBox {
		width: 0.28rem;
		height: 0.28rem;
		border: 0.01rem solid #f98c17;
		border-radius: 0.5rem;
		opacity: 0.4;
	}

	.agreementImg {
		width: 0.28rem;
		height: 0.28rem;
	}

	.agreementFont {
		display: flex;
		margin-left: 0.15rem;
	}

	.agreementFontA {
		font-size: 0.22rem;
		font-weight: 500;
		color: #c1c1c1;
		line-height: 0.28rem;
	}

	.agreementFontB {
		font-size: 0.22rem;
		font-weight: 500;
		color: #f98c17;
		line-height: 0.28rem;
	}

	.btn {
		font-size: 0.32rem;
		font-weight: bold;
		color: #fff;
		line-height: 0.96rem;
		margin-top: 1.15rem;
	}

	.pop {
		font-size: 0.3rem;
	}
</style>
