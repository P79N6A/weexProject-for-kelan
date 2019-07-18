<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" 
			></mp-bar>
		<my-treasure style="background-color: #FFFFFF;"></my-treasure>
		<div class="big">
			<div class="top">
				<div class="top-box" @click="changeList">
					<image v-if="showleft" class="img" src="./imgs/finance/ycl1.png"></image>
					<image v-else class="img" src="./imgs/finance/ycl2.png"></image>
					<text class="font1">已成立产品</text>
				</div>
				<div style="width: 1px;height: 70px;background-color:#E7E7E7 ;"></div>
				<div class="top-box" @click="changeList">
					<image v-if="!showleft" class="img" src="./imgs/finance/dcl1.png"></image>
					<image v-else class="img" src="./imgs/finance/dcl2.png"></image>
					<text class="font1">待成立产品</text>
				</div>
			</div>
			<scroller style="flex: 1;">
				<finance-list :list="list"></finance-list>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import myTreasure from "@/components/finance/myFinance/myTreasure.vue";
	import financeList from "@/components/finance/myFinance/financeList.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			myTreasure,
			financeList
		},
		data() {
			return {
				title: "我的理财",
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/back.png",
				leftBtnStyle: {
					width: "40px",
					height: "40px"
				},
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				showleft:true,
				list:[
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					},
					{
						"title":"家商财富个人稳盈第93期人民币理财",
						"money":"12312",
						"time":"2019-02-25"
					}
				]
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			changeList(){
				if(this.showleft){
					this.showleft = false;
				}else{
					this.showleft = true;
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.big{
		flex: 1;
		margin-top: 20px;
	}
	.top{
		height: 100px;
		width: 750px;
		padding: 0px 70px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		border-bottom-width: 1px;
		border-bottom-color: #E7E7E7;
	}
	.top-box{
		flex-direction: row;
		align-items: center;
	}
	.img{
		width: 38px;
		height: 32px;
	}
	.font1{
		font-size: 32px;
		color: rgb(165,165,165);
		margin-left: 15px;
	}
	.item{
		width: 750px;
		height: 180px;
		background-color: #FFFFFF;
		margin-bottom: 20px;
	}
	.item-top{
		width: 720px;
		height: 90px;
		margin-left: 30px;
		border-bottom-width: 1px;
		border-bottom-color: #E7E7E7;
		padding-right: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.font2{
		font-family: PingFangSc-Regular;
		font-size: 30px;
		color: rgb(51, 51, 51);
		font-weight: 500;
	}
	.rightImg {
		width: 15px;
		height: 25px;
	}
	.item-bottom{
		width: 750px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.smallImg{
		width: 24px;
		height: 24px;
	}
	.item-bottom-box{
		height: 90px;
		flex-direction: row;
		align-items: center;
	}
	.font3{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#9DA5B5 ;
		margin-left: 10px;
	}
	.font4{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#F24753 ;
		margin-left: 10px;
	}
	.font5{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#757575 ;
		margin-left: 10px;
	}
</style>
