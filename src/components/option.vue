<template>
	<div class="box" v-show="state">
		<div class="shadow"></div>
		<div class="option">
			<p class="optionTitle">请选择您的投诉类型</p>
			<ul>
				<li v-for="(item,index) in reason" :key='index'>{{item}}</li>
			</ul>
			<div class="btn">
				<div class="btnTrue">确定</div>
				<div class="btnFalse">取消</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				reason:['环境、服务差','商家信息有误','违规违法','其他'],
			}
		},
		props:{
			state:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.box{
		position: fixed;
		top: 0;
	}
	.shadow{
		width: 100vh;
		height: 100vh;
		background-color: #000000;
		opacity: 0.5;
	}
	.option{
		width: 7.5rem;
		height: 4.78rem;
		position: fixed;
		bottom: 0;
		background-color: #fff;
	}
	.optionTitle{
		font-size: 0.5rem;
		text-align: center;
		margin-top: 0.2rem;
	}
	.option ul{
		display: flex;
		flex-wrap: wrap;
		margin: 0.3rem auto 0;
	}
	.option li{
		font-size: 0.36rem;
		border: 0.01rem solid rgba(0,0,0,0.3);
		padding: 0.1rem;
		border-radius: 0.2rem;
		margin: 0.2rem 0.2rem;
		background-color: rgba(0,0,0,0.16);
	}
	.btn{
		display: flex;
		justify-content: space-around;
		font-size: 0.5rem;
		margin-top: 0.5rem;
	}
	.btnTrue{
		border: 0.01rem solid #000000;
		padding: 0.2rem 1rem;
		background-color: rgba(0,0,0,0.1);
	}
	.btnFalse{
		border: 0.01rem solid #000000;
		padding: 0.2rem 1rem;
		background-color: rgba(0,0,0,0.1);
	}
</style>
