<template>
	<div class="container">
		<mp-bar title="找回密码" :barStyle="barStyle" :titleStyle="titleStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
			<div class="inputBox">
				<text class="title">登录密码</text>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd1" kbdName="forgetPwd1" placeholder="请输入您的登录密码"></password-input>
			</div>
			<div class="inputBox">
				<text class="title">确认密码</text>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd2" kbdName="forgetPwd2" placeholder="请再一次输入您的登录密码"></password-input>
			</div>
			
		</div>
		
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="next"></image>
			<text class="btnFont">下一步</text>
		</div>
		<!--<text class="btn" @click="next">下一步</text>-->
		<dialog :show="showDialog" :content="content" :btnText="btnText" @confirm="confirm"></dialog>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	import { MpBar } from "madp-ui";
	import Dialog from "@/components/seccussDialog.vue"; 
	export default {
		components: {
			MpBar,
			Dialog
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
				timeStamp:"",
				newPwd:"",
				confirmNewPwd:"",
				token:"",
				showDialog:false,
				content:"密码设置成功",
				btnText:"立即登录"
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
			next(){
				this.queryPwd1();
			},
			queryPwd1(){
				this.postDo("Timestamp.do", {}, data => {
					this.timeStamp = data.Timestamp;
					this.$refs.Pwd1.getValue(data.Timestamp, data => {
						data = JSON.parse(data);
						if(parseInt(data.Length) == 0) {
							this.alertMsg("密码不能为空!");
							return true;
						} else if(parseInt(data.Length) < 6) {
							this.alertMsg("密码不能小于六位");
							return true;
						} else {
							this.newPwd = data.Value;
							this.queryPwd2();
						}
					});
				});
			},
			queryPwd2(){
				this.$refs.Pwd2.getValue(this.timeStamp, data => {
					data = JSON.parse(data);
					if(parseInt(data.Length) == 0) {
						this.alertMsg("请再输一次!");
						return true;
					} else if(parseInt(data.Length) < 6) {
						this.alertMsg("密码不能小于六位");
						return true;
					} else {
						this.confirmNewPwd = data.Value;
						this.last();
					}
				});
			},
			last(){
				const param = {
					"NewPassword":this.newPwd,
					"ConfirmPassword":this.confirmNewPwd,
					"_tokenName":this.token
				}
				this.postDo("ResetChannelPwd.do",param,data=>{
//					this.jump("/forgetPassword4"); 
					this.showDialog = true;
					this.content = "密码设置成功",
					this.btnText = "立即登录";
				},()=>{
					this.getToken();
				});
			},
			confirm(){
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
	.psw {
		height: 80px;
		width: 500px;
		font-size: 28px;
		font-family: PingFangSC-Regular;
		color: rgb(51,51,51);
		letter-spacing: 0;
		margin-left: 30px;
		placeholder-color:rgb(170,170,170);
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
	.inputBox{
		flex-direction: row;
		align-items: center;
		width: 720px;
		border-bottom-width: 1px;
		border-bottom-color: rgb(229,229,229);
		margin-left: 40px;
		height: 100px;
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51,51,51);
	}
	
</style>