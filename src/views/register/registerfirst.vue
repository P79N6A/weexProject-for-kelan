<template>
	<scroller class="home">
		<title class="titlebar" titleJson="register/titlebar.json"></title>
		<div style="width: 750px;background-color: #FFFFFF;margin-top: 160px;">
			<div class="banker-bottom">
				<text class="title">客户姓名</text>
				<input type="text" maxlength="18" v-model="Name" class="tit" placeholder="请输入用户名称" @input="getName" />
			</div>
			<div class="banker-bottom" @click="selestIdCard">
				<text class="title">证件类型</text>
				<text style="font-size:28px;padding-left:30px;line-height:100px">{{idType}}</text>
				<image class="image-idcard" src="./imgs/tab_user/menu/img_right.png" />
			</div>
			<div class="banker-bottom">
				<text class="title">证件号码</text>
				<input class="tit" maxlength="18" v-model="idNo" placeholder="请输入您的证件号码" @input="getIdNo" type="text" />
			</div>
			<div class="banker-bottom">
				<text class="title">签约账号</text>
				<input class="tit" maxlength="20" v-model="AccountNo" placeholder="请输入您的签约账号" @input="getAccountNo" type="number" />
			</div>
		</div>

		<div class="wrapper">
			<div style="width: 78px;height: 30px;padding-left: 40px;" @click="checkedC">
				<image class="checkImg" v-if="!checked" src="./imgs/register/checkIn.png"></image>
				<image class="checkImg" v-else src="./imgs/register/checkOut.png"></image>
			</div>
			<div>
				<div style="flex-direction: row;">
					<text class="font1">本人已确认总计并同意签署《</text>
					<text class="font2">个人信息查询和使用授权书</text>
					<text class="font1">》、</text>
				</div>
				<div style="flex-direction: row;">
					<text class="font1">《</text>
					<text class="font2">个人征信查询授权书</text>
					<text class="font1">》。</text>
				</div>

			</div>
		</div>

		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="registF"></image>
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
	
	.image-idcard {
		width: 15px;
		height: 25px;
		position: absolute;
		right: 30px;
		top: 37.5px;
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
	
	.font1 {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(170, 170, 170);
	}
	
	.font2 {
		/*font-family: PingFangSC-Regular;*/
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: rgb(51, 142, 218);
	}
</style>
<script>
	import Title from "@/components/register/titlebar_component.vue";
	const context = weex.requireModule("context");
	const stream = weex.requireModule("stream");
	const picker = weex.requireModule("picker");
	export default {
		components: {
			Title
		},
		data() {
			return {
				idTypeString: [],
				idTypeList: [],
				Name: '',
				checked: true,
				idNo: "",
				AccountNo: "",
				idType: "公民身份证",
				idTypeNum: "P00",
				token: ""

			}
		},
		created() {
			this.getToken();
			this.Name = this.$store.state.registMsg.AcctName;
			this.idNo = this.$store.state.registMsg.IdentityNo;
			this.AccountNo = this.$store.state.registMsg.AccountNo;
			this.idTypeNum = this.$store.state.registMsg.IdentityType;
			this.idType = this.$store.state.registMsg.idType;
			this.getIdType();
		},
		methods: {

			getToken() {
				this.postDo("GenToken.do", {}, data => {
					this.token = data._tokenName;
				});
			},

			checkedC() {
				if(this.checked) {
					this.checked = false;
				} else {
					this.checked = true;
				}
			},
			getName(event) {
				this.Name = event.value;
			},
			getIdNo(event) {
				this.idNo = event.value;
			},
			getAccountNo(event) {
				this.AccountNo = event.value;
			},
			getIdType() {
				this.postDo("SelfRegistrationPre.do", {}, data => {
					this.idTypeList = data.IdTypeList;
					this.idTypeString = [];
					for(var i = 0; i < data.IdTypeList.length; i++) {
						this.idTypeString.push(data.IdTypeList[i].name)
					}
					//					this.idTypeString = data.IdTypeList;
				});
			},
			registF() {
				//				if(this.Name == ""){
				//					this.alertMsg("用户名不能为空");
				//					return;
				//				}
				//				if(this.idNo == ""){
				//					this.alertMsg("证件号不能为空");
				//					return;
				//				}
				//				if(this.phoneNo == ""){
				//					this.alertMsg("签约账号不能为空");
				//					return;
				//				}
				
				const param = {
					"AcctName": this.Name,
					"AccountNo": this.AccountNo,
					"IdentityType": this.idTypeNum,
					"IdentityNo": this.idNo,
					"_tokenName": this.token
				}
//				
//				param["idType"] = this.idType;
//				this.$store.state.registMsg = param;
//				this.jump("/RegisterSecond");
//				
				this.postDo("SelfRegistrationUserInfo.do", param, data => {
					data["idType"] = this.idType;
					this.$store.state.registMsg = data;
					this.jump("/RegisterSecond");
				}, () => {
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
//						this.alertMsg(this.idTypeNum + "===" + this.idType);
					}
				})

			}

		}
	};
</script>