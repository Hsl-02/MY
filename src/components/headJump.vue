<template>
	<div class="top">
		<img src="../assets/position/zuojiantou.png" @click="jump"/>
		<div>{{msg}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			msg:{
				type:String,
				default:''
			}
		},
		methods:{
			jump(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.top{
		display: flex;
		margin-top: 0.36rem;
	}
	.top img{
		height: 0.6rem;
		margin: 0 2.35rem 0 0.2rem;
	}
	.top div{
		font-size: 0.36rem;
		line-height: 0.7rem;
		font-weight: 500;
		margin-left: 0.25rem;
	}
</style>
