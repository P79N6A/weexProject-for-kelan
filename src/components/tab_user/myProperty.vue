<template>
	<div class="container">
		<image class="bgImg" src="./imgs/tab_user/bgImg.png"></image>
		<div class="top">
			<text class="font1">账户总览</text>
			<image v-if="!isShowMoney" class="eye" src="./imgs/tab_user/eye.png" @click="hiddenMoney"></image>
			<image v-else class="eyeb" src="./imgs/tab_user/xiaoyanjbb.png" @click="hiddenMoney"></image>
		</div>
		<text class="font2">总资产(元)</text>
		<div v-if="$store.state.login" style=" width:750px;flex-direction: row;align-items: center; margin-top: 20px;justify-content: center;"> 
			<text v-if="!isShowMoney" class="font3">¥</text>
			<text v-if="isShowMoney" class="font4">****</text>
			<text v-else class="font4">{{money}}</text>
		</div>
		<div v-else style=" width:750px;flex-direction: row;align-items: center; margin-top: 20px;justify-content: center;" @click="gotoLogin"> 
			<text class="font5">请登录后查看</text>
			<image style="width: 17px;height: 28px;margin-left: 30px;" src="./imgs/tab_finance/myTreasure/rightBtn1.png"></image>
		</div>
	</div>
</template>

<script>
	const context = weex.requireModule("context");
	const modal = weex.requireModule("modal");
	const stream = weex.requireModule("stream");
	export default{
		data(){
			return{
				money:"2787834.34",
				isShowMoney:true
			}
		},
		methods:{
			hiddenMoney(){
				this.isShowMoney  = !this.isShowMoney
			},
			gotoLogin(){
				this.goto();
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 693px;
		height: 272px;
		margin-left: 29px;
		margin-top: 30px;
		align-items: center;
		background-color: #FFFFFF;
	}
	.bgImg{
		width: 693px;
		height: 272px;
		flex-direction: row;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	.top{
		flex-direction: row;
		position: absolute;
		top:30px ;
		left: 40px;
		align-items: center;
	}
	.font1{
		font-family: PingFangSC-Medium;
		font-size: 28px;
		color: rgb(255,252,246);
	}
	.eye{
		height: 20px;
		width: 34px;
		margin-left: 19px;
	}
	.eyeb{
		width: 30px;
		height: 11px;
		margin-left: 19px;
	}
	.font2{
		font-family: PingFangSC-Regular;
		font-size: 30px;
		color:rgb(255,252,247); 
		margin-top: 103px;
		letter-spacing: 3px;
	}
	.font3{
		font-family:AdobeHeitiStd-Regular ;
		font-size: 30px;
		margin-top: 8px;
		color:rgb(255,252,242);
		margin-left: 8px;
	}
	.font4{
		font-family:AdobeHeitiStd-Regular ;
		font-size: 46px;
		color:rgb(255,252,242);
		font-weight: 500;
	}
	.font5{
		font-family: PingFangSC-Medlum;
		font-size: 36px;
		color: rgb(255,250,246);
	}
</style>