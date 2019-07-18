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
			<div class="banker-bottom">
				<text class="note">请点击拍摄/上传您的二代身份证</text>
				<div class="idcardbg">
					<image class="idcardbg1" src="./imgs/securityCenter/idcardbg1.png" ></image>
					<text class="text">点击拍摄/上传人面像 </text>
				</div>
				<div class="idcardbg">
					<image class="idcardbg1" src="./imgs/securityCenter/idcardbg2.png" ></image>
					<text class="text">点击拍摄/上传国徽面 </text>
				</div>
			</div>

            <div class="btn">
                <image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
                <text class="btnFont">下一步 </text>
            </div>
            <div class="notice">
                <text class="notice_ts">温馨提示 </text>
                <text class="notice_ts">请在光线充足的条件下进行拍摄，并注意身份证在有效期内，拍摄时照片四角完整，清晰识别。 </text>
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
				title: "上传身份证",
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
		flex-direction: center;
		align-items: center;
		width: 750px;
		/* height: 100px; */
	}
	
	.note {
		font-family: PingFangSC-Regular;
		height: 80px;
		font-size: 24px;
		margin: 30px 0;
		color: #999999;
		letter-spacing: 0;
		justify-content: center;
	}
	.idcardbg{
		position: relative;
		width: 468px;
		height: 326px;
	}
	.idcardbg1{
		/* margin: 30px 0; */
		width: 468px;
		height: 326px;
		/* border: 29px solid #F5F5F5;
		border-radius: 20px; */
	}
	.text{
		position: absolute;
		top:186px;
		left: 120px;
		font-family: PingFangSC-Regular;
		height: 80px;
		font-size: 22px;
		color: #F89630;
		letter-spacing: 0;
		justify-content: center;
	}
    .notice{
        width: 750px;
        margin: 0 30px;
		justify-content: center;
    }
	.notice_ts{
        font-family: PingFangSC-Regular;
		height: 80px;
        width: 630px;
        margin: 0 30px;
		font-size: 26px;
		color: #AAAAAA;
		letter-spacing: 0;
		justify-content: center;
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