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
			<desposit-draw @depositDraw="depositDraw"></desposit-draw>
		</scroller>
		<pwd-dialog ref="pwdDialog" :show="showPwd" :title="pwdtitle" @close="closePwd" @getPwd="getPwd"></pwd-dialog>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import despositDraw from "@/components/deposit/depositDraw.vue";
	import pwdDialog from "@/components/payPwdDialog.vue";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			despositDraw,
			pwdDialog
		},
		data(){
			return {
				title: "超享存支取",
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
				showPwd:false,
				pwdtitle:"支取",
				list:[,,]
			}
		},
		created(){
			
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			depositDraw(){
				this.showPwd = true;
			},
			//关闭密码弹框
			closePwd(){
				this.showPwd = false;
			},
			//获取密码
			getPwd(pwd){
				this.$refs.pwdDialog.close();
				this.alertMsg(pwd);
			},
			
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
</style>