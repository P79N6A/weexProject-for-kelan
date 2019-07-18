<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<div class="item">
				<div class="top">
					<text class="producName">理财存款</text>
					<image class="img" src="./imgs/img_right.png"></image>
				</div>
				<div class="itemsBox">
					<div class="items">
						<text class="itemName">余额</text>
						<text class="itemValue1">898元</text>
					</div>
					<div class="items">
						<text class="itemName">利率</text>
						<text class="itemName">1.48%</text>
					</div>
					<div class="items">
						<text class="itemName">购买日期</text>
						<text class="itemName">2019-01-01</text>
					</div>
					<div class="items">
						<text class="itemName">到期日期</text>
						<text class="itemName">2019-05-01</text>
					</div>
				</div>
			</div>
			
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar
		},
		data(){
			return {
				title: "子账户详情",
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
				}
			}
		},
		created(){
			
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.item{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.top{
		width: 720px;
		height: 80px;
		margin-left: 30px;
		padding-right: 30px;
		border-bottom-width: 1px;
		border-bottom-color:#EEEEEE;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.items{
		width: 720px;
		height: 40px;
		margin-left: 30px;
		padding-right: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.producName{
		font-size: 28px;
		color:rgb(105,105,105) ;
	}
	.img{
		width: 17px;
		height: 30px;
	}
	.itemName{
		font-size: 24px;
		color: rgb(51,51,51);
	}
	.itemValue1{
		font-size: 24px;
		color: #ED2C2C;
	}
	.itemsBox{
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>