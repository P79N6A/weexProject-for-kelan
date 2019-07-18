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
		<scroller style="flex: 1;">
	        <div class="row">
				<div class="item">
					<text class="font">尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供，为了给您提供尊敬的客户您好，为了给您提供</text>
				</div>
			</div>
	        <div class="row">
				<div class="item1">
	                <image class="img" style="margin-right:20px;" src="../imgs/checkIn.png"></image>  
					<text class="font1">风险声明：本人已阅读风险提示并愿意承担</text>
				</div>
			</div>
	        <div class="row1">
				<div class="item2">
					<text class="font2" @click="getClip">复制并粘贴</text>
				</div>
			</div>
	        <div class="row" style="margin-bottom:30px;">
				<div class="item4"> 
					<text class="font3">{{context}}</text>
				</div>
			</div>
		</scroller>
		<div :class="[active ? 'bottom' : 'bottom1']">
			<div class="bottom-item2">
				<div class="leftBtn" @click="notAgree">
					<text class="font11">拒绝</text>
				</div>
				<div class="rightBtn" @click="agree">
					<image class="btnBgimg" src="./imgs/finance/bottomLeftBtn.png"></image>
					<text class="font12">同意</text>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	const clip = weex.requireModule("clipboard");
	export default{
		components:{
			MpBar
		},
		created(){
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
		},
		data(){
			return {
				title: "风险提示",
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
				imgCheck:true,
				context:"",
				active:true
			}
		},
		methods:{
			getClip(){
				clip.setString("本人已阅读风险提示并愿意承担");
				clip.getString(data=>{
					if(data.result == "success"){
						this.context = data.data;
					}
				});
			}
		}
	}
</script>
<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
    .row{
		margin-top:20px;
        flex-direction: column;
		align-items: center;
		justify-content: center;
	}
    .row1{
		margin-top:40px;
        margin-bottom:20px;
        flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.item {
		width: 690px;
		/* height: 90px; */
		margin: 0 auto;
        padding: 16px 30px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
        background-color:#ffffff;
	}
	.item4{
		width: 690px;
		margin: 0 auto;
		height: 90px;
        padding: 16px 30px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
        background-color:#ffffff;
	}
    .item1 {
		width: 690px;
		margin: 0 auto;
        padding: 16px 26px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
        background-color:#F9F3EB;
        border-radius: 5px;
	}
    .item2 {
		width: 300px;
        height: 80px;
		margin: 0 auto;
        padding: 16px 26px;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
        background-color:#A4A4A4;
	}
    .item3 {
		width: 690px;
        height: 100px;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
        /* background-color:#A4A4A4; */
	}
	
	.font {
        width: 630px;
        min-height:100px; 
		font-size: 24px;
		color: #666666;
        letter-spacing:1px;
        line-height: 40px;
	}
    .font1 {
        width: 580px;
		font-size: 26px;
		color: #FC8922;
	}
    .font2 {
        text-align: center;
        width: 248px;
		font-size: 32px;
		color: #FEFEFE;
	}
	.font3{
		text-align: center;
		font-size: 32px;
		color: rgb(51,51,51);
	}

	.img {
        width: 18px;
        height: 18px;
	}
	.bottom{
		position: flex;
		width: 750px;
		bottom: 0px;
		left: 0px;
		height: 180px;
		background-color: #FFFFFF;
	}
	.bottom1{
		position: flex;
		width: 750px;
		bottom: 0px;
		left: 0px;
		height: 230px;
		background-color: #FFFFFF;
	}
    .bottom-item2{
		margin-top: 30px;
		width: 750px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.leftBtn{
		width: 314px;
		height: 95px;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		border-width: 1px;
		border-color: #F8993A;
	}
	.font11{
		font-size: 28px;
		color: #F8993A;
	}
	.rightBtn{
		width: 314px;
		height: 95px;
		align-items: center;
		justify-content: center;
	}
	.btnBgimg{
		position: absolute;
		top: 0;
		left: 0;
		width: 314px;
		height: 95px;
	}
	.font12{
		font-size: 28px;
		color: #FFFFFF;
	}

</style>