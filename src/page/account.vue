<template>
	<div>
		<div class="title">账本</div>
		<div class="content">
			<div class="contentTitle">
				<row :msg='rowFirstMsg' :chose="rowFirstChose" @toClick='rowFirstClick'></row>
				<row :msg='rowSecondMsg' :chose="rowSecondChose" @toClick='rowSecondClick'></row>
				<row :msg='rowThirdMsg' :chose="rowThirdChose" @toClick='rowThirdClick'></row>
			</div>
			<div>
				
			</div>
		</div>
		
		<navigation :zhangben='isZhangben' @jumpIndex='jumpIndex'></navigation>
	</div>
</template>

<script>
	import axios from 'axios';
	import navigation from '../components/navigation.vue'
	import row from '../components/row.vue'
	
	export default{
		data(){
			return {
				isZhangben:false,
				rowFirstMsg:'全部',
				rowSecondMsg:'待奖励',
				rowThirdMsg:'已奖励',
				rowFirstChose:true,
				rowSecondChose:false,
				rowThirdChose:false,
				business:[],
				businessImg:'',
				businessName:''
			}
		},
		components:{
			navigation,
			row
		},
		methods:{
			jumpIndex(){
				this.$router.push('/')
			},
			rowFirstClick(){
				this.rowFirstChose=true,
				this.rowSecondChose=false,
				this.rowThirdChose=false
			},
			rowSecondClick(){
				this.rowFirstChose=false,
				this.rowSecondChose=true,
				this.rowThirdChose=false
			},
			rowThirdClick(){
				this.rowFirstChose=false,
				this.rowSecondChose=false,
				this.rowThirdChose=true
			}
		},
		created() {
			this.$route.query.id
			axios.get('businessIndex.json')
				.then(response => {
					this.business = response.data
					this.business.forEach(item => {
						if (this.$route.query.id == item.id) {
							this.businessImg = require('@/assets/index/' + item.img)
							this.businessName = item.name
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
	.title{
		padding-top: 0.36rem;
		text-align: center;
		font-size: 0.36rem;
		background-color: #e60012;
		color: #fff;
		padding-bottom: 0.2rem;
		font-weight: 500;
	}
	.contentTitle{
		display: flex;
		justify-content: space-around;
		background-color: #e60012;
		padding-top: 0.3rem;
		padding-bottom: 0.12rem;
	}
</style>
