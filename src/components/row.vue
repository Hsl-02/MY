<template>
	<div @click="$emit('toClick')">
		<div class="font">{{msg}}</div>
		<div class="line" v-show="chose"></div>
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
			},
			chose:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.font{
		font-size: 0.32rem;
		color: #fff;
	}
	.line{
		width: 0.28rem;
		height: 0.06rem;
		background: #FFFFFF;
		border-radius: 0.03rem;
		margin: 0.18rem auto 0;
	}
</style>
