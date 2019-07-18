<template>
	<scroller class="home">
		<title class="titlebar" titleJson="register/titlebar.json"></title>
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 160px;">
			<div class="banker-bottom">
				<text class="title">手机号码</text>
				<input type="number" maxlength="18" v-model="phone" class="tit" placeholder="请输入您的手机号码" @input="getPhone" />
			</div>
			<div class="banker-bottom">
				<text class="title" style="margin-left: 5px;">验&nbsp;证&nbsp;码</text>
				<input class="smsInput" v-model="MsgCode" type="number" maxlength="6" placeholder="请输入您的短信验证码" @input="getMsgCode"></input>
				<text class="getsms1" v-if="isTimeStop" @click="getSms">获取验证码</text>
				<text class="getsms" v-else>{{msgCodeBtnText}}</text>
			</div>
			<div class="banker-bottom">
				<text class="title">账户密码</text>
				<password-input class="psw" encryptType="22" :publicKey="$store.state.publicKey" kbdType="Number" placeholder="请输入您的账户密码" @PasswordInputShow="PasswordInputShow" @PasswordInputClose="PasswordInputClose" minLength="6" maxLength="6" ref="Pwd" kbdName="payPwd1"></password-input>
			</div>
		</div>

		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="checkPwd"></image>
			<text class="btnFont">下一步</text>
		</div>
	</scroller>
</template>
<style scoped>
	.titlebar {
		background-color: #FFFFFF;
		width: 750px;
	}
	
	.home {
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	
	.banker-bottom {
		flex-direction: row;
		align-items: center;
		width: 720px;
		border-bottom-width: 1px;
		border-bottom-color: rgb(229, 229, 229);
		margin-left: 40px;
		height: 100px;
	}
	
	.title {
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.psw {
		height: 80px;
		width: 500px;
		font-family: PingFangSC-Regular;
		margin-left: 30px;
		font-size: 28px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
		placeholder-color: rgb(170, 170, 170);
	}
	
	.tit {
		font-family: PingFangSC-Regular;
		height: 80px;
		width: 500px;
		font-size: 28px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
		margin-left: 30px;
		justify-content: center;
		background-color: #FFFFFF;
		placeholder-color: rgb(170, 170, 170);
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
	
	.smsInput {
		height: 80px;
		width: 350px;
		background-color: #FFFFFF;
		font-size: 28px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
		placeholder-color: rgb(170, 170, 170);
		margin-left: 35px;
	}
	.getsms {
		height: 64px;
		width: 180px;
		border-radius: 10px;
		border-color: rgb(168, 168, 168);
		border-width: 1px;
		margin-left: 30px;
		font-size: 24px;
		line-height: 63px;
		text-align: center;
		font-family: PingFangSC-Regular;
		color: rgb(168, 168, 168);
	}
	
	.getsms1 {
		height: 64px;
		width: 180px;
		border-radius: 10px;
		border-color: rgb(248, 149, 49);
		border-width: 1px;
		margin-left: 30px;
		font-size: 24px;
		line-height: 63px;
		text-align: center;
		font-family: PingFangSC-Regular;
		color: rgb(248, 149, 49);
	}
</style>
<script>
	import Title from "@/components/register/titlebar_component.vue";
	const context = weex.requireModule("context");
	const stream = weex.requireModule("stream");
	export default {
		components: {
			Title
		},
		data() {
			return {
				msgCodeBtnText: "",
				isTimeStop: true,
				MsgCode: "",
				Challenge: "", //短信验证码返回的挑战值
				phone:"",
				pwd:"",
				token:""
			}
		},
		mounted(){
			this.phone = this.$store.state.registerPhone;
			this.getToken();
		},
		methods: {
			getToken(){
				this.postDo("GenToken.do",{},data=>{
					this.token = data._tokenName;
				});
			},
			getPhone(event){
				this.phone = event.value;
			},
			getMsgCode(event){
				this.MsgCode = event.value;
			},
			getSms() {
				var phoneZ = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(this.phone == "") {
					this.alertMsg('请输入手机号码!');
					return;
				} else if(!phoneZ.test(this.phone.replace(/\s*/g, ""))) {
//					this.alertMsg("请输入正确的手机号！");
//					return;
				} 
				const param = {
					"_TokenType":"FC",  
					"_MsgContent":"",   
					"_SelfRegFlg":"1",
					"_TelNo":this.phone
				}
				this.postDo("OTPPreAuthenticate.do", param, data => {
//					this.message = "短信验证码已发送至尾号为"+this.$store.state.userPhone.substring(7,11)+"的手机 "
					this.isShowMsg = true;
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
			checkPwd(){
				var phoneZ = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(this.phone ==""){
					this.alertMsg("请输入手机号码!");
					return;
				}else if(!phoneZ.test(this.phone.replace(/\s*/g, ""))){
//					this.alertMsg("请输入正确的手机号!");
//					return true;
				} else if(this.Challenge == "") {
					this.alertMsg("请点击获取短信验证码!");
					return;
				} else if(this.MsgCode.length == 0 || this.MsgCode.length == null) {
					this.alertMsg('验证码不能为空!');
					return true
				} else if(this.MsgCode.length != 6) {
					this.alertMsg('验证码格式不正确!');
					return;
				}
				this.getPwd();
			},
			//获取密码
			getPwd(){
				this.postDo("Timestamp.do", {}, data => {
					this.$refs.Pwd.getValue(data.Timestamp,data=>{
						data = JSON.parse(data);
						if(parseInt(data.Length) == 0) {
							this.alertMsg("密码不能为空!");
							return true;
						} else if(parseInt(data.Length) != 6) {
							this.alertMsg("密码必须为6位数字密码!");
							return true;
						} else {
							this.pwd = data.Value;
							this.propUser();
						}
					})
				})
			},
			propUser(){
				const param = {
					"TrsPassword":this.pwd,
					"TelephoneNo":this.phone,
					"Challenge":this.Challenge,   //挑战值  
					"OTPPassword":this.MsgCode,    //短信验证码
					"_tokenName":this.token
				}
				this.postDo("SelfRegistrationConfirm.do",param,data=>{
					this.$store.state.registerPhone = data.TelephoneNo;
//					this.alertMsg(JSON.stringify(data));
					this.jump("/RegisterSuccess");
				},()=>{
					this.getToken();
				});
			}
		},
		created() {
			//    this.getTimeStamp();
		}
	};
</script>