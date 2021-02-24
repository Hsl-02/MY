<template>
	<div class="bigBox">
		<div class="box">
			<div class="line" :style="{width:val/100*1.18+'rem',background:color}"></div>
		</div>
	<div class="font">{{val}}%</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			val: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: 'green'
			}
		}
	}
</script>

<style scoped>
	.box {
		
		width: 1.18rem;
		height: 0.12rem;
		border: 0.01rem solid #000000;
		border-radius: 0.5rem;
		overflow: hidden;
		margin-top: 0.05rem;
	}

	.line {
		height: 0.2rem;
		border-radius: 0.24rem 0 0 0.5rem;
		color: white;
	}
	.font{
		font-size: 0.2rem;
		color: #333;
		margin-left: 0.19rem;
	}
	.bigBox{
		display: flex;
	}
</style>

