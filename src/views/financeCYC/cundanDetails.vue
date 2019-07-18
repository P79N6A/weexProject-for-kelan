<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<div class="big">
				<div class="item1">
					<text class="font">子账户序列号</text>
					<text class="font">{{CYCdetails.AcctSubseq}}</text>
				</div>
				<div class="item">
					<text class="font">金额</text>
					<text class="font">{{CYCdetails.TrsAmount | addDot}}元</text>
				</div>
				<div class="item">
					<text class="font">存期</text>
					<text class="font">{{CYCdetails.StoragePeriod}}月</text>
				</div>
				<div class="item">
					<text class="font">起息日</text>
					<text class="font">{{CYCdetails.Bbindt}}</text>
				</div>
				<div class="item">
					<text class="font">到期日</text>
					<text class="font">{{CYCdetails.Matudt}}</text>
				</div>
				<div class="item">
					<text class="font">存入网点</text>
					<text class="font">{{CYCdetails.DeptName}}</text>
				</div>
				<div class="item">
					<text class="font">服务电话</text>
					<text class="font">{{CYCdetails.Phone}}</text>
				</div>
			</div>
			<div class="btn" v-if="CYCdetails.PrdFlag == '0'">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="gotoNext"></image>
				<text class="btnFont">支取</text>
			</div>
			<div class="btn1" v-else>
				<text class="btnFont1">支取</text>
			</div>
			<div class="introduce">
				<div style="flex-direction: row;align-items: center;">
					<image class="img1" src="./imgs/finance/dotimg.png"></image>
					<text class="fontIn1">温馨提示：</text>
				</div>
				<text class="fontIn">{{Notice}}</text>
			</div>
		</scroller>
		
		<pwd-dialog ref="pwdDialog" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import pwdDialog from "@/components/payPwdDialog.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			pwdDialog
		},
		data(){
			return {
				title: "存单详情",
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
				pwdtitle:"诚意存支取",
				Notice:"说明：本产品是为指定项目提供的专属存款产品，存期内如遇到特殊情况需提前支取本产品的， 须持本人有效省份证到存入网点柜台办理。",
				CYCdetails:"",
				token:""
			}
		},
		created(){
			this.CYCdetails = this.$store.state.cundanDetails;
			this.getToken();
		},
		methods:{
			getToken(){
				this.postDo("GenToken.do",{},data=>{
					this.token = data._tokenName;
				});
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				this.$refs.pwdDialog.close();
				const param = {
					"AcctSubseq":this.CYCdetails.AcctSubseq,
					"Prtdam":this.CYCdetails.Prtdam,
					"TrsPassword":pwd,
					"_tokenName":this.token,
					"ItemId":this.CYCdetails.ItemId
				}
				this.postDo("CYCClose.do",param,data=>{
					const param = {
						"title":"诚意存支取",
						"type":"CYC",
						"context":"交易处理成功"
					}
					this.$store.state.resultMsg = param;
					this.jump("/utilResult");
				})
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//支取完成
			gotoNext(){
				this.showPwd = true;
			}
		},
		filters:{
			addDot(val){
				if(val == "" || val == undefined){
					return "0.00"
				}else{
					 var Astr = val.toString();
			        Astr = Astr.replace(/,/g,'');
			        if(Astr.indexOf(".") != -1){
			            var str = Astr.split(".")[0]
			            var afDot = Astr.split(".")[1]
			            var newVal = "";
			            for(var i=0;i<=str.length-1;i++){
			                if((str.length-i)%3 == 1 && i!=(str.length-1)){
			                    newVal = newVal + str.charAt(i) + ",";
			                }else{
			                    newVal = newVal + str.charAt(i);
			                }
			            }
			            return newVal+"."+afDot;
			        }else{
			            var str = val.toString();
			            var newVal = "";
			            for(var i=0;i<=str.length-1;i++){
			                if((str.length-i)%3 == 1 && i!=(str.length-1)){
			                    newVal = newVal + str.charAt(i) + ",";
			                }else{
			                    newVal = newVal + str.charAt(i);
			                }
			            }
			            return newVal+".00";
			        }
				}
		    },
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.introduce {
		width: 690px;
		margin-top: 20px;
		margin-left: 30px;
		margin-bottom: 20px;
		background-color: #F9F3EB;
		border-radius: 2px;
		padding-top: 10px;
		padding-bottom: 10px;
		margin-bottom: 50px;
	}
	
	.fontIn {
		font-size: 22px;
		color: #868686;
		line-height: 50px;
		width: 630px;
		letter-spacing: 0.64px;
		margin-left: 50px;
	}
	
	.fontIn1 {
		font-size: 22px;
		color: #f8972f;
		line-height: 50px;
		letter-spacing: 0.64px;
		margin-left: 20px;
	}
	.Moneyinput{
		font-size: 26px;
		color: rgb(51, 51, 51);
	}
	
	.img1 {
		height: 10px;
		width: 10px;
		margin-left: 30px;
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
	.big{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item {
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	.item1{
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
		margin-top: 20px;
	}
	
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	.btn1{
		width: 650px;
		height: 93px;
		margin-top: 50px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
		background-color: #d8d8d8;
		border-radius: 5px;
		margin-left: 50px;
	}
	.btnFont1{
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
	}
</style>