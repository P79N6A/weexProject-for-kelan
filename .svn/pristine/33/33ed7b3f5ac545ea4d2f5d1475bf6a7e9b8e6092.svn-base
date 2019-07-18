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
		<div class="big">
			 <!--<web class="webClass" :src="url"></web>-->
		</div>
		
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
	export default {
		components: {
			MpBar
		},
		data() {
			return {
				title: "财富",
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
				active:true,

			}
		},
		created() {
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
			this.title = context.sessionGetString("title")
			context.sessionSetString("title","")
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			notAgree(){
				this.$store.state.isAgreeProtocol = false;
				this.goBack();
			},
			agree(){
				this.$store.state.isAgreeProtocol = true;
				this.goBack();
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
		flex: 1;
	}
	.webClass{
		width: 750px;
		flex: 1;
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