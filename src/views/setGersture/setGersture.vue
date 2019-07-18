<template>
	<div class='container'>
		<mp-bar title="手势密码" 
			:barStyle="barStyle" 
			:titleStyle="titleStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle" 
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			></mp-bar>
		<set-gersture></set-gersture>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import SetGersture from "@/components/setGersture/setGersture_components.vue"
	export default {
		components: {
			MpBar,
			SetGersture
		},
		data() {
			return {
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
			}
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
	}
</style>
