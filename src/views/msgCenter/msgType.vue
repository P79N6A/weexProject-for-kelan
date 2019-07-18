<template>
	<div class="container">
		<mp-bar title="消息中心" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			<div style="flex: 1;">
				<div class="itemBox" v-for="(item,key) in itemList" @click="goto">
					<div style="height: 150px;flex-direction: row;align-items: center;">
						<div style="height: 100px;width: 100px;justify-content: center;">
							<image :src="item.img" class="img"></image>
							<div class="dian" v-if="item.num != '0'">
								<image src="./imgs/msgCenter/redDian.png" class="img2"></image>
								<text class="num">{{item.num}}</text>
							</div>
						</div>
						<div class="fontBox">
							<text class="font1">{{item.name}}</text>
							<text class="font2">{{item.title}}</text>
						</div>
					</div>
					
					<text class="time">{{item.time}}</text>
				</div>
			</div>
			
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const context = weex.requireModule("context");
	const stream = weex.requireModule("stream");
	const picker = weex.requireModule('picker');
	export default{
		components: {
			MpBar
		},
		data(){
			return{
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
				barStyle: {'height':'150px','padding-top': '60px'},
				itemList:[
					{
						"img":"./imgs/msgCenter/dztz.png",
						"name":"动账通知",
						"title":"次日转账失败",
						"time":"2017-09-07 09:36",
						"num":"0"
					},
					{
						"img":"./imgs/msgCenter/whgg.png",
						"name":"我行通知",
						"title":"手机银行新版本上线了",
						"time":"2017-09-07 09:36",
						"num":"2"
					}
				]
				
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				context.finish();
			},
			goto(){
				this.jump("/msgList")
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.img{
		width: 78px;
		height: 78px;
	}
	.itemBox{
		margin-top: 20px;
		height: 150px;
		background-color: #FFFFFF; 
		flex-direction: row;
		align-items: center;
		padding-left: 74px;
		padding-right: 30px;
		justify-content: space-between;
	}
	.fontBox{
		margin-left: 30px;
		height: 100px;
		justify-content: space-around;
	}
	.dian{
		width: 37px;
		height: 37px;
		position: absolute;
		top:0px;
		right: 0px;
		align-items: center;
		justify-content: center;
	}
	.img2{
		width: 37px;
		height: 37px;
		position: absolute;
		top:0px;
		left: 0px;	
	}
	.font1{
		font-family: PingFang-SC-Medium;
		font-size:32px ;
		color: rgb(51,51,51);
	}
	.font2{
		font-family: PingFang-SC-Medium;
		font-size:24px ;
		color: rgb(102,102,102);
	}
	.time{
		font-family: PingFang-SC-Medium;
		font-size:18px ;
		color: rgb(102,102,102);
	}
	.num{
		font-family: PingFang-SC-Medium;
		font-size:20px ;
		color: rgb(255,255,255);
	}
</style>