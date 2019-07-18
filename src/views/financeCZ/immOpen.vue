<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" 
			></mp-bar>
		<div style="background-color:#ffffff;margin-top:20px">
			<div class="item">
				<text class="font">电子账户</text>
				<text class="font">{{info1}}</text>
			</div>
			<div class="item">
				<text class="font">可用余额</text>
				<text class="font">{{info2 | addDot}}元</text>
			</div>
		</div>
		<div style="margin-top:30px;">
			<div class="item1" style="background-color:#F9F3EB">
				<div class="img2"></div>
				<text class="font1">开通超值天添赢,电子账户余额满100元将会为你自动转入</text>
			</div>
		</div>
		<div style="margin-top:10px">
			<div class="item2">
				<div style="width: 45px;height: 60px;justify-content: center;margin-left: 30px;" @click="isAgreeProtocol">
					<image class="img1" src="./imgs/register/checkIn.png"  v-if="imgshow" ></image>
					<image class="img1" src="./imgs/register/checkOut.png" v-else></image>
				</div>
				
				<text class="font2">本人已阅读《</text>
				<text class="font3" @click="toProtocol">超值天添盈用户协议</text>
				<text class="font2">》</text>
			</div>
		</div>
		
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
			<text class="btnFont">确认购买</text>
		</div>
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
				title: "立即开通",
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
				imgshow:true,
				info1:'农商财富稳40天',
				info2:'50,000.00',
				token:"",
				showPwd:false,
				pwdtitle:"立即开通",
				
			}
		},
		created(){
//			this.alertMsg(context.sessionGetString("loginMsg"));
			if(context.sessionGetString("CZinfor")){
				const infor = JSON.parse(context.sessionGetString("CZinfor")).resultMap;
				context.sessionGetString("CZinfor","")
				if(infor.Flag == "1"){  //有电子账户
					this.info1 = infor.AccountNo;  //电子账户
					this.info2 = infor.Balance;    //可用余额
				}else{   //无电子账户 需要电子账户开立
					
				}
//				context.sessionSetString("CZinfor","")
			}
			if(this.$store.state.isAgreeProtocol){
				this.imgshow = true;
			}else{
				this.imgshow = false;
			}
			this.getToken();
		},
		methods:{
			//点击观看协议
			isAgreeProtocol(){
				this.imgshow = !this.imgshow;
			},
			//观看协议
			toProtocol(){
				context.sessionSetString("title","超值天添赢用户协议");
				this.jump("/utilProtocol1");
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
//				this.jump("/payFinanceResult");
				this.$refs.pwdDialog.close();
				this.open(pwd);
			},
			getToken() {
				this.postDo("GenToken.do", {}, data => {
					this.token = data._tokenName;
				});
			},
			//显示密码弹框
			nextPage(){
				if(this.imgshow){
					this.showPwd = true;
				}else{
					this.toastMsg("请阅读超值天添赢用户协议");
					return;
				}
			},
			//开通交易
			open(pwd){
				const param = {
					"TrsPassword":pwd,
					"_tokenName":this.token
				}
				this.postDo("IntelligentSign.do",param,data=>{
					const param = {
						"title":"超值天添盈",
						"type":"CZ",
						"context":"交易处理成功"
					}
					this.$store.state.resultMsg = param;
					context.sessionSetString("IsSignFlag","1");
					this.jump("/utilResult");
				},()=>{
					this.getToken();
				})
			}
		},
		filters:{
			addDot(val){
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
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
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
	.item1 {
		width: 690px;
		height: 70px;
		margin: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		padding-right: 30px;
	}
	.item2 {
		width: 720px;
		height: 70px;
		/*margin-left: 30px;*/
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		padding-right: 30px;
	}
	
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	.font1 {
		font-size: 24px;
		color: #FC8922;
	}
	.font2 {
		flex-direction: row;
		font-size: 24px;
		color: #BDC3CD;
	}
	.font3 {
		font-size: 24px;
		color: #ECA35D;
		margin-left: 10px;
		margin-right: 10px;
	}

	.img1 {
		width: 20px;    
 		height: 20px;
	}
	.img2 {
		width: 12px;    
 		height: 12px;
 		/* border: 1px solid #ECA35D; */
		border-radius: 6px;      
		background-color: #FC8109;  
		margin-left: 30px;
		margin-right: 30px;   
 		/* opacity: 0.5; */
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