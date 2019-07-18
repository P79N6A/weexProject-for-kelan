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
                    <text class="title">用户姓名</text>
                    <input type="text" v-model="Name" class="tit" placeholder="请输入用户姓名" />
                </div>
                <div class="banker-bottom">
                    <text class="title">身份证号</text>
                    <input class="tit" v-model="idNo" placeholder="请输入您的身份证号" type="text" />
                </div>
                <div class="banker-bottom">
                    <text class="title">银行卡号</text>
                    <input class="tit" v-model="bankNo" placeholder="请输入您的银行卡号" type="text" />
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
				title: "注册",
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