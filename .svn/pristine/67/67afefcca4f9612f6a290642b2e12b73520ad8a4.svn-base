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
                <div class="row">
                    <image class="icon_01" src="./imgs/securityCenter/icon_01.png" ></image>
                    <text class="note">请确认以下信息真实无误，如信息有误请点击修改</text>
                </div>
                <div class="row1" style="margin-top:60px;">
                    <!-- <image class="icon_01" src="./imgs/securityCenter/icon_01.png" ></image> -->
                    <image class="img5" src="./imgs/securityCenter/idcardbg1.png" ></image>
                    <!-- <image class="icon_01" src="./imgs/securityCenter/icon_01.png" ></image> -->
                </div>
                <div class="row1" style="margin-top:40px;">
                    <!-- <image class="icon_01" src="./imgs/securityCenter/icon_01.png" ></image> -->
                    <image class="img5" src="./imgs/securityCenter/idcardbg2.png" ></image>
                    <!-- <image class="icon_01" src="./imgs/securityCenter/icon_01.png" ></image> -->
                </div>
                <div class="row2" style="margin-top:30px;">
                    <text class="title">用户姓名：</text>
                    <div class="tit" v-show="usernameShow">
                        <text class="tit_left">{{username}}</text>
                        <text class="tit_right" @click="usernameShow=!usernameShow">修改</text>
                    </div>
                    <input v-show="!usernameShow" type="text" class="tit" placeholder="请输入您的用户姓名" @input="getPhone" />
                </div>
                <div class="row2">
                    <text class="title">身份证号：</text>
                    <text class="tit1">{{idcardnumber}}</text>
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
                usernameShow: true,
                username:'小李子',
                idcardnumber:'111000088886666',
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
	.row{
        width: 750px;
        height: 80px;
        padding: 20px 40px;
        background-color: #F9F3EB;
        flex-direction: row;
    }
    .icon_01{
        margin: 0 16px;
        width: 41px;
        height: 42px;
    }
	.note {
		font-family: PingFangSC-Regular;
		font-size: 24px;
        margin-left: 30px;
		color: #FC8109;
		letter-spacing: 0;
        align-items: center;
		justify-content: center;
	}
	.row1{
        width: 750px;
        /* height: 80px; */
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
    .img5{
        width: 468px;
		height: 326px;
        border: 8px solid #FFFFFF;
        border-radius: 8px;
        box-shadow: 3px 3px 8px #D1D1D1 inset;
    }
    .row2{
        width: 468px;
        height: 80px;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
    }
    .title {
		font-family: PingFangSC-Regular;
		font-size: 26px;
		color: #A9A9A9;
	}
    .tit {
		font-family: PingFangSC-Regular;
		height: 60px;
		width: 320px;
		font-size: 26px;
		color: #444444;
        padding: 0 8px;
		letter-spacing: 0;
        flex-direction: row;
		justify-content: center;
		background-color: #FFFFFF;
		placeholder-color: rgb(170, 170, 170);
	}
    .tit_left {
		font-family: PingFangSC-Regular;
		height: 60px;
		width: 250px;
		font-size: 26px;
		color: #444444;
        padding: 0 8px;
		letter-spacing: 0;
		justify-content: center;
		background-color: #FFFFFF;
		placeholder-color: rgb(170, 170, 170);
	}
    .tit_right {
		font-family: PingFangSC-Regular;
		height: 60px;
		width: 70px;
		font-size: 26px;
		color: #FC8717;
        padding: 0 8px;
		letter-spacing: 0;
		justify-content: center;
		background-color: #FFFFFF;
		placeholder-color: rgb(170, 170, 170);
	}
    .tit1 {
		font-family: PingFangSC-Regular;
		height: 60px;
		width: 300px;
		font-size: 26px;
		color: #444444;
        padding: 0 8px;
		letter-spacing: 0;
		justify-content: center;
        background-color: rgb(248, 248, 248);
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
</style>