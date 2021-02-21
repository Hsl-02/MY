<template>
	<div :style="{height:385/100 + 'rem'}" class="rollScreen_container" id="rollScreen_container">
		<ul class="rollScreen_list" :style={transform:transform} :class="{rollScreen_list_unanim:num===0}">
			<li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index :style="{height:height+'px'}">
				<img :src="item.img" class="listImg" />
				<div class="listFont">{{item.name}}</div>
				<div class="listOther">
					<div class="listOtherMoney">+￥{{item.money}}.00</div>
					<div class="listOtherTime">{{item.time}}</div>
				</div>
			</li>
			<li class="rollScreen_once" v-for="(item,index) in contentArr" :key=index+contentArr.length :style="{height:height+'px'}">
				<img :src="item.img" class="listImg" />
				<div class="listFont">{{item.name}}</div>
				<div class="listOther">
					<div class="listOtherMoney">+￥{{item.money}}.00</div>
					<div class="listOtherTime">{{item.time}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		props: {
			height: {
				default: 64,
				type: Number
			},
			lineNum: {
				default: 5,
				type: Number
			}
		},
		data: function() {
			return {
				contentArr: [],
				num: 0
			}
		},
		computed: {
			transform: function() {
				return 'translateY(-' + this.num * this.height + 'px)'
			}
		},
		created: function() {
			let _this = this
			setInterval(function() {
					if (_this.num !== _this.contentArr.length) {
						_this.num++
					} else {
						_this.num = 0
					}
				}, 3000),
				axios.get('invitationList.json')
				.then(response => {
					this.contentArr = response.data
					this.contentArr.forEach(item => {
						item.img = require('@/assets/invitation/' + item.img)
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
	.rollScreen_container {
		display: inline-block;
		position: relative;
		overflow: hidden;
		border-radius: 0.2rem;
		padding: 0 0.43rem 0 0.23rem;
		width: 99.9%;
		border: 0.01rem solid #ffd1c3;
		margin-bottom: 0.74rem;
	}
	

	.rollScreen_list {
		transition: 1s linear;
	}

	.rollScreen_list_unanim {
		transition: none
	}
	.rollScreen_once{
		display: flex;
		justify-content: space-between;
		padding-top: 0.1rem;
	}

	.listImg {
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
	}
	.listFont{
		font-size: 0.26rem;
		color: #FFE5CF;
		padding-top: 0.4rem;
		font-weight: 500;
		margin-right: 2.3rem;
	}
	.listOther{
		padding-top: 0.3rem;
	}
	.listOtherMoney{
		font-size: 0.26rem;
		color: #FFE5CF;
	}
	.listOtherTime{
		font-size: 0.22rem;
		opacity: 0.6;
		color: #FFE5CF;
	}
</style>
