<template>
	<div class="box" @click="handleSwi" :style="{backgroundColor:flag?colortxt:''}">
		<div :style="{left:num/100+'rem'}" class="ball"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				colortxt:'red'
			}
		},
		methods: {
			handleSwi() {
				this.$emit('toSwitch')
			}
		},
		props: {
			flag: {
				type: Boolean,
				default: true
			},
			num:{
				type: Number,
				default: 0
			}
		},
		created() {
			// if (this.passFlag) {
			// 	this.num = 44
			// } else {
			// 	this.num = 0
			// }
			
		},
	}
</script>

<style scoped>
	.box {
		width: 0.88rem;
		height: 0.48rem;
		border: 0.01rem solid rgba(0,0,0,0.1);
		border-radius: 0.5rem;
		position: relative;
		transition: 1s;
		background-color: #e1e1e1;
	}

	.ball {
		width: 0.45rem;
		height: 0.45rem;
		border: 0.012rem solid rgba(0,0,0,0.1);
		border-radius: 50%;
		position: absolute;
		top: 0;
		transition: 1s;
		z-index: 99;
		background-color: white;
	}
</style>
