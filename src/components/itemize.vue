<template>
	<div>
		<ul class="itemUl">
			<li v-for="item in itemize" :key='item.id' class="itemLi" @click="jumpGoodsClassification(item.name)">
				<div :style="{background:item.color}" class="itemImg"><img :src="item.img" /></div>
				<p class="itemFont">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				itemize: []
			}
		},
		created: function() {
			axios.get('itemizeIndex.json')
				.then(response => {
					this.itemize = response.data
					this.itemize.forEach(item => {
						item.img = require('@/assets/index/' + item.img)
					})
				})
				.catch(error => {
					console.log(error)
					alert('网络错误，不能访问')
				})
		},
		methods: {
			jumpGoodsClassification(name) {
				this.$router.push(`/goodsClassification?name=${name}`)
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.itemImg {
		width: 0.88rem;
		height: 0.88rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.3rem;
		margin: auto;
	}

	.itemImg img {
		width: 0.48rem;
		height: 0.48rem;
	}

	.itemFont {
		font-size: 0.24rem;
		margin-top: 0.18rem;
		text-align: center;
	}

	.itemUl {
		display: flex;
		flex-wrap: wrap;
		padding: 0 0.33rem 0 0.31rem;
	}

	.itemLi {
		flex: 20%;
		margin-bottom: 0.35rem;
	}
</style>
