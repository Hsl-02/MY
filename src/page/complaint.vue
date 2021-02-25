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
			<div class="typeChoice">
				<img src="../assets/complaint/xiajiantou.png"/>
			</div>
			<div class="type">
				<p class="typeSign">*</p>
				<div class="typeFont">您的联系电话</div>
				<div class="typeRemarks">(仅美鸦工作人员可见)</div>
			</div>
			<input type="text" class="telephone"/>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'
	
	export default{
		data(){
			return {
				isMsg:'投诉',
				business:[],
				businessImg:'',
				businessName:''
			}
		},
		components:{
			headJump
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
		width: 6.5rem;
		height: 0.88rem;
		border: 0.01rem solid rgba(0,0,0,0.16);
		margin: 0 auto;
		position: relative;
	}
	.typeChoice img{
		width: 0.48rem;
		height: 0.44rem;
		position: absolute;
		right: 0.2rem;
		top: 0.2rem;
	}
	.telephone{
		width: 6.5rem;
		height: 0.88rem;
		margin: 0 auto;
		border: 0.01rem solid rgba(0,0,0,0.16);
		font-size: 0.32rem;
		color: #333;
		padding-left: 0.25rem;
	}
</style>
