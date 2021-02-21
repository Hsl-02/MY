<template>
	<div>
		<ul>
			<li v-for="owner in businessFirst" :key='owner.id' class="shopLi">
				<img :src="owner.img" class="shopImg" />
				<div class="shopDetails">
					<div class="shopDetailsName">{{owner.name}}</div>
					<div class="shopDetailsDiv">
						<div class="shopDetailsDivPopularity">
							<img src="../assets/index/redu.png" />
							<div>44</div>
						</div>
						<div class="shopDetailsDivDistance">
							<img src="../assets/index/juli.png" />
							<div>{{owner.distance}}m</div>
						</div>
					</div>
					<div class="shopDetailsDivOther">
						<div class="shopDetailsDivOtherFree" v-if="owner.free">免单指数 {{owner.free}}%</div>
						<div class="shopDetailsDivOtherDeduction" v-if="owner.deduction">金币抵扣 {{owner.deduction}}%</div>
					</div>
				</div>
				<div class="other">
					<div class="otherNum">{{owner.num}}</div>
					<div class="otherFont">人免单</div>
				</div>
			</li>
		</ul>
		<div v-show="flag" class="load">
			<img src="../assets/index/load.png" />
			<div>加载中...</div>
		</div>
		<div v-show="flag2" class="isLoad">已经到底了</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				business: [],
				num: 4,
				businessFirst: [],
				flag: false,
				flag2: false
			}
		},
		created: function() {
			axios.get('businessIndex.json')
				.then(response => {
					this.business = response.data
					this.business.forEach(item => {
						item.img = require('@/assets/index/' + item.img)
					})
					if (this.business.length >= this.num) {
						this.businessFirst = this.business.slice(0, this.num)
						this.num += 4
						this.flag = true
					}
					this.businessFirst.forEach(owner => {
						if (owner.distance >= 1000) {
							owner.distance = owner.distance / 1000 + 'k'
						}
					})
					this.businessFirst.forEach(owner => {
						if (owner.num >= 10000) {
							owner.num = owner.num / 10000 + '万'
						}
					})
				})
				.catch(error => {
					console.log(error)
					alert('网络错误，不能访问')
				})
			let that = this;
			window.onscroll = function() {
				// scrollTop 滚动条滚动时，距离顶部的距离
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				// windowHeight 可视区的高度
				var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
				// scrollHeight 滚动条的总高度
				var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				// 滚动条到底部的条件
				if (scrollTop + windowHeight >= scrollHeight - 10) {
					// 加载数据
					setTimeout(() => {
						if (that.business.length == that.num) {
							that.businessFirst = that.business.slice(0, this.num)
							that.num += 4
							that.flag = false
							that.flag2 = true

						}
						
						that.businessFirst.forEach(owner => {
							if (owner.distance >= 1000) {
								owner.distance = owner.distance / 1000 + 'k'
							}
						})
						that.businessFirst.forEach(owner => {
							if (owner.num >= 10000) {
								owner.num = owner.num / 10000 + '万'
							}
						})

					}, 2000)
				}
			}
		},
	}
</script>

<style scoped>
	.shopLi {
		display: flex;
		padding: 0.32rem 0;
	}

	.shopImg {
		width: 1.79rem;
		height: 1.32rem;
		border-radius: 0.08rem;
	}

	.shopDetailsName {
		font-size: 0.3rem;
		margin: 0.07rem 0 0.19rem 0.25rem;
		font-weight: bold;
		text-align: left;
	}

	.shopDetailsDiv {
		display: flex;
	}

	.shopDetailsDivPopularity {
		display: flex;
		margin-left: 0.28rem;
		margin-right: 0.5rem;
	}

	.shopDetailsDivPopularity img {
		width: 0.2rem;
		height: 0.24rem;
		margin-right: 0.06rem;
	}

	.shopDetailsDivPopularity div {
		font-size: 0.24rem;
		color: #F98C17;
	}

	.shopDetailsDivDistance {
		display: flex;
	}

	.shopDetailsDivDistance img {
		width: 0.19rem;
		height: 0.24rem;
		margin-right: 0.06rem;
	}

	.shopDetailsDivDistance div {
		font-size: 0.24rem;
		color: #999;
	}

	.other {
		width: 1.32rem;
		height: 1.32rem;
		border: 0.02rem solid #FF2222;
		padding-top: 0.34rem;
		margin-left: auto;
		text-align: center;
	}

	.otherNum {
		font-size: 0.36rem;
		color: #FF1818;
		margin-bottom: 0.08rem;
	}

	.otherFont {
		font-size: 0.24rem;
		color: #999999;
	}

	.shopDetailsDivOther {
		display: flex;
		margin-top: 0.24rem;
	}

	.shopDetailsDivOtherFree {
		width: 1.51rem;
		height: 0.3rem;
		font-size: 0.2rem;
		margin: 0 0 0 0.23rem;
		background-color: rgba(255, 0, 0, 0.1);
		color: #E60012;
		border-radius: 0.02rem;
		text-align: center;
		line-height: 0.3rem;
	}

	.shopDetailsDivOtherDeduction {
		width: 1.51rem;
		height: 0.3rem;
		font-size: 0.2rem;
		margin-left: 0.2rem;
		background-color: rgba(255, 255, 0, 0.2);
		color: #F98C17;
		border-radius: 0.02rem;
		text-align: center;
		line-height: 0.3rem;
	}

	.load {
		display: flex;
		justify-content: center;
		font-size: 0.24rem;
		font-weight: 500;
	}

	.load img {
		height: 0.3rem;
		width: 0.3rem;
	}

	.isLoad {
		font-size: 0.24rem;
		font-weight: 500;
		text-align: center;
	}
</style>
