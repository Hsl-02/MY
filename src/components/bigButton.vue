<template>
	<div class="btn" :style="{width:passWidth/100+'rem',height:passHeight/100+'rem',background:color}">{{content}}</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			content: {
				type: String,
				default: ''
			},
			passWidth: {
				type: Number,
				default: 0
			},
			passHeight: {
				type: Number,
				default: 0
			},
			color: {
				type: String,
				default: 'red'
			}
		}
	}
</script>

<style scoped>
	.btn{
		border-radius: 0.5rem;
		text-align: center;
		margin: auto;
	}
</style>
