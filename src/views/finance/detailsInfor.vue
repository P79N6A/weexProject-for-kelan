<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<scroller style="flex: 1;">
			<div class="big">
				<div class="item">
					<text class="font">产品名称</text>
					<text class="font">农商财富稳40天农商财农商财农商财农商财</text>
				</div>
				<div class="item">
					<text class="font">产品代码</text>
					<text class="font">农商财富稳40天农商财农商财农商财农商财</text>
				</div>
				<div class="item">
					<text class="font">交易日期</text>
					<text class="font">2019</text>
				</div>
				<div class="item">
					<text class="font">成交金额</text>
					<div style="flex-direction: row;align-items: center;">
						<text class="font" style="color:rgb(240,36,52) ;">100000</text>
						<text class="font">元</text>
					</div>
				</div>
				<div class="item">
					<text class="font">效果状态</text>
					<text class="font">效果好</text>
				</div>
			</div>
			
			<div v-if="isCancd" style="align-items: center;">
				<div class="item2">
					<div class="dian"></div>
					<text class = "font1">理财集募期已过，不容许撤单！请在次日15点后在的我的“理财页面”进行赎回操作！</text>
				</div>
				<div class="btn1" style="background-color:rgb(214,214,214) ;">
					<text class="btnFont" style="color: #FFFFFF;margin-top: 0px;">撤单</text>
				</div>
			</div>
			
			<div v-else class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">撤单</text>
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
				title: "产品详情",
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
				isCancd:true

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.big{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item {
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
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
	.font1{
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
	.btn1{
		height: 100px;
		width: 650px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
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
