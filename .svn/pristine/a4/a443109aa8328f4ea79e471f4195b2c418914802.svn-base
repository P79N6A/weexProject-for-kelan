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
			<my-deposit :List="list" @gotoDetail="gotoDetail"></my-deposit>
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import myDeposit from "@/components/deposit/myDeposit.vue";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			myDeposit
		},
		data(){
			return {
				title: "我的超享存",
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
				list:[,,]
			}
		},
		created(){
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			gotoDetail(item){
				this.alertMsg(JSON.stringify(item))
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
</style>