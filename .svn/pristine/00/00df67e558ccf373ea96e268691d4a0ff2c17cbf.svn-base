<template>
	<div class="home">
		<mp-bar title="密码找回" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<div style="width: 750px;background-color: #FFFFFF; margin-top: 20px;">
				<div class="banker-bottom">
					<text class="title">用户姓名</text>
					<input v-model="Name" type="text" maxlength="18" class="tit" placeholder="请输入您的姓名" @input="getName" />
				</div>
				<div class="banker-bottom" @click="selestIdCard">
					<text class="title">证件类型</text>
					<text style="font-size:28px;padding-left:40px;line-height:100px">{{idType}}</text>
					<image class="image-idcard" src="./imgs/tab_user/menu/img_right.png" />
				</div>
	
				<div class="banker-bottom">
					<text class="title">证件号码</text>
					<input v-model="idNo" class="tit" maxlength="18" placeholder="请输入证件号" @input="getIdNo" type="text" />
				</div>
			</div>
			<div style="width: 750px;background-color: #FFFFFF;">
				<div class="banker-bottom">
					<text class="title">我行卡号</text>
					<input v-model="cardNo" class="tit" maxlength="20" placeholder="请输入绑定卡号" @input="getCardNo" type="number" />
				</div>
	
				<div class="banker-bottom">
						<text class="title">交易密码</text>
						<password-input encryptType="22" :publicKey="$store.state.publicKey" kbdType="Number" class="tit" placeholder="请输入银行卡交易密码" @PasswordInputShow="PasswordInputShow" @PasswordInputClose="PasswordInputClose" minLength="6" maxLength="6" ref="Pwd" kbdName="payPwd1"></password-input>
				</div>
			</div>
			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">下一步</text>
			</div>

		</scroller>
	</div>
</template>
<style scoped>
	.home {
		width: 750px;
		background-color: rgb(248,248,248);
		padding-bottom: 30px;
	}
	
	.banker-bottom {
		flex-direction: row;
		align-items: center;
		width: 720px;
		border-bottom-width: 1px;
		border-bottom-color: rgb(229,229,229);
		margin-left: 30px;
		height: 100px;
	}
	
	.image-idcard {
		width: 15px;
		height: 25px;
		position: absolute;
		right: 30px;
		top:37.5px;
	}
	.title {
		width: 150px;
		text-align: right;
		font-family: PingFangSC-Regular;
		font-size: 28px;
		color: rgb(51,51,51);
		letter-spacing: 0;
	}
	
	.tit {
		font-size: 28px;
		font-weight: 400;
		font-family: PingFangSC-Regular;
		color: rgb(51,51,51);
		margin-left:63px;
		height: 80px;
		width: 500px;
		margin-left: 40px;
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
	
</style>
<script>
	import { MpBar } from "madp-ui";
	const context = weex.requireModule("context");
	const stream = weex.requireModule("stream");
	const picker = weex.requireModule('picker');
	export default {
		components: {
			MpBar
		},
		data() {
			return {
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
				barStyle: {'height':'150px','padding-top': '60px'},
				idTypeString:[],
				idTypeList:[],
				idType: "公民身份证",
                idTypeNum:"P00",
				msgCode: "",
				Name: "sqf",
				idNo: "230111198708274570",
				cardNo: "6217794123404557",
				phoneNo:"",
				pwd:"",
				checked: true,
				idType: "身份证", //证件类型
				title:"登录密码找回",
				token:""
			};
		},
		created() {
			this.getIdType();
//			this.Name = this.$store.state.forgetMsg.Name;
//			this.idNo = this.$store.state.forgetMsg.idNo;
//			this.cardNo = this.$store.state.forgetMsg.cardNo;
			if(context.sessionGetString("userInfo")){
				this.Name = JSON.parse(context.sessionGetString("userInfo")).Name;
				this.idNo = JSON.parse(context.sessionGetString("userInfo")).IdentityNo;
				this.cardNo = JSON.parse(context.sessionGetString("userInfo")).AccountNo;
			}
			this.getToken();
				
		},
		methods: {
			getIdType(){
				this.postDo("SelfRegistrationPre.do",{},data=>{
					this.idTypeList = data.IdTypeList;
					this.idTypeString = [];
					for(var i=0;i<data.IdTypeList.length;i++){
						this.idTypeString.push(data.IdTypeList[i].name)
					}
//					this.idTypeString = data.IdTypeList;
				});
			},
			getToken(){
				this.postDo("GenToken.do",{},data=>{
					this.token = data._tokenName;
				});
			},
			mpBarLeftBtnClick(){
				context.sessionSetString("userInfo","");
				context.finish();
			},
			getName(event) { //用户姓名
				this.Name = event.value;
//				this.$store.state.forgetMsg.Name = event.value;
			},
			getIdNo(event) { //证件号码
				this.idNo = event.value;
//				this.$store.state.forgetMsg.idNo = event.value;
			},
			getCardNo(event) { //卡号
				this.cardNo = event.value;
//				this.$store.state.forgetMsg.cardNo = event.value;
			},
			nextPage() {
				if(this.Name == ""){
					this.alertMsg("用户名不能为空！");
					return true;
				}
				if(this.idNo == ""){
					this.alertMsg("证件号码不能为空！");
					return true;
				}
				if(this.idType == "身份证"){
					var reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
					if(!reg.test(this.idNo.replace(/\s*/g,""))){
						this.alertMsg("证件号码格式不正确！");
						return true;
					}
				}
				if(this.cardNo == ""){
					this.alertMsg("卡号不能为空！");
					return true;
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
							this.checkUser();
						}
					})
				})
			},
			//检查用户
			checkUser(){
				const param = {
					"IdentityType":this.idTypeNum,
					"TrsPassword":this.pwd,
					"AccountNo":this.cardNo,
					"IdentityNo":this.idNo,
					"IdNoOther":"",
					"Name":this.Name,
					"_tokenName":this.token
				}
				context.sessionSetString("userInfo",JSON.stringify(param));
				this.postDo("ResetChannelPwdAuth.do",param,data=>{
					if(data._RejCode == "000000"){
						this.$store.state.userPhone = data.TelePhoneNo;
						this.jump("/forgetPassword2");
					}
				},()=>{
					this.getToken();
				});
			},
			selestIdCard() {
				picker.pick({
					items: this.idTypeString
				}, event => {
					if(event.result === 'success') {
						var i = event.data
						this.idType = this.idTypeString[i]
						this.idTypeNum = this.idTypeList[i].value;
					}
				})

			}
			
		}
	};
</script>