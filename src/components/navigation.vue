<template>
	<div class="box">
		<div class="line"></div>
		<ul>
			<li v-if='shouye' @click="$emit('jumpIndex')">
				<img src="../assets/icon_rblt8syta4/shouye.png"/>
				<div>首页</div>
			</li>
			<li v-else>
				<img src="../assets/icon_rblt8syta4/shouyePass.png"/>
				<div style="color: red;">首页</div>
			</li>
			<li v-if='ditu' @click="$emit('jumpMap')">
				<img src="../assets/icon_rblt8syta4/ditu.png"/>
				<div>地图</div>
			</li>
			<li v-else>
				<img src="../assets/icon_rblt8syta4/dituPass.png"/>
				<div style="color: red;">地图</div>
			</li>
			<li v-if='jinbi' @click="$emit('jumpShop')">
				<img src="../assets/icon_rblt8syta4/jinbi.png"/>
				<div>金币商城</div>
			</li>
			<li v-else>
				<img src="../assets/icon_rblt8syta4/jinbiPass.png"/>
				<div style="color: red;">金币商城</div>
			</li>
			<li v-if='zhangben' @click="$emit('jumpAccount')">
				<img src="../assets/icon_rblt8syta4/zhangben.png"/>
				<div>账本</div>
			</li>
			<li v-else>
				<img src="../assets/icon_rblt8syta4/zhangbenPass.png"/>
				<div style="color: red;">账本</div>
			</li>
			<li v-if='wode' @click="$emit('jumpUser')">
				<img src="../assets/icon_rblt8syta4/wode.png"/>
				<div>我的</div>
			</li>
			<li v-else>
				<img src="../assets/icon_rblt8syta4/wodePass.png"/>
				<div style="color: red;">我的</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:{
			shouye:{
				type:Boolean,
				default:true
			},
			ditu:{
				type:Boolean,
				default:true
			},
			jinbi:{
				type:Boolean,
				default:true
			},zhangben:{
				type:Boolean,
				default:true
			},wode:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style scoped>
	ul{
		display: flex;
		padding: 0 0.57rem 0.07rem 0.57rem;
	}
	li{
		flex: 20%;
	}
	li div{
		font-size: 0.22rem;
		font-weight: 500;
		text-align: center;
	}
	li img{
		width: 0.36rem;
		height: 0.36rem;
		margin: auto;
		margin-bottom: 0.14rem;
		margin-top: 0.18rem;
	}
	.line{
		height: 0.02rem;
		width: 100%;
		background-color: #000;
		opacity: 0.06;
	}
	.box{
		background-color: #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
	}
</style>
