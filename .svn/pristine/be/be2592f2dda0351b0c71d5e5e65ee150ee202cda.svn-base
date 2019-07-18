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
            <div style="width: 750px;background-color: #FFFFFF;margin-top: 20px;">
                <div class="banker-bottom">
                    <text class="title">银行卡号</text>
                    <input class="tit" v-model="acNumber" placeholder="请输入您的银行卡号" type="number"/>
                </div>
                <div class="banker-bottom">
                    <text class="title">银行卡类型</text>
                    <input class="tit" v-model="acType" placeholder="请输入您的银行卡类型" type="text" />
                </div>
                <div class="banker-bottom">
                    <text class="title">手机号码</text>
                    <input class="tit" v-model="phoneNumber" placeholder="请输入您的手机号码" type="tel" />
                </div>
                <div class="banker-bottom">
                    <input class="smsInput" v-model="phoneNumber" placeholder="请输入您的短信验证码" type="number" />
                    <text class="getsms1" v-if="getsms" @click="getsms=!getsms">获取验证码</text>
				    <text class="getsms" v-else>{{msgCodeBtnText}}</text>
                </div>
            </div>

            <div class="btn">
                <image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
                <text class="btnFont">下一步 </text>
            </div>
		</scroller>
	</div>
</template>

<script>
	 import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			 MpBar
		},
		data(){
			return {
				title: "新增绑定卡",
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
                msgCodeBtnText: "123456",
                getsms: true,
			}
		},
		created(){
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
		}
	}
</script>

<style scoped>
	.container{
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
    .smsInput {
		height: 80px;
		width: 350px;
		background-color: #FFFFFF;
		font-size: 28px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
		placeholder-color: rgb(170, 170, 170);
		margin-right: 100px;
	}
    .getsms {
		height: 64px;
		width: 180px;
		border-radius: 10px;
		border-color: rgb(168, 168, 168);
		border-width: 1px;
		margin-right: 30px;
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
		margin-right: 30px;
		font-size: 24px;
		line-height: 63px;
		text-align: center;
		font-family: PingFangSC-Regular;
		color: rgb(248, 149, 49);
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