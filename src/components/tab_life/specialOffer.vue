<!-- 优惠活动 -->
<template>
	<div class="container">
		<div class="top_title">
			<div class="top_title_left">
				<image src="./imgs/tab_home/intell/suxian.png" style="height: 30px;width: 6px;margin-top: 2px;"></image>
				<text class="name">优惠活动</text>
				<text class="introduce">方便</text>
				<text class="introduce">快捷</text>
				<text class="introduce">安全</text>
			</div>
			<text class="more" @click="goto">更多</text>
		</div>
		
		<div class="center">
			<div class="item" v-for="(item,key) in ItemList" :key="key" @click="JumpTo(item.url)">
				<image :src="item.src" class="img"></image>
				<text class="font1">{{item.name}}</text>
				<text class="font2">{{item.context}}</text>
				
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
				ItemList:[]
			}
		},
		mounted(){
			this.getMenu();
		},
		methods:{
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
							this.ItemList = tmp.ItemList;
						}
					},
					() => {}
				);
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: #FFFFFF;
		padding-bottom: 10px;
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
		padding: 0 30px;
		flex-direction: row;
		justify-content: space-around;
	}
	.item{
		height: 212px;
		width: 222px;
		
	}
	.img{
		height: 212px;
		width: 222px;
		position: absolute;
		top:0px;
		left: 0px;
	}
	.font1{
		font-size: 24px;
		color: rgb(69,69,69);
		font-family: PingFangSc-Medlum;
		margin-top: 38px;
		margin-left: 20px;
	}
	.font2{
		font-size: 20px;
		color: rgba(176,176,176,0.7);
		font-family: PingFangSc-Regular;
		margin-top: 18px;
		margin-left: 20px;
	}
</style>