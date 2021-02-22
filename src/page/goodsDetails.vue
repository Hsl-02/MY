<template>
	<div>
		<div class="top">
			<headJump :msg='isMsg'></headJump>
			<img :src="imgsrc" class="bannerImg" />
			<div class="goods">
				<div class="goodsName">{{name}}</div>
				<div class="goodsOther">
					<div class="goodsOtherLabel">
						<img src="../assets/goodsDetails/biaoqian.png"/>
						<div>美容美发</div>
					</div>
					<div class="goodsOtherRedu">
						<img src="../assets/index/redu.png"/>
						<div>热度 44</div>
					</div>
					<div class="complaint">
						<img src="../assets/goodsDetails/tousu.png"/>
						<div>投诉</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import headJump from '../components/headJump.vue'

	export default {
		data() {
			return {
				isMsg: '商户详情',
				goods: [],
				imgsrc: '',
				name: ''
			}
		},
		components: {
			headJump
		},
		created() {
			this.$route.query.id
			axios.get('businessIndex.json')
				.then(response => {
					this.goods = response.data
					this.goods.forEach(item => {
						if (this.$route.query.id == item.id) {
							this.imgsrc = require('@/assets/index/' + item.img)
							this.name = item.name
						}
					})
				})
				.catch(error => {
					console.log(error)
					alert('网络错误，不能访问')
				})

		}
	}
</script>

<style scoped>
	.top{
		position: relative;
	}
	.bannerImg {
		width: 7.5rem;
		height: 2.8rem;
	}

	.goods {
		width: 7.18rem;
		height: 1.56rem;
		margin-left: 0.16rem;
		box-shadow: 0px 2px 35px 0px rgba(0, 92, 178, 0.13);
		border-radius: 0.16rem;
		padding: 0.29rem 0.35rem 0.34rem 0.33rem;
		background-color: #fff;
		position: absolute;
		top: 3.3rem;
	}

	.goodsName {
		font-size: 0.36rem;
	}
	.goodsOther{
		display: flex;
	}
	.goodsOtherLabel{
		display: flex;
		margin-top: 0.37rem;
	}
	.goodsOtherLabel img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.14rem;
	}
	.goodsOtherLabel div{
		font-size: 0.24rem;
		color: #f98c17;
		margin-top: 0.05rem;
		margin-right: 0.61rem;
	}
	.goodsOtherRedu{
		display: flex;
		margin-top: 0.36rem;
	}
	.goodsOtherRedu img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.09rem;
	}
	.goodsOtherRedu div{
		font-size: 0.24rem;
		color: #f98c17;
		margin-top: 0.05rem;
	}
	.complaint{
		display: flex;
		margin-top: 0.42rem;
		margin-left: 2.45rem;
	}
	.complaint img{
		width: 0.25rem;
		height: 0.27rem;
		margin-right: 0.08rem;
	}
	.complaint div{
		font-size: 0.2rem;
		color: #c1c1c1;
		margin-top: 0.04rem;
	}
</style>
