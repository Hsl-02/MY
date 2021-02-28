<template>
	<div>
		<headJump :msg='isMsg'></headJump>
		<div class="line"></div>
		<div class="business">
			<img :src="businessImg" class="businessImg"/>
			<div class="businessName">{{businessName}}</div>
		</div>
		<div class="divide"></div>
		<div>
			<div class="type">
				<p class="typeSign">*</p>
				<div class="typeFont">投诉类型</div>
				<div class="typeRemarks">(仅美鸦工作人员可见)</div>
			</div>
			<div @click="getState" class="typeChoice">
				<input type="text" v-model="isItem"/>
				<img src="../assets/complaint/xiajiantou.png"/>
			</div>
			<div class="type">
				<p class="typeSign">*</p>
				<div class="typeFont">您的联系电话</div>
				<div class="typeRemarks">(仅美鸦工作人员可见)</div>
			</div>
			<div class="telephone">
				<input type="text" v-model="isTelephone" @input="judge($event)"/>
				<img src="../assets/complaint/shanchu.png" v-show="empty"/>
			</div>
			<div class="type">
				<div class="typeFont">详细描述</div>
				<div class="typeRemarks">(仅美鸦工作人员可见)</div>
			</div>
			<textarea class="detailed" placeholder="请输入详细内容"></textarea>
		</div>
		<bigButton :content='isContent' :passWidth='isPassWidth' :passHeight='isPassHeight' :color='isColor' class='bigBtn'></bigButton>
		<Option :state='isState' @toIsState='getIsState' @toItem='getItem'></Option>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'
	import bigButton from '../components/bigButton.vue'
	import Option from '../components/option.vue'
	
	export default{
		data(){
			return {
				isMsg:'投诉',
				business:[],
				businessImg:'',
				businessName:'',
				isContent:'提交',
				isPassWidth:650,
				isPassHeight:97,
				isColor:'linear-gradient(173deg, #EF3729 0%, #4DBBFA 0%, #FF7157 0%, #FF1818 100%)',
				isState:false,
				isItem:'',
				isTelephone:'',
				empty:false
			}
		},
		components:{
			headJump,
			bigButton,
			Option
		},
		created() {
			this.$route.query.id
			axios.get('businessIndex.json')
				.then(response =>{
					this.business = response.data
					this.business.forEach(item =>{
						if(this.$route.query.id == item.id){
							this.businessImg = require('@/assets/index/' + item.img)
							this.businessName = item.name
						}
					})
				})
		},
		methods:{
			getState(){
				this.isState = true
			},
			getIsState(){
				this.isState = false
			},
			getItem(e){
				this.isItem = e
			},
			judge(event){
				if(event.target.value){
					this.empty = true
				}else{
					this.empty = false
				}
			}
		}
	}
</script>

<style scoped>
	.line{
		width: 100%;
		height: 0.01rem;
		background-color: #000000;
		opacity: 0.09;
	}
	.business{
		display: flex;
	}
	.businessImg{
		width: 0.96rem;
		height: 0.96rem;
		margin: 0.24rem 0.35rem 0.24rem 0.51rem;
	}
	.businessName{
		font-size: 0.32rem;
		font-weight: bold;
		margin-top: 0.56rem;
	}
	.divide{
		width: 100%;
		height: 0.24rem;
		background-color: #f5f5f5;
	}
	.type{
		display: flex;
		margin: 0.38rem 0.5rem 0 0.5rem;
	}
	.typeSign{
		font-size: 0.28rem;
		font-weight: 500;
		color: #ff1818;
	}
	.typeFont{
		font-size: 0.28rem;
		font-weight: 500;
		margin: 0 0.21rem 0.18rem 0.07rem;
	}
	.typeRemarks{
		font-size: 0.24rem;
		color: #999;
		font-weight: 500;
	}
	.typeChoice{
		position: relative;
	}
	.typeChoice input{
		width: 6.25rem;
		height: 0.88rem;
		border: 0.01rem solid rgba(0,0,0,0.16);
		margin: 0 auto;
		outline: none;
		padding-left: 0.25rem;
		font-size: 0.32rem;
	}
	.typeChoice img{
		width: 0.48rem;
		height: 0.44rem;
		position: absolute;
		right: 0.55rem;
		top: 0.27rem;
	}
	.telephone{
		position: relative;
	}
	.telephone input{
		width: 6.25rem;
		height: 0.88rem;
		margin: 0 auto;
		border: 0.01rem solid rgba(0,0,0,0.16);
		font-size: 0.32rem;
		color: #333;
		padding-left: 0.25rem;
		outline: none;
	}
	.telephone img{
		width: 0.32rem;
		height: 0.32rem;
		opacity: 0.2;
		position: absolute;
		right: 0.65rem;
		top: 0.27rem;
	}
	.detailed{
		display: block;
		width: 6.1rem;
		height: 2.23rem;
		margin: 0 auto 0.99rem;
		padding: 0.17rem 0.2rem;
		border: 0.01rem solid rgba(0,0,0,0.16);
		resize:none;
		font-size: 0.24rem;
		outline: none;
	}
	.bigBtn{
		font-size: 0.36rem;
		color: #fff;
		font-weight: 500;
		line-height: 0.97rem;
	}
</style>
