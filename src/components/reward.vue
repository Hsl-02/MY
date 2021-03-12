<template>
	<div class="box" v-show='hide'>
		<div class="overburden"></div>
		<img src="../assets/paySuccess/cha.png" class="cancel" @click="out"/>
		<div class="banner">
			<div @click="$emit('toChange')">
				<div class="msgA">{{msgA}}</div>
				<div :style="{fontSize:passFont/100+'rem'}" class="msgB">{{msgB}}</div>
				<div class="msgC" :style="{color:'#'+passColor}">{{msgC}}</div>
			</div>
			<div class="btnBox">
				<div class="btn">查看奖励</div>
				<div class="btn" @click="$emit('toShare')">分享赚更多</div>
			</div>
			<div class="other" v-show="otherHide">
				<div class="otherShare">
					<img src="../assets/paySuccess/weixin.png"/>
					<div>分享到好友</div>
				</div>
				<div class="otherShare">
					<img src="../assets/paySuccess/pengyouquan.png"/>
					<div>生成图片</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			msgA:{
				type:String,
				default:''
			},
			msgB:{
				type:String,
				default:''
			},
			msgC:{
				type:String,
				default:''
			},
			passFont:{
				type:Number,
				default:120
			},
			passColor:{
				type:String,
				default:'fff'
			},
			hide:{
				type:Boolean,
				default:false
			},
			otherHide:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			out(){
				this.$emit('toOut')
			}
		}
	}
</script>

<style scoped>
	.box{
		position: fixed;
		top: 0;
	}
	.overburden{
		width: 100vh;
		height: 100vh;
		background-color: rgba(0,0,0,0.4);
	}
	.banner{
		position: fixed;
		top: 3.22rem;
		left: 0.92rem;
		width: 5.62rem;
		height: 7rem;
		background: linear-gradient(0deg, #F80101 0%, #FF772B 100%);
		border-radius: 0.4rem;
		padding-top: 2.08rem;
	}
	.msgA{
		font-size: 0.36rem;
		font-weight: bold;
		color: #fff;
		text-align: center;
		margin-bottom: 0.33rem;
	}
	.msgB{
		font-weight: bold;
		color: #fff;
		text-align: center;
	}
	.msgC{
		font-size: 0.28rem;
		margin-top: 0.44rem;
		text-align: center;
		margin: 0.44rem 0.4rem 0;
	}
	.cancel{
		position: fixed;
		top: 2.34rem;
		right: 0.92rem;
		width: 0.64rem;
		height: 0.64rem;
		opacity: 0.6;
	}
	.btnBox{
		display: flex;
		justify-content: space-around;
	}
	.btn{
		width: 2.05rem;
		height: 0.72rem;
		font-size: 0.28rem;
		color: #f13216;
		background-color: #ffee78;
		border-radius: 0.36rem;
		text-align: center;
		line-height: 0.72rem;
		margin-top: 0.91rem;
		font-weight: 700;
	}
	.otherShare img{
		width: 0.70rem;
		height: 0.70rem;
	}
	.otherShare div{
		font-size: 0.24rem;
		color: #fff;
	}
	.other{
		width: 5.62rem;
		background-color: #f80101;
		display: flex;
		justify-content: space-around;
		margin-top: 0.1rem;
		border-radius: 0 0 0.4rem 0.4rem;
	}
	.otherShare img{
		width: 0.70rem;
		height: 0.70rem;
		margin: 0 auto 0.16rem;
	}
	.otherShare div{
		font-size: 0.24rem;
		color: #fff;
		margin-bottom: 0.31rem;
	}
</style>
