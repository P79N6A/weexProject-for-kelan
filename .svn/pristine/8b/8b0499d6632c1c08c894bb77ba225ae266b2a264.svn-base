<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller>
			<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
				<div class="tit">
					<text class="font1">用户姓名</text>
					<text class="font1">贵阳农商</text>
				</div>
				<div class="tit">
					<text class="font1">身份证号</text>
					<text class="font1">110101****01010901</text>
				</div>
				<div class="tit">
					<text class="font1">手机号码</text>
					<text class="font1">139****0101</text>
				</div>
			</div>
			<div class="tis">
				<image class="img" src="./imgs/finance/dotimg.png"></image>
				<text class="font2" style="margin-left: 20px;">为了您更好的了解，请您务必填写以下内容。</text>
			</div>
			<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;padding-bottom: 20px;">
				<div class="item">
					<text class="font1">1.您目前的家庭住址</text>
					<div class="inputBox">
						<input type="text" class="input1" style="width: 650px;"/>
					</div>
				</div>
				
				<div class="item">
					<text class="font1">2.请提供一名联系人的姓名和电话</text>
					<div class="inputBox">
						<text class="font3">姓名</text>
						<input type="text" class="input1"/>
					</div>
					<div class="inputBox">
						<text class="font3">电话</text>
						<input type="text" class="input1"/>
					</div>
				</div>
				
				<div class="item">
					<text class="font1">3.您目前的家庭住址</text>
					<div class="inputBox" style="justify-content: space-between;padding-right: 30px;" @click="">
						<text class="font3">配偶</text>
						<image class="img1" src="./imgs/finance/xiala.png"></image>
					</div>
				</div>
			</div>
			
			<div class="wrapper">
				<div style="width: 78px;height: 30px;padding-left: 40px;" @click="checkedC">
					<image class="checkImg" v-if="!checked" src="./imgs/register/checkIn.png"></image>
					<image class="checkImg" v-else src="./imgs/register/checkOut.png"></image>
				</div>
				<div>
					<div style="flex-direction: row;">
						<text class="fonth">本人已确认总计并同意签署《</text>
						<text class="fontl">个人信息查询和使用授权书</text>
						<text class="fonth">》、</text>
					</div>
					<div style="flex-direction: row;">
						<text class="fonth">《</text>
						<text class="fontl">个人征信查询授权书</text>
						<text class="fonth">》。</text>
					</div>
	
				</div>
			</div>
			
			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">下一步</text>
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
				checked:true
			}
		},
		created(){
//			console.log("sdfsdf")
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			checkedC() {
				if(this.checked) {
					this.checked = false;
				} else {
					this.checked = true;
				}
			},
			nextPage(){
				this.jump("/resultPageZM");
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.tit{
		width: 690px;
		height: 90px;
		border-bottom-color: #f0f0f0;
		border-bottom-width: 1px;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	.font1{
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color:  #333;
	}
	.img{
		height: 10px;
		width: 10px;
	}
	.tis{
		width: 690px;
		height: 90px;
		margin-left: 30px;
		margin-top: 20px;
		border-radius: 10px;
		background-color: #F9F3EB;
		flex-direction: row;
		align-items: center;
		padding-left:30px ;
	}
	.font2{
		font-family: PingFangSc-Medlum;
		font-size: 22px;
		color:  #868686;
	}
	.item{
		width: 750px;
		margin-left: 30px;
		margin-top: 15px;
	}
	.input1{
		height: 70px;
		width: 500px;
		font-family: PingFangSc-Medlum;
		font-size: 26px;
		color:  #333;
	}
	.inputBox{
		width: 690px;
		height: 75px;
		border-width: 1px;
		border-color: #EAEAEA;
		border-radius: 10px;
		margin-top: 15px;
		padding-left: 30px;
		flex-direction: row;
		align-items: center;
	}
	.font3{
		font-family: PingFangSc-Medlum;
		font-size: 28px;
		color: #bbb;
		margin-right: 30px;
	}
	.img1{
		width: 28px;
		height: 28px;
	}
		
	.wrapper {
		width: 750px;
		flex-direction: row;
		margin-top: 30px;
	}
	
	.checkImg {
		width: 18px;
		height: 18px;
		margin-top: 10px;
	}
	
	.fonth {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(170, 170, 170);
	}
	
	.fontl {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(51, 142, 218);
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