
<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			
		<div class="top">
			<image v-if="success" class="img" src="./imgs/finance/bgimg3.png"></image>
			<image v-else class="img" src="./imgs/finance/jg_img2.png"></image>
			<text class="font">{{content}}</text>
			<text v-if="!success" class="font1">失败原因，由系统会返回给你........</text>
		</div>
		
		<div class="btn">
			<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="gotoNext"></image>
			<text class="btnFont">返回</text>
		</div>

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
		data() {
			return {
				title: "诚意存",
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
				success:false,
				content:"诚意存已经成功受理！",   //诚意存入受理失败！
			}
		},
		created(){
			if(this.$store.state.result){
				this.success = true;
				this.content = "诚意存已经成功受理！";
			}else{
				this.success = false;
				this.content = "诚意存入受理失败！";
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			gotoNext(){
				context.finish();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.top{
		width: 750px;
		height: 360px;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.img{
		width:189px ;
		height: 171px;
		margin-top: 30px;
	}
	.font{
		font-size: 28px;
		color:rgb(51,51,51);
	}
	.font1{
		font-size: 26px;
		color: #B4B4B4;
		margin-top: 10px;
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