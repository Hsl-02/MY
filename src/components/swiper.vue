<template>
	<div class="banner">
		<div>
			<img :src="dataList[currentIndex]" />
		</div>
		<div class="page" v-if="this.dataList.length > 1">
			<ul>
				<li v-for="(item,index) in dataList" :key='index' @click="gotoPage(index)" :class="{'current':currentIndex == index}">
					{{index+1}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				timer: null
			}
		},
		props: ["dataList"],
		methods: {
			gotoPage(index) {
				this.currentIndex = index;
			},
			runInv() {
				this.timer = setInterval(() => {
					this.gotoPage(this.nextIndex)
				}, 2000)
			}
		},
		mounted() {
			this.runInv();
		},
		computed: {
			//上一张
			prevIndex() {
				if (this.currentIndex == 0) {
					return this.dataList.length - 1;
				} else {
					return this.currentIndex - 1;
				}
			},
			//下一张
			nextIndex() {
				if (this.currentIndex == this.dataList.length - 1) {
					return 0;
				} else {
					return this.currentIndex + 1;
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	ul li {
		list-style: none;
		float: left;
		width: 0.3rem;
		height: 0.4rem;
		line-height: 0.4rem;
		text-align: center;
		cursor: pointer;
		color: rgba(255, 255, 255, .8);
		font-size: 0.14rem;
	}

	.banner {
		max-width: 12rem;
		margin: 0 auto;
		position: relative;
		margin-top: 0.25rem;
	}

	.banner img {
		width: 95%;
		height: 3rem;
		display: block;
		margin: auto;
		border-radius: 0.32rem;
	}

	.banner .page {
		/* background: rgba(0, 0, 0, .5); */
		position: absolute;
		right: 0.37rem;
		bottom: 0;
		width: 90%;
	}

	.banner .page ul {
		float: right;
	}

	.current {
		color: #ff6700;
	}
</style>
