<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<text class="name">月月红存款产品</text>
				<text class="introduce1">1万(元)起存</text>
				<!--<text class="introduce2">低风险</text>-->
			</div>
		</div>
		<div class="center">
			<div class="item" v-for="(item,key) in list" :key="key" @click="depositBuy(item)">
				<div class="row">
					<text class="font1">{{item.Interest}}</text>
					<text class="font2">%</text>
					<text class="font3">利率</text>
				</div>
				<text class="font4">{{item.Term}}存期</text>
			</div>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		props:{
			list: {
				type: Array,
				default: () => []
			},
		},
		data(){
			return{
				
			}
		},
		created(){

		},
		methods:{
			depositBuy(item){
				this.$emit("depositBuy",item)
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.top_title {
		width: 750px;
		height: 98px;
		flex-direction: row;
		padding: 0 30px;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		margin-top: 20px;
		border-bottom-width: 1px;
		border-bottom-color:rgb(233,233,233) ;
	}
	
	.top_title_left {
		flex-direction: row;
		justify-content: space-between;
	}
	
	.name {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: rgb(57, 57, 57);
		margin-left: 5px;
	}
	
	.introduce1 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 10px;
		margin-top: 10px;
	}
	
	.introduce2 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 20px;
		margin-top: 10px;
	}
	.center{
		width: 750px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.item{
		width: 374px;
		height: 150px;
		padding-top: 34px;
		padding-bottom: 34px;
		padding-left: 100px;
		justify-content: space-between;
		background-color: #FFFFFF;
		margin-bottom: 1px;
	}
	.row{
		flex-direction: row;
		align-items: flex-end;
	}
	.font1{
		font-size: 36px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		font-weight: 700;
	}
	.font2{
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
	}
	.font3{
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(112, 112, 112);
		margin-left: 10px;
	}
	.font4{
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(51, 51, 51);
	}
</style>