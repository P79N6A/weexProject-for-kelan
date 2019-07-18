<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			:bgUrl="bgUrl"
			:bgStyle="bgStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<image class="bgimg" src="./imgs/finance/bgImg1.png"></image>
			<div class="big">
				
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
				title: "我的超值天添盈",
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
				
			}
		},
		created(){
			this.getList();
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				
			},
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
</style>