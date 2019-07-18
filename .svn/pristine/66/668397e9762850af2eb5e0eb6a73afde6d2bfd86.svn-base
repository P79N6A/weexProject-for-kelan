<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick" ></mp-bar>
		<div class="big">
			<image class="bgimg" src="./imgs/finance/bgimg3.png"></image>
			<text class="font1">{{content}}</text>
		</div>
		
		<div class="btn">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png" @click="nextPage"></image>
				<text class="btnFont">完成</text>
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
				title: "超值天添赢",
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
				content:"交易处理成功",
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				context.finish();
			},
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
	.font3{
		font-size: 26px;
		color:rgb(196,196,196) ;
	}
	.font4{
		font-size:28px ;
		color: rgb(51,51,51);
	}
</style>
