<template>
	<div class="conatainer">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			:bgUrl="bgUrl"
			:bgStyle="bgStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<scroller style="flex: 1;">
			<image class="bgimg" src="./imgs/finance/bgImg1.png"></image>
			<div class="big">
				<weex-chart-pie class="bing" animEnable="true" animDuration="2000" ratio="0" :data="data"></weex-chart-pie>
				<div>
					<text class="grade">{{grade}}分</text>
				</div>
				<div class="row">
					<text class="font1">您的投资类型：</text>
					<text class="font2">{{type}}</text>
				</div>
				<div class="item" style="margin-top: 50px;">
					<text class="font3">产品名称</text>
					<text class="font3">理财理财</text>
				</div>
				<div class="item">
					<text class="font3">评估状态</text>
					<text class="font3">正常</text>
				</div>
			</div>
			
			<div style="align-items: center;">
				<div class="item2">
					<div class="dian"></div>
					<text class = "font4">您对风险损失比较敏感,投资是您谨慎小心,更看重资产的安全性.</text>
				</div>
				<div class="btn">
					<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
					<text class="btnFont">重新测评 </text>
				</div>
			</div>
			
			
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar
		},
		data() {
			return {
				title: "风险等级",
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
				data: [
					{
						"color": "#F9B70D",
						"percent": 0.8
					}
				],
				grade:"80",
				type:"保守型"

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			nextPage(){
				this.jump("/riskRating");
			}
		}
	}
</script>

<style scoped>
	.conatainer{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.bgimg{
		width: 750px;
		height: 526px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.big{
		width: 690px;
		height: 650px;
		margin-top: 10px;
		margin-left: 30px;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 5px;
	}
	.bing {
		position: absolute;
		top: 20px;
		left: 215px;
		height: 260px;
		width: 260px;
	}
	.grade{
		font-size: 58px;
		color: rgb(81,81,81);
		/*color: #F1EDE8;*/
		font-weight: 700;
		margin-top: 150px;
	}
	.row{
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		margin-top: 80px;
	}
	.font1{
		font-size: 26px;
		color: rgb(165,165,165);
	}
	.font2{
		font-size: 40px;
		color: rgb(252,129,9);
	}
	.item{
		width: 630px;
		height: 80px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		background-color: #F1EDE8;
		border-radius: 5px;
		margin-top: 30px;
	}
	.font3{
		font-size: 27px;
		color: #898887;
	}
	.item2{
		width: 690px;
		flex-direction: row;
		border-radius: 5px;
		background-color:rgb(249,243,235) ;
		padding: 30px 30px;
		align-items: flex-start;
		margin-top: 30px;
	}
	.dian{
		height: 12px;
		width: 12px;
		border-radius: 6px;
		margin-right: 20px;
		background-color:#FC8922 ;
		margin-top: 10px;
	}
	.font4{
		width: 600px;
		font-size: 26px;
		color: #FC8922;
	}
	.btn {
		width: 750px;
		height: 142px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}
	.loginBgimg {
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}
	
	.btnFont {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}

	
</style>