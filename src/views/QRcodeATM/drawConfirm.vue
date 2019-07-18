<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
			
		<div class="big">
			<div class="item">
				<text class="font">取款账户</text>
				<text class="font">{{Acount}}</text>
			</div>
			<div class="item">
				<text class="font">取款金额</text>
				<text class="font">{{money}}元</text>
			</div>
		</div>
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="ScanWithDraw"></image>
			<text class="btnFont">确认</text>
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
				title: "二维码取款确认",
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
				rightTxt: "交易明细",
				rightTxtStyle: {
					"font-size": "24px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(189, 193, 209)"
				},
				Acount:"",
				BankAcType:"",
				money:"",
				ScanSeq:""

			}
		},
		created(){
			if(this.$store.state.AcountInfo){
				this.Acount = this.$store.state.AcountInfo.AccountNo;
				this.BankAcType = this.$store.state.AcountInfo.BankAcType;
				this.money = this.$store.state.AcountInfo.AppointAmount;
				this.ScanSeq = this.$store.state.AcountInfo.ScanSeq;
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//提交
			ScanWithDraw(){
				const param = {
					"AccountNo":this.Acount,    //账户
					"BankAcType":this.BankAcType,   //账户类型
					"AtmNo":"123123",        //ATM编号
					"ScanSeq":this.ScanSeq,      //扫码取款序号
					"AppointAmount":this.money  //预约金额
				}
				this.postDo("ScanWithDraw.do",param,data=>{
					const param = {
						"title":"ATM取款",
						"type":"ATM",
						"context":"请点击自助取款机上的“取款”按钮进行取款，完成取款前请不要离开"
					}
					this.$store.state.resultMsg = param;
					//跳转结果页
					this.jump("/utilResult");
				});
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
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item{
		width: 720px;
		height: 100px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	.font{
		font-size: 28px;
		color: rgb(51, 51, 51);	
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
	.input{
		width: 500px;
		height: 90px;
	}
</style>
