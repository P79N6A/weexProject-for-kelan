<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			:bgUrl="bgUrl"
			:bgStyle="bgStyle"></mp-bar>
		<scroller style="flex: 1;">
			<image class="bgimg" src="./imgs/finance/bgImg1.png"></image>
			<div class="big">
				<div class="top">
					<div style="flex-direction: row;align-items: flex-end;">
						<text class="font1">4.5</text>
						<text class="font2">%</text>
					</div>
					<text class="font3">5年存款利率</text>
				</div>
				<div class="center">
					<div class="row">
						<text class="font4">起存金额(元)</text>
						<text class="font5">10000</text>
					</div>
					<div class="row">
						<text class="font4">产品期限</text>
						<text class="font5">5年</text>
					</div>
				</div>
				<div class='bottom'>
					<div class="dian"></div>
					<text class="font6">了解更多超享存信息，请点击</text>
					<text class="font7">查看详情</text>
				</div>
			</div>
			<center></center>
		</scroller>
		
		<div :class="[active?'btn':'btn1']" @click="gotoBuy">
			<image :class="[active?'btnBg':'btnBg1']" src="./imgs/finance/bottomBtnBg.png"></image>
			<text class="btnFont">立即购买</text>
		</div>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import center from "@/components/deposit/depositCXC/center.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			center
		},
		data(){
			return {
				title: "超享存",
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(255,255,255)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/arrow-back.png",
				leftBtnStyle: {
					width: "15px",
					height: "27px"
				},
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				bgUrl:"./imgs/finance/barBgImg.png",
				bgStyle:{
					width:"750px",
					height:"150px"
				},
				active:false,
			}
		},
		created(){
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
			this.getProduct();
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				
			},
			getProduct(){
				
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.bgimg{
		width: 750px;
		height: 400px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.big{
		width: 690px;
		margin-top: 10px;
		margin-left: 30px;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 5px;
		padding-top: 40px;
		padding-bottom: 50px;
	}
	.top{
		align-items: center;
	}
	.font1{
		font-size: 48px;
		color:#ED2020;
	}
	.font2{
		font-size: 40px;
		color:#ED2020;
	}
	.font3{
		font-size: 26px;
		color:rgb(163,163,163);
	}
	.center{
		width: 690px;
		flex-direction: row;
		align-items: center;
		margin-top: 50px;
		justify-content: space-around;
	}
	.row{
		align-items: center;
	}
	.font4{
		font-size: 26px;
		color:#BFBFBF;
	}
	.font5{
		font-size: 28px;
		color:rgb(51,51,51);
		margin-top: 20px;
	}
	.bottom{
		padding: 10px 20px;
		flex-direction: row;
		align-items: center;
		background-color: #F9F3EB;
		border-radius: 5px;
		margin-top: 50px;
	}
	.dian{
		width: 16px;
		height: 16px;
		border-radius: 8px;
		background-color:#FC8109 ;
	}
	.font6{
		font-size: 26px;
		color:#BFBFBF;
		margin-left: 10px;
	}
	.font7{
		font-size: 26px;
		color:#FC8109;
		margin-left: 20px;
	}
	.btn{
		height: 125px;
		width: 750px;
		align-items: center;
		justify-content: center;
		position: flex;
		bottom: 0px;
		left: 0px;
	}
	.btn1{
		height: 175px;
		width: 750px;
		align-items: center;
		justify-content: center;
		position: flex;
		bottom: 0px;
		left: 0px;
		padding-bottom: 50px;
	}
	.btnBg{
		position: absolute;
		width: 750px;
		height: 125px;
		top: 0px;
		left: 0px;
	}
	.btnBg1{
		position: absolute;
		width: 750px;
		height: 175px;
		top: 0px;
		left: 0px;
	}
	.btnFont{
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
		margin-top: 20px;
	}
	
</style>