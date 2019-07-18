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
			<text class="title" style="margin-top: 20px;">风险提示:</text>
			<text class="font" style="margin-top: 20px;">本产品募集资金投资于票据类（该标据为银行承总隸）信托计划、信贷资产类、信托郭雪芙等，本产品募集资金投资于票据类（该标据为银行承总隸）信托计划、信贷资产类、信托郭雪芙等，投资者</text>
			<text class="font" style="margin-top: 20px;">甲已双方经友好韩端，本关平等自愿、诚实信用的原则，达成如下协议：</text>
			<text class="font">一、甲方接受乙方的理财言的理财计接受乙方的理财计</text>
			<text class="font">二、接受乙方的受乙方的理财计接受乙方的理财计</text>
			<text class="font">三、接受乙方的理财计接受乙方的理财计</text>
			<text class="font">四、乙方的财计划，接受乙方的理财计接受乙方的理财计</text>
			<text class="font"></text>
			<text class="font"></text>
			<text class="font"></text>
			<text class="font"></text>
			<text class="font"></text>
			<text class="font"></text>
			
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
				title: "个人信息授权书",
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
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.font{
		font-size: 24px;
		color: #333333;
		width: 690px;
		margin-left: 30px;
		line-height: 45px;
	}
	.title{
		font-size: 26px;
		color: #333333;
		width: 690px;
		margin-left: 30px;
		line-height: 45px;
	}
</style>