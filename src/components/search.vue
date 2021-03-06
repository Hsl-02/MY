<template>
	<div class="inpt" :style="{width:passWidth/100+'rem',height:passHeight/100+'rem',paddingLeft:passPaddingLeft/100+'rem'}" @click="jump">
		<img src="../assets/index/sousuo.png" class="boxImg" />
		<input @keydown="calAge($event)" type="text" :placeholder="msg" class="boxInpt" @click="ipt" @blur="blur" v-model="val" :style="{width:passWidth/100 - passPaddingLeft/100 - 0.3 +'rem'}"/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				val:''
			}
		},
		props: {
			msg: {
				type: String,
				default: ''
			},
			cancel: {
				type: Boolean,
				default: false
			},
			passWidth: {
				type: Number,
				default: 0
			},
			passHeight: {
				type: Number,
				default: 0
			},
			passPaddingLeft:{
				type: Number,
				default: 0
			}
		},
		watch:{
			cancel(newval){
				if(newval){
					this.val = ''
				}
				this.$emit('toCancel')
			}
		},
		methods:{
			calAge(e){
				let evt = window.event || e;
				if (evt.keyCode == 13) {
					//回车后要干的业务代码
					// console.log(this.val);
					this.$emit('enterInput',this.val)
				}
			},
			ipt(){
				this.$emit('toInpt')
			},
			blur(){
				if(!this.val){
					this.$emit('toBlur')
				}
			},
			jump(){
				this.$emit('toJump')
			}
		}
	}
</script>

<style scoped>
	.boxImg {
		width: 0.28rem;
		height: 0.28rem;
		margin:auto 0.02rem auto 0;
	}

	.boxInpt {
		border: none;
		/* width: 2.8rem; */
		background-color: transparent;
		font-weight: 500;
		outline: none;
	}

	.inpt {
		background: rgba(0, 0, 0, 0.16);
		border-radius: 32px;
		display: flex;
	}
	input::-webkit-input-placeholder {
	/* WebKit browsers */
	color: #ccc;
	}
</style>
