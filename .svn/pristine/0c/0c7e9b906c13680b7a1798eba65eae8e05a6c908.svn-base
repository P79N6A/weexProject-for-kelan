
<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<scroller style="flex: 1;">
			<buy-page @changeAcount="changeAcount" @nextPage="nextPage" @isAgreeProtocol="isAgreeProtocol" :buyitem="buyitem" :AvailBal="AvailBal" :AcNameFirst="AcNameFirst"></buy-page>
		</scroller>
		<pwd-dialog :showMoney="showMoney" :money="payMoney" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd" ref="pwdDialog"></pwd-dialog>
		<bottom-dialog :show="showBottom" @closeBottomDialog="closeBottomDialog" @choose="choose" :CommonPayerAcNoList="CommonPayerAcNoList"></bottom-dialog>
		<Fingerprint v-if="showFinger" @NofingerLogin="NofingerLogin" @confirm="confirm"></Fingerprint>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pwdDialog from "@/components/payPwdDialog.vue"
	import bottomDialog from "@/components/deposit/bottomDialog.vue"
	import Fingerprint from "@/components/fingerPayDialog.vue";
	import buyPage from "@/components/deposit/depositBuy";
	const fingerprint = weex.requireModule("fingerprint");
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar,
			bottomDialog,
			pwdDialog,
			Fingerprint,
			buyPage
		},
		data() {
			return {
				title: "福满多产品购买",
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
				showPwd:false,
				pwdtitle:"请输入取款密码",
				showMoney:true,
				payMoney:"100",
				showBottom:false,
				showFinger:false,
				buyitem:'',//存期\汇率
				CommonPayerAcNoList:'',//可用账号列表
				AcNameFirst:'',//已选择卡号
				imgshow:false,
				AvailBal:'',//余额
				payMoney:'',//购买产品所支付金额
				token:'',
				needList: [],//选择 的银行卡信息list

			}
		},
		created(){
			this.getToken();
			this.buyitem=this.$store.state.buyitem; //存期\汇率
			this.CommonPayerAcNoList=this.$store.state.CommonPayerAcNoList;//可用账号列表
			this.AcNameFirst = this.CommonPayerAcNoList[0].AcNo;//初始查卡号
			this.getlastmoney(this.AcNameFirst,this.CommonPayerAcNoList[0].BankAcType);//初始查余额
		},
		methods:{
			getToken() {
				this.postDo("GenToken.do", {}, data => {
					this.token = data._tokenName;
				});
			},
			isAgreeProtocol(imgshow){
				this.imgshow = imgshow;
				// this.alertMsg(JSON.stringify(this.imgshow))
			},
			//获取余额
			getlastmoney(AcNo,BankAcType){
				const param = {
					"AccountNo" : AcNo,
					"AccountBankAcType" : BankAcType
				};
				this.postDo("ActBalQry.do",param,data=>{
					this.AvailBal=data.AvailBal;
				});
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//选择完毕
			choose(item){
				this.showBottom = false;
				this.AcNameFirst = item.AcNo;//选择的转出卡号
				this.needList = item;//选择的银行卡参数list
				this.getlastmoney(item.AcNo,item.BankAcType);
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
			nextPage(buyMoney){
				if(!this.imgshow){
					this.toastMsg1('请认真阅读并同意用户协议');
					return;
				}
				if(buyMoney == ''){
					this.toastMsg1('请输入购买金额');
					return;
				}
				if(parseFloat(buyMoney)>parseFloat(this.AvailBal)){
					this.toastMsg1('购买金额不能超过账户余额');
					return;
				}
				if(parseFloat(buyMoney)<50){
					this.toastMsg1('起购金额为50元');
					return;
				}
				this.showPwd = true;
				this.payMoney = buyMoney;
				
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
				this.$refs.pwdDialog.close();
				const param = {
					"PayerAccountNo" : this.AcNameFirst, // 转出账号
					"Term" : this.buyitem.TermStr, // 存期
					"TrsAmount" : this.payMoney, // 金额
					"TrsPassword" : pwd, // 密码
					"_tokenName" : this.token,
				};
				// this.alertMsg(JSON.stringify(param))
				this.postDo("BlessingProductBuy.do",param,data=>{
					// this.alertMsg(JSON.stringify(data))
					const param = {
						"title":"福满多",
						"type":"CK",
						"context":"您已成功购买",
						"PayerAccountNo":this.AcNameFirst,//购买账户
						"TrsAmount":this.payMoney,//购买金额
						// "AvailBal":this.AvailBal,//余额
						"Term":this.buyitem.Term,//存期
						"Interest":this.buyitem.Interest,//利率
					}
					this.$store.state.resultMsg = param;
					this.jump("/utilResult");
				},()=>{
					this.getToken();
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