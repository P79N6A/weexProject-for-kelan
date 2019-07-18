<template>
	<div class="wrapper">
		<div class="wxc-overlay" v-if = "show" @click="wxcPopupOverlayClicked"></div>
		<div :hack="isNeedShow" v-if = "show" ref="popup" class="popup">
			<div>
				<text class="font1">交易时间</text>
				<div class="itemBox">
					<div v-if="select1" class="noSelect" @click="selectChange1">
						<text class="font2">当天</text>
					</div>
					<div v-else class="Select">
						<text class="font3">当天</text>
					</div>
					
					<div v-if="select2" class="noSelect" @click="selectChange2">
						<text class="font2">七天</text>
					</div>
					<div v-else class="Select">
						<text class="font3">七天</text>
					</div>
					
					<div v-if="select3" class="noSelect" @click="selectChange3">
						<text class="font2">一个月</text>
					</div>
					<div v-else class="Select">
						<text class="font3">一个月</text>
					</div>
					
					<div v-if="select4" class="noSelect" @click="selectChange4">
						<text class="font2">三个月</text>
					</div>
					<div v-else class="Select">
						<text class="font3">三个月</text>
					</div>
				</div>
			</div>
			
			<div>
				<div style="width: 750px;flex-direction: row;height: 100px;align-items: flex-end;justify-content: space-between;padding-left: 30px;padding-right: 30px;">
					<text class="font1">交易时间</text>
					<text class="font4">最长可查询跨度一年时间</text>
				</div>
				<div style="width: 750px;flex-direction: row;height: 100px;align-items:center;justify-content: space-between;padding-left: 30px;padding-right: 30px;margin-top: 30px;">
					<div style="flex-direction: row;align-items: center;">
						<input type="date" v-model="startDate" class="input"/>
						<text class="font5">-</text>
						<input type="date" v-model="endDate" class="input"/>
					</div>
					<div class="btn">
						<text class="font6">确定</text>
					</div>
				</div>
			</div>
		</div>
		<!--<div class="titleBar" v-if = "show">
			<div class="titleBarLeft" @click="mpBarLeftBtnClick">
				<image class="img" src="./imgs/back.png"></image>
			</div>
			<div class="titleBarCenter">
				<text class="title">历史明细</text>
			</div>
			<div class="titleBarRight" @click="mpBarRightBtnClick">
				<text class="rightTitle">筛选</text>
			</div>
		</div>-->
	</div>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		props:{
			show: {
		       type: Boolean,
		       default: false
		    },
		},
		data() {
			return {
				select1:false,
				select2:true,
				select3:true,
				select4:true,
				startDate:"2018-01-01",
				endDate:"2019-01-01"
			}
		},
		computed: {
			isNeedShow() {
				setTimeout(() => {
					this.appearPopup(this.show);
				}, 50);
				return this.show;
			}
		},
		methods: {
			selectChange1(){
				this.select1 = false;
				this.select2 = true;
				this.select3 = true;
				this.select4 =true;
			},
			selectChange2(){
				this.select1 = true;
				this.select2 = false;
				this.select3 = true;
				this.select4 = true;
			},
			selectChange3(){
				this.select1 = true;
				this.select2 = true;
				this.select3 = false;
				this.select4 = true;
			},
			selectChange4(){
				this.select1 = true;
				this.select2 = true;
				this.select3 = true;
				this.select4 = false;
			},
			mpBarLeftBtnClick(){
				this.$emit("mpBarLeftBtnClick")
			},
			mpBarRightBtnClick(){
				this.$emit("mpBarRightBtnClick");
			},
			wxcPopupOverlayClicked(){
				this.$emit("wxcPopupOverlayClicked");
			},
			appearPopup(bool, duration = 300) {
				this.isShow = bool;
				const popupEl = this.$refs['popup'];
				if(!popupEl) {
					return;
				}
				animation.transition(popupEl, {
					styles: {
//						transform: 'translateY(' + data + ')',
						transform:'translateY(500px)'
					},
					duration,
					delay: 0,
					timingFunction:"ease-in"
				}, () => {
					if(!bool) {
						this.$emit('mpBarRightBtnClick');
					}
				});
			},
		}
	}
</script>

<style scoped>
	.font1{
		font-family: PingFangSc-Regular;
		font-size: 28px;
		color: rgb(57,57,57);
		margin-left: 30px;
		margin-top: 30px;
	}
	.font2{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color: rgb(57,57,57);
	}
	.font3{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color: rgb(255,255,255);
	}
	.font4{
		font-family: PingFangSc-Regular;
		font-size: 22px;
		color: rgb(153,153,153);
	}
	.itemBox{
		width: 750px;
		margin-top: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		padding: 0 30px;
	}
	.noSelect{
		width: 150px;
		height: 60px;
		align-items: center;
		justify-content: center;
		border-width: 1px;
		border-color: rgb(129,129,129);
		border-radius: 10px;
	}
	.Select{
		width: 150px;
		height: 60px;
		align-items: center;
		justify-content: center;
		background-color: rgb(248,150,47);
		border-radius: 10px;
	}
	.input{
		width: 200px;
		height: 60px;
		padding-left: 20px;
		background-color: rgb(242,242,242);
		border-radius: 10px;
		font-size: 26px;
		color: rgb(51,51,51);
		placeholder-color:rgb(51,51,51);
	}
	.btn{
		width: 200px;
		height: 60px;
		border-width: 1px;
		border-color: rgb(248,150,47);
		border-radius: 10px;
		align-items: center;
		justify-content: center;
	}
	.font5{
		font-size: 26px;
		color: rgb(51,51,51);
		margin: 0 10px;
	}
	.font6{
		font-size: 26px;
		color: rgb(248,150,47);
	}
	.wxc-overlay {
		width: 750px;
		position: fixed;
		left: 0;
		top: 150;
		bottom: 0;
		right: 0;
		opacity: 0.6;
		background-color: rgba(0, 0, 0, 0.6);
	}
	
	.popup {
		position: fixed;
		top: -350px;
		left: 0px;
		width: 750px;
		height: 400px;
		background-color: rgb(255, 255, 255);
	}
	
	.wrapper {
		position: fixed;
		width: 750px;
		/*兼容H5异常*/
		z-index: 99999;
	}
	.titleBar{
		position: fixed;
		top: 0;
		left: 0;
		height: 160px;
		width: 750px;
		padding-top: 50px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.titleBarLeft {
		width: 150px;
		left: 30px;
		line-height: 120px;
		align-items: center;
		flex-direction: row;
		justify-content: flex-start;
	}
	.titleBarRight {
		width: 150px;
		right: 30px;
		align-items: center;
		flex-direction: row;
		justify-content: flex-end;
	}
	.img{
		width: 40px;
		height: 40px;
	}
	.title{
		font-family: PingFangSC-Semibold;
		font-size: 36px;
		color: rgb(51,51,51);
		letter-spacing: -0.64px;
	}
	.rightTitle{
		font-size: 26px;
		font-family: PingFangSc-Regular;
		color: rgb(112, 112, 112);
	}
</style>