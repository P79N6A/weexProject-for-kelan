<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<image src="./imgs/tab_home/intell/suxian.png" style="height: 30px;width: 6px;margin-top: 2px;"></image>
				<text class="name">充值中心</text>
				<text class="introduce">方便</text>
				<text class="introduce">快捷</text>
				<text class="introduce">安全</text>
			</div>
			<text class="more" @click="goto">更多</text>
		</div>
		
		<div class="center">
			<image src="./imgs/tab_life/topUp/hfcz.png" class="image1"></image>
			<div class="center_box">
				<text class="center_font1">话费充值</text>
				<text class="center_font2">充值任意金额可享受9.8折优惠</text>
			</div>
			<text class="topUpBtn" @click="topUpBtn">立即充值</text>
		</div>
		
		<div class="menu">
			<div class="menulist" :style="{'width':itemWidth}" v-for="(item,key) in menuList" :key="key" @click="JumpTo(item.url)">
				<image :style="menuImgStyle" class="menuImg" :src="item.src"></image>
				<text  class="menuname">{{item.name}}</text>
				<text class="context">{{item.context}}</text>
			</div>
		</div>
	</div>
</template>

<script>
	const context = weex.requireModule("context");
  	const stream = weex.requireModule("stream");
	export default{
		props:{
			jsonUrl: {
				type: String,
				default: ""
			}
		},
		data(){
			return{
				menuList:[],
				menuImgStyle:"",
				itemWidth:""
			}
		},
		mounted(){
			this.getMenu();
		},
		methods: {
			JumpTo(url) {
				context.launchStage(url);
			},
			getMenu() {
				stream.fetch({
						method: "GET",
						url: this.jsonUrl,
						type: "json"
					},
					response => {
						if(response.status === 200) {
							var tmp = response.data.data;
							this.menuList = tmp.menuList;
							var menuItem = tmp.menuItem;
							this.itemWidth = 750/menuItem.columns + "px";
							this.menuImgStyle["width"] = menuItem.imgWidth + "px";
							this.menuImgStyle["height"] = menuItem.imgHeight + "px";
						}
					},
					() => {}
				);
			}
		},
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: #FFFFFF;
	}
	.top_title {
		width: 750px;
		height: 98px;
		flex-direction: row;
		padding: 0 20px;
		align-items: center;
		justify-content: space-between;
	}
	
	.top_title_left {
		flex-direction: row;
		justify-content: space-between;
	}
	
	.name {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: rgb(57, 57, 57);
		margin-left: 5px;
		font-weight: 500;
	}
	
	.introduce {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 20px;
		margin-top: 8px;
	}
	.font {
		font-size: 22px;
		font-family: PingFangSc-Regular;
		color: rgb(166, 166, 166);
		margin-top: -5px;
	}
	
	.more {
		font-size: 24px;
		font-family: PingFangSc-Regular;
		color: rgb(189, 193, 209);
		margin-top: 4px;
	}
	.center{
		width: 750px;
		height: 130px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
	.image1{
		width: 125px;
		height: 121px;
	}
	.image2{
		width: 127px;
		height: 45px;
	}
	.center_box{
		
	}
	.center_font1{
		font-size: 28px;
		font-family: PingFangSc-Medlum;
		color: rgb(57, 57, 57);
	}
	.center_font2{
		font-size: 22px;
		font-family: PingFangSc-Regular;
		color: rgb(176, 176, 176);
		margin-top: 10px;
	}
	.topUpBtn{
		font-size: 22px;
		font-family: PingFangSC-Light;
		color: rgb(237,32,32);
		width: 127px;
		height: 45px;
		line-height: 43px;
		text-align: center;
		border-width: 1px;
		border-color: rgb(255,0,0);
		border-radius: 5px;
	}
	.menu{
		width: 750px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		padding-bottom: 30px;
	}
	.menulist{
		align-items: center;
		justify-content: center;
	}
	.menuImg{
		height: 52px;
		width: 52px;
		margin-top: 30px;
	}
	.menuname{
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: rgb(69,69,69);
		letter-spacing: 0;
		margin-top: 20px;
	}
	.context{
		font-size: 20px;
		font-family: PingFangSC-Regular;
		color:rgba(176,176,176,0.7);
		margin-top: 20px;
	}
</style>