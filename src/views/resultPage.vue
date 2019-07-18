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
				<image class="bgimg" src="./imgs/finance/bgimg3.png"></image>
				<text class="font1">{{content}}</text>
				<div class="row" v-if="type=='CK' || type=='CK1'">
					<text class="font2">购买金额</text>
					<text class="font3">{{$store.state.resultMsg.TrsAmount | addDot}}元</text>
				</div>
				
			</div>
			<div class="center" v-if="type=='CK1'">
				<div class="item">
					<text class="fontIL">购买账户</text>
					<text class="fontIR">{{$store.state.resultMsg.PayerAccountNo}}</text>
				</div>
				<div class="item">
					<text class="fontIL">购买日期</text>
					<text class="fontIR">{{$store.state.resultMsg.TransDate}}</text>
				</div>
			</div>
			<div class="center" v-if="type=='CK'">
				<div class="item">
					<text class="fontIL">购买账户</text>
					<text class="fontIR">{{$store.state.resultMsg.PayerAccountNo}}</text>
				</div>
			</div>
			
			<div class="center" v-if="type=='CK'">
				<div class="item">
					<text class="fontIL">存期</text>
					<text class="fontIR">{{$store.state.resultMsg.Term}}</text>
				</div>
				<div class="item">
					<text class="fontIL">利率</text>
					<text class="fontIR">{{$store.state.resultMsg.Interest}}%</text>
				</div>
			</div>

			<div class="center" v-if="type=='YYHZQ'">
				<div class="item">
					<text class="fontIL">转入账号</text>
					<text class="fontIR">{{$store.state.resultMsg.AccountNo}}</text>
				</div>
				<div class="item">
					<text class="fontIL">支取金额</text>
					<text class="fontIR">{{$store.state.resultMsg.TranAmt}}</text>
				</div>
			</div>
			
			
			<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">完成</text>
			</div>
		</scroller>

	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		components: {
			MpBar
		},
		created(){
			this.title = this.$store.state.resultMsg.title;
			this.type = this.$store.state.resultMsg.type;
			this.content = this.$store.state.resultMsg.context;
		},
		data() {
			return {
				PayerAccountNo:'',
				TrsAmount:'',
				AvailBal:'',
				Interest:'',
				type:"",
				depositType:"",
				title: "结果页",
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(51,51,51)",
					"letter-spacing": "-0.64px"
				},
//				leftBtn: "./imgs/back.png",
				leftBtnStyle: {
					width: "40px",
					height: "40px"
				},
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				content:"",
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			nextPage(){
				context.finish();
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
		background-color: rgb(248,248,248);
	}
	.big{
		width: 750px;
		background-color: #FFFFFF;
		align-items: center;
		margin-top: 20px;
		padding-bottom: 30px;
	}
	.bgimg{
		width:189px ;
		height: 171px;
		margin-top: 30px;
	}
	.font1{
		font-size: 36px;
		color: rgb(51,51,51);
		font-weight: 700;
		margin-top: 30px;
		width: 720px;
		margin-left: 30px;
		text-align: center;
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
	.fontdiv{
		flex-direction: row;
		align-items: center;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.font2{
		font-size: 26px;
		color: rgb(174,174,174);
	}
	.font3{
		margin: 0 10px;
		font-size: 28px;
		color:#ED2020 ;
	}
	.row{
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
		justify-content: center;
	}
	.center {
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
	
	.fontIL {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	
	.fontIR {
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(120, 120, 120);
	}
	.fontIR1{
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: #ED2020;
	}
</style>
