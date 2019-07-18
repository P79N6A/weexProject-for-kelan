<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<image src="./imgs/tab_home/intell/suxian.png" style="height: 30px;width: 6px;margin-top: 2px;"></image>
				<text class="name">理财推荐</text>
				<text class="introduce1">高收益</text>
				<text class="introduce2">低风险</text>
			</div>
			<text class="more" @click="goto">{{details.title}}</text>
		</div>

		<div class="center">
			<div class="center_left" v-for="(item,key) in adList" @click="gotoItem(item)" :key="key">
				<image src="./imgs/tab_home/intell/rxcp.png" v-if="item.isHot == 'true'" class="img"></image>
				<text class="financeName">{{item.name}}</text>
				<div>
					<div style="flex-direction: row;">
						<text class="Number">{{item.rate}}</text>
						<text class="Number1">%</text>
					</div>
					<text class="font">年化收益率</text>
				</div>
				<div style="flex-direction: row;">
					<!--<image src="./imgs/tab_home/intell/finance1.png" class="img2"></image>
					<image src="./imgs/tab_home/intell/finance2.png" class="img3"></image>-->
					<div class="leftT">
						<text class="font6">{{item.tese1}}</text>
					</div>
					<div class="rightT">
						<text class="font7">{{item.tese2}}</text>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		props: {
			jsonUrl: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				adList: [],
				details: ""
			}
		},
		created() {
			if(this.jsonUrl) {
				this.getList();
			}
		},
		methods: {
			getList() {
				stream.fetch({
						method: "GET",
						url: this.jsonUrl,
						type: "json"
					},
					res => {
						this.adList = res.data.data.financeList;
						this.details = res.data.data.details;
					}
				);
			},
			goto() {
				if(this.details) {
					context.launchStage(this.details.url);
				}

			},
			gotoItem(item){
				context.launchStage(item.url);
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 750px;
		background-color: #FFFFFF;
	}
	
	.top_title {
		width: 750px;
		height: 98px;
		flex-direction: row;
		padding: 0 30px;
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
	}
	
	.introduce1 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 10px;
		margin-top: 10px;
	}
	
	.introduce2 {
		font-size: 20px;
		font-family: PingFangSc-Regular;
		color: rgb(187, 187, 187);
		margin-left: 20px;
		margin-top: 10px;
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
		margin-top: 6px;
	}
	
	.center {
		width: 750px;
		height: 260px;
		flex-direction: row;
		padding: 0 30px;
		align-items: auto;
		justify-content: space-between;
	}
	
	.center_left {
		height: 248px;
		width: 332px;
		border-width: 1px;
		border-color: #EFEFF4;
		justify-content: space-around;
		border-radius: 10px;
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.img {
		position: absolute;
		height: 93px;
		width: 69px;
		right: 0px;
		top: 0px;
	}
	
	.financeName {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: rgb(51, 51, 51);
	}
	
	.Number {
		font-size: 48px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		font-weight: 700;
	}
	
	.Number1 {
		font-size: 24px;
		font-family: PingFangSc-Medlum;
		color: rgb(237, 32, 32);
		margin-top: 24px;
	}
	
	.img2 {
		width: 96px;
		height: 32px;
	}
	
	.img3 {
		width: 96px;
		height: 32px;
		margin-left: 20px;
	}
	.leftT{
		border-width: 1px;
		border-color: #FE9513;
		padding: 2px 5px;
		border-radius: 10px;
		margin-left: 10px;
	}
	.font6{
		font-size: 16px;
		color: #FE9513 ;
	}
	.rightT{
		border-width: 1px;
		border-color: #FF9994;
		padding: 2px 5px;
		border-radius: 10px;
		margin-left: 10px;
	}
	.font7{
		font-size: 16px;
		color: #FF9994 ;
	}
</style>