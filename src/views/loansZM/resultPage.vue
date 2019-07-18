<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			
		<div class="big">
			<text class="font">芝米好贷正在努力处理您的额度申请</text>
			<text class="font">结果将已短信方式发送给您</text>
		</div>
		<image class="bgimg" src="./imgs/loans/jxw.png"></image>
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
			<text class="btnFont">完成</text>
		</div>		
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
				title: "额度申请",
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
				

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			nextPage(){
				context.finish();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.bgimg{
		width: 187px;
		height: 235px;
		position: fixed;
		top: 200px;
		left: 281.5px;
	}
	.big{
		width: 670px;
		height: 250px;
		background-color: #F7F3ED;
		margin-left: 45px;
		margin-top: 200px;
		align-items: center;
		padding-top: 120px;
	}
	.font{
		font-family: PingFangSc-Medlum;
		font-size: 28px;
		color: #80808;
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