<template>
	<div>
		<div :class="flagShow?'overburden':'overburden closeMenban'" :style="{display:flag?'block':'none'}"></div>
		<div :class="flagShow?'box':'box close'" :style="{display:flag?'block':'none'}">
			<div>{{msg}}</div>
			<div style="display: flex;justify-content: space-between;">
				<button @click="confirm" v-if='showA'>{{showAMsg}}</button>
				<button :disabled="disCancle?'disabled':false" @click="cancel" v-if='showB'>{{showBMsg}}</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				flagShow: true
			}
		},
		props: {
			msg: {
				type: String,
				default: ''
			},
			showAMsg: {
				type: String,
				default: ''
			},
			showBMsg: {
				type: String,
				default: ''
			},
			flag: {
				type: Boolean,
				default: false
			},
			showA: {
				type: Boolean,
				default: true
			},
			showB: {
				type: Boolean,
				default: true
			},
			disCancle: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			cancel() {
				this.flagShow = false
				setTimeout(() => {
					this.flagShow = true
					this.$emit('toCancel')
				}, 500)
			},
			confirm(){
				this.$emit('toConfirm')
			}
		}
	}
</script>

<style scoped>
	.overburden {
		width: 100%;
		height: 100vh;
		background-color: black;
		opacity: 0.5;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		display: none;
		animation: opacity1 0.3s;
	}

	.box {
		align-self: center;
		width: 60%;
		background-color: white;
		padding: 0.2rem;
		position: absolute;
		left: 40%;
		top: 50%;
		transform: translate(-1.5rem,-1.25rem);
		transform-origin: 0 0;
		display: none;
		animation: zoomBig 0.3s;
		border-radius: 0.5rem;
	}

	.box button {
		padding: 0.1rem;
		margin: 0.4rem auto;
	}

	.box div {
		margin-top: 50px;
		text-align: center;
	}

	.close {
		animation: zoom 0.3s;
		animation-fill-mode: forwards;
	}
	
	.closeMenban{
		animation: opacity0 0.3s;
		animation-fill-mode: forwards;
	}
	
	@keyframes zoom {
		0% {
			transform: scale(1, 1) translate(-1.5rem, -1.25rem);
		}
	
		100% {
			transform: scale(0, 0) translate(-1.50rem, -1.25rem);
		}
	}
	
	@keyframes zoomBig {
		0% {
			transform: scale(0, 0) translate(-1.50rem, -1.25rem);
		}

		100% {
			transform: scale(1, 1) translate(-1.50rem, -1.25rem);
		}
	}

	@keyframes opacity0 {
		0% {
			opacity: 0.5;
		}

		100% {
			opacity: 0;
		}
	}
	@keyframes opacity1 {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 0.5;
		}
	}
</style>
