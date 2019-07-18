
<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" 
			:rightTxt="rightTxt" 
			@mpBarRightBtnClick="mpBarRightBtnClick"
			:rightTxtStyle="rightTxtStyle"></mp-bar>
		<scroller style="flex: 1;">
			<div class="top" @click="changeAcount">
				<div class="top-box">
					<image class="logoImg" src="./imgs/finance/logoImg.png"></image>
					<div style="justify-content: space-between;margin-left: 20px;">
						<text class="font1">阳农商</text>
						<text class="font2">账户余额：9483039元</text>
					</div>
				</div>
				<image class="rightImg" src="./imgs/finance/right.png"></image>
			</div>
			<div class="bottom">
				<div class="item1">
					<div class="title">
						<text class="font3">起点金额</text>
					</div>
					<div class="content">
						<div style="flex-direction: row;align-items: flex-end;">
							<image class="img" src="./imgs/finance/money.png"></image>
							<input class="input" type="number" placeholder="请输入购买理财金额" @input="changeMoney" />
						</div>
						<div>
							<text class="fontl" style="font-size:28px ;margin-top: 10px;">全部转入</text>
						</div>
					</div>
				</div>
				<div class="DXitem">
					<text class="font3" style="color: rgb(159, 159, 159);">预计到账时间（</text>
					<text class="titleDx">{{moneyDX}}</text>
					<text class="font3" style="color: rgb(159, 159, 159);">）</text>
				</div>
			</div>

			<div class="wrapper">
				<div class="item3">
					<div class="dian"></div>
					<text class="font7">本人已阅读分险提示,并愿意承担投资分险</text>
				</div>
			</div>

			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">确认购买</text>
			</div>

		</scroller>
		<pwd-dialog :showMoney="showMoney" :money="payMoney" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
		<bottom-dialog :show="showBottom" @closeBottomDialog="closeBottomDialog" @choose="choose"></bottom-dialog>
		<Fingerprint v-if="showFinger" @NofingerLogin="NofingerLogin" @confirm="confirm"></Fingerprint>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pwdDialog from "@/components/payPwdDialog.vue"
	import bottomDialog from "@/components/finance/bottomDialog.vue"
	import Fingerprint from "@/components/fingerPayDialog.vue"
	const fingerprint = weex.requireModule("fingerprint");
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			bottomDialog,
			pwdDialog,
			Fingerprint
		},
		data() {
			return {
				title: "购买",
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
				rightTxt: "限额说明",
				rightTxtStyle: {
					"font-size": "26px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(116, 116, 116)"
				},
				moneyDX: "下周三",
				showPwd:false,
				pwdtitle:"请输入取款密码",
				showMoney:true,
				payMoney:"100",
				showBottom:false,
				showFinger:false

			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//选择完毕
			choose(item){
				this.showBottom = false;
				this.alertMsg(JSON.stringify(item));
			},
			//关闭选择银行卡的弹框
			closeBottomDialog(){
				this.showBottom = false;
			},
			//更换银行卡
			changeAcount(){
				this.showBottom = true;
			},
			changeMoney(event) {
				const money = event.value;
				this.moneyDX = this.smalltoBIG(money)
			},
			//打开密码控件
			nextPage(){
//				this.showPwd = true;
				this.openFinger();
			},
			openFinger(){
				if(WXEnvironment.platform != "iOS"){
					this.showFinger = true;
				}
				fingerprint.identify(data => {
					if(data == "1") {
						this.showFinger = false;
						this.alertMsg(data);
					}else{
						this.errorTime++;
						this.toastMsg(data);
						if(this.errorTime == 5){
							this.showFinger = false;
						}
					}
				})
			},
			//关闭指纹弹框
			NofingerLogin(){
				fingerprint.cancelIdentify();
				this.showFinger = false;
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				this.alertMsg("1111");
				this.jump("/payFinanceResult");
			},
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.top {
		height: 160px;
		width: 690px;
		margin: 20px 30px;
		padding: 0 40px;
		background-color: #FFFFFF;
		border-radius: 10px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.top-box {
		flex-direction: row;
		height: 100px;
		align-items: center;
	}
	
	.logoImg {
		width: 65px;
		height: 65px;
	}
	
	.font1 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(31, 31, 31);
	}
	
	.font2 {
		font-family: PingFangSc-Regular;
		font-size: 24px;
		color: rgb(159, 159, 159);
	}
	
	.rightImg {
		width: 15px;
		height: 25px;
	}
	.font3 {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	.item1 {
		width: 720px;
		height: 180px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		padding-right: 30px;
	}
	
	.bottom {
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	
	.title {
		height: 60px;
		justify-content: center;
	}
	
	.img {
		width: 42px;
		height: 50px;
	}
	
	.content {
		height: 120px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	.input {
		margin-left: 20px;
		height: 60px;
		padding-top: 20px;
		width: 500px;
		font-size: 32px;
		color: rgb(51, 51, 51);
		placeholder-color: rgb(159, 159, 159);
	}
	
	.wrapper {
		width: 750px;
		margin-top: 30px;
		align-items: center;
		justify-content: center;
	}
	.fontl {
		font-family: PingFangSC-Regular;
		font-size: 22px;
		letter-spacing: 1px;
		line-height: 40px;
		color: #EA9849;
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
	
	.DXitem {
		width: 720px;
		height: 100px;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		padding-right: 30px;
	}
	
	.titleDx {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: #EC9600;
		margin: 0 10px;
	}
	.item3{
		flex-direction: row;
		align-items: center;
		padding: 0 30px;
		width: 690px;
		background-color:rgb(249,243,235) ;
		border-radius: 5px;
		height: 80px;
		margin-top: 20px;
	}
	.dian{
		width: 12px;
		height: 12px;
		border-radius: 6px;
		background-color: #FC8109;
	}
	.font7{
		font-size: 26px;
		color: #FC8109;
		margin-left: 20px;
	}
</style>