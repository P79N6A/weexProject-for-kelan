<template>
	<div class="container">
		<mp-bar title="找回密码" :barStyle="barStyle" :titleStyle="titleStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			<div style="flex: 1;">
				<div class="inputBox1">
					<text class="text">验证码</text>
					<input class="smsInput" v-model="MsgCode" type="number" maxlength="6" placeholder="请输入短信验证码" @input="getMsgCode"></input>
					<text class="getsms1" v-if="isTimeStop" @click="getSms">获取验证码</text>
					<text class="getsms" v-else>{{msgCodeBtnText}}</text>
				</div>
					<div class="messageBox" v-if="!isShowMsg">
						<div class="dian"></div>
						<text style="font-family:PingFangSC-Regular ;font-size: 28px;color: rgb(134,134,134);margin-left: 30px;">{{message}}</text>
					</div>
				<div class="btn">
					<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="next"></image>
					<text class="btnFont">下一步</text>
				</div>
			</div>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar
		},
		created(){
			this.getSms();
		},
		data(){
			return {
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/back.png",
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				leftBtnStyle: {
					width: "40px",
					height: "40px"
				},
				msgCodeBtnText:"",
				isTimeStop:true,
				MsgCode:"",
				Challenge:"",   //短信验证码返回的挑战值
				message:"验证码已发送到您的手机，请注意查收",
				token:"",
				isShowMsg:true
			}
		},
		created(){
			this.getToken();
		},
		methods:{
			getToken(){
				this.postDo("GenToken.do",{},data=>{
					this.token = data._tokenName;
				});
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			getMsgCode(event){
				this.MsgCode = event.value;
			},
			getSms() {
				const param = {
					"_TokenType":"FC",  
					"_MsgContent":"",   
					"_SelfRegFlg":"1",
					"_TelNo":this.$store.state.userPhone
				}
				this.postDo("OTPPreAuthenticate.do", param, data => {
//					this.message = "短信验证码已发送至尾号为"+this.$store.state.userPhone.substring(7,11)+"的手机 "
					this.isShowMsg = false;
					this.Challenge = data.Challenge;
					this.time = 60;
					this.timeBuide();
				})
			},
			//验证码倒计时
			timeBuide() {
				var time = setInterval(() => {
					if(this.time < 0) {
						this.time = 60;
						this.isTimeStop = true;
						clearInterval(time);
					} else {
						this.isTimeStop = false;
						this.msgCodeBtnText = this.time-- + "s后重新发送";
					}
				}, 1000);
			},
			next(){
				if(this.Challenge == ""){
					this.alertMsg("请点击获取验证码");
				}
				if(this.MsgCode == ""){
					this.alertMsg("请输入短信验证码!");
					return;
				}else if(this.MsgCode.length != 6){
					this.alertMsg("短信验证码格式不正确!");
				}
				const param = {
					"Challenge":this.Challenge,
					"_OtpPassword":this.MsgCode,
					"_tokenName":this.token
				}
				this.postDo("ResetChannelPwdOTP.do",param,data=>{
					this.jump("/forgetPassword3");
				},()=>{
					this.getToken();
				});
			}

		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.inputBox1{
		flex-direction: row;
		padding-left: 30px;
		align-items: center;
		width: 750px;
		background-color: #FFFFFF;
		height: 98px;
		padding-right: 30px;
		margin-top: 20px;
	}
	.text{
		font-size: 28px;
		color: rgb(51,51,51);
		letter-spacing: 10px;
	}
	.smsInput{
		height: 80px;
		width: 350px;
		background-color: #FFFFFF;
		font-size:28px ;
		color: rgb(51,51,51);
		placeholder-color:rgb(170,170,170);
		margin-left: 30px;
	}
	.dian{
		width: 10px;
		height: 10px;
		border-radius:5px ;
		background-color: rgb(252,129,9);
		margin-left: 30px;
	}
	.getsms {
		height: 64px;
		width: 180px;
		border-radius: 10px;
		border-color: rgb(168,168,168);
		border-width: 1px;
		margin-left: 30px;
		font-size: 24px;
		line-height: 63px;
		text-align: center;
		font-family: PingFangSC-Regular;
		color:rgb(168,168,168) ;
	}
	.getsms1 {
		height: 64px;
		width: 180px;
		border-radius: 10px;
		border-color: rgb(248,149,49);
		border-width: 1px;
		margin-left: 30px;
		font-size: 24px;
		line-height: 63px;
		text-align: center;
		font-family: PingFangSC-Regular;
		color:rgb(248,149,49);
	}
	.messageBox{
		width: 675px;
		height: 78px;
		margin-left: 37px;
		background-color: rgb(249,243,235);
		border-radius: 5px;
		flex-direction: row; 
		align-items: center;
		margin-top: 20px;
	}
	.btn{
		width: 750px;
		height: 142px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}
	.loginBgimg{
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}
	.btnFont{
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}
	
</style>