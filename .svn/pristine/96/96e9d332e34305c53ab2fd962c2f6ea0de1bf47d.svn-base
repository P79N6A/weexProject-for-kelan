<template>
	<div class="container">
		<mp-bar title="设备验证" :barStyle="barStyle" :titleStyle="titleStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			<div class="inputBox1">
				<text class="text">验证码</text>
				<input class="smsInput" v-model="MsgCode" type="number" maxlength="6" placeholder="请输入短信验证码" @input="getMsgCode"></input>
				<text class="getsms" v-if="isTimeStop" @click="getSms">获取验证码</text>
				<text class="getsms" v-else>{{msgCodeBtnText}}</text>
			</div>
			<div class="messageBox" v-if="!isShowMsg">
					<div class="dian"></div>
					<text style="font-family:PingFangSC-Regular ;font-size: 28px;color: rgb(134,134,134);margin-left: 30px;">{{message}}</text>
				</div>
			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="loginSuccess"></image>
				<text class="btnFont">设备绑定</text>
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
			this.MobilePhone = context.getParam("MobilePhone");
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
				isShowMsg:true,
				message:"验证码已发送到您的手机，请注意查收",
				MobilePhone:""
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.loginOut();
			},
			getMsgCode(event){
				this.MsgCode = event.value;
			},
			getSms() {
				const param = {
					"_TokenType":"FC",  
					"_MsgContent":"",   
					"_SelfRegFlg":"1"
				}
				this.postDo("OTPPreAuthenticateMC.do", param, data => {
					this.isShowMsg = false;
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
			loginSuccess(){
				if(this.MsgCode == ""){
					this.alertMsg("请输入短信验证码!");
					return;
				}else if(this.MsgCode.length != 6){
					this.alertMsg("短信验证码格式不正确!");
				}
				const param = {
					"BindFlag":"0",
					"Mobile":"",
					"_OtpPassword":this.MsgCode
				}
				this.postDo("MachineBinding.do",param,data=>{
					context.secureSetString("LoginId",this.MobilePhone);
					context.sessionSetString("loginMsg",JSON.stringify(data));
					context.sessionSetString("cifName",data.CifName);  //用户名
					context.sessionSetString("secreNotice",data.SecreNotice);  //预留信息
					context.sessionSetString("lastLoginTime",data.LastLoginTime); //上次登录时间
 					context.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ");
					context.sessionSetString('isLogin', 'true');
					context.replaceStage("main.launcher");
				})
			},
			loginOut(){
				this.postDo("logout.do",{},data=>{
					context.sessionSetString("loginMsg","");
					context.sessionSetString("cifName","");  //用户名
					context.sessionSetString("secreNotice","");  //预留信息
					context.sessionSetString("lastLoginTime",""); //上次登录时间
					context.sessionSetString('isLogin', 'false');
					context.clearToken()
					context.finish();
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