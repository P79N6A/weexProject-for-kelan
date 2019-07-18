<template>
	<div class="container">
		<mp-bar title="修改登录密码" :barStyle="barStyle" :titleStyle="titleStyle" :leftBtn="leftBtn" :leftBtnStyle="leftBtnStyle" @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<div class="box">
			<div class="inputbox">
				<text class="font">原登录密码:</text>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd1" kbdName="changePwd1" placeholder="请输入您的原密码"></password-input>
			</div>
			<div class="inputbox">
				<text class="font">新登录密码:</text>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd2" kbdName="changePwd2" placeholder="请输入您的新密码"></password-input>
			</div>
			<div class="inputbox">
				<text class="font">确认新密码:</text>
				<password-input class="psw" kbdType="Full" placeholderColor="#ababab" minLength="6" maxLength="16" encryptType="0" ref="Pwd3" kbdName="changePwd3" placeholder="请再一次输入您的新登录密码"></password-input>
			</div>
		</div>
		
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="next"></image>
			<text class="btnFont">下一步</text>
		</div>
		
		<dialog :show="showDialog" :content="content" :btnText="btnText" @confirm="confirm"></dialog>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const modal = weex.requireModule("modal");
	const context = weex.requireModule("context");
	import { MpBar } from "madp-ui";
	import dialog from "@/components/seccussDialog.vue"
	export default {
		components: {
			MpBar,
			dialog
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
				oldPwd:"",
				newPwd:"",
				confirmNewPwd:"",
				token:"",
				showDialog:false,
				content:"修改密码成功",
				btnText:"重新登录"
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
				if(this.showDialog){
					context.replaceStage("main.launcher");
				}else{
					context.finish();
				}
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
							this.alertMsg("原密码不能为空!");
							return true;
						} else if(parseInt(data.Length) < 6) {
							this.alertMsg("原密码不能小于六位");
							return true;
						} else {
							this.oldPwd = data.Value;
							this.queryPwd2();
						}
					});
				});
			},
			queryPwd2(){
				this.$refs.Pwd2.getValue(this.timeStamp, data => {
					data = JSON.parse(data);
					if(parseInt(data.Length) == 0) {
						this.alertMsg("新密码不能为空!");
						return true;
					} else if(parseInt(data.Length) < 6) {
						this.alertMsg("新密码不能小于六位");
						return true;
					} else {
						this.newPwd = data.Value;
						this.queryPwd3();
					}
				});
			},
			queryPwd3(){
				this.$refs.Pwd3.getValue(this.timeStamp, data => {
					data = JSON.parse(data);
					if(parseInt(data.Length) == 0) {
						this.alertMsg("确认密码不能为空!");
						return true;
					} else if(parseInt(data.Length) < 6) {
						this.alertMsg("确认密码不能小于六位");
						return true;
					} else {
						this.confirmNewPwd = data.Value;
						this.last();
					}
				});
			},
			loginOut(){
				this.postDo("logout.do",{},data=>{
					context.sessionSetString("loginMsg","");
					context.sessionSetString("cifName","");  //用户名
					context.sessionSetString("secreNotice","");  //预留信息
					context.sessionSetString("lastLoginTime",""); //上次登录时间
					context.sessionSetString('isLogin', 'false');
					context.clearToken()
					context.sessionSetString("isBack",true);
					this.showDialog = true;
				});
			},
			confirm(){
				context.replaceStage("main.login?return=changePwd");
			},
			last(){
				const param = {
					"Password":this.oldPwd,
					"NewPassword":this.newPwd,
					"ConfirmPassword":this.confirmNewPwd,
					"_tokenName":this.token
				}
				this.postDo("LoginPasswordUpdate.do",param,data=>{
					this.loginOut();
//					this.alertMsg(data);
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
	.font{
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51,51,51);
		letter-spacing: 0;
		/*width: 200px;
		line-height: 100px;
		text-align: right;*/
	}
	.psw {
		height: 80px;
		width: 500px;
		font-family: PingFangSC-Regular;
		margin-left: 20px;
		font-size: 28px;
		color: rgb(51,51,51);
		letter-spacing: 0;
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
	.inputbox{
		flex-direction: row;
		align-items: center;
		width: 720px;
		border-bottom-width: 1px;
		border-bottom-color: rgb(229,229,229);
		margin-left: 40px;
		height: 100px;
	}
	.box{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
</style>