<template>
	<div class="container">
		<mp-bar title="消息中心" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
			<scroller style="flex: 1;">
				<div style="height: 10px;width: 750px;"></div>
				
				<div class="item" v-for="(item,key) in list">
					<div class="title">
						<text class="font1">{{item.title}}</text>
					</div>
					<text class="time">{{item.time}}</text>
					<text class="context">{{item.context}}</text>
					<div class="bottom">
						<text class="font2">查看详情</text>
						<image class="img" src="./imgs/tab_user/menu/img_right.png"></image>
					</div>
				</div>
				<div style="height: 50px;width: 750px;"></div>
			</scroller>
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
				list:[
					{
						"title":"消息标题",
						"time":"2017-09-07 09:36",
						"context":"消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文"
					},
					{
						"title":"消息标题",
						"time":"2017-09-07 09:36",
						"context":"消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文"
					},
					{
						"title":"消息标题",
						"time":"2017-09-07 09:36",
						"context":"消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文  消息正文"
					}
				]
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248,248,248)
	}
	.item{
		margin-top: 10px;
		width: 750px;
		background-color: #FFFFFF;
		align-items: center;
	}
	.title{
		height: 100px;
		width: 670px;
		border-bottom-color:rgb(102,102,102) ;
		border-bottom-width: 1px;
		justify-content: center;
		margin-left: 20px;
	}
	.font1{
		font-family: PingFang-SC-Medium;
		font-size: 32px;
		color: rgb(102,102,102);
	}
	.time{
		font-family: PingFang-SC-Medium;
		font-size: 18px;
		color: rgb(102,102,102);
		line-height: 100px;
	}
	.context{
		font-family: PingFang-SC-Medium;
		font-size: 24px;
		color: rgb(102,102,102);
		width: 750px;
		padding: 0 35px;
		line-height: 40px;
	}
	.bottom{
		width: 750px;
		padding: 0 30px;
		height: 100px;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
	.img{
		width: 15px;
		height: 25px;
	}
	.font2{
		font-family: PingFang-SC-Medium;
		font-size: 30px;
		color: rgb(102,102,102);
	}
</style>