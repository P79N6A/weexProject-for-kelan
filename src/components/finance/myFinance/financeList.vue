<template>
	<div class="container">
		<div class="item" v-for="(item,key) in list" :key="key" @click="gotoNext(item)">
			<div class="item-top">
				<text class="font2">{{item.title}}</text>
				<image v-if="showRight" class="rightImg" src="./imgs/finance/right.png"></image>
				<div v-else>
					<div class="shenggouzhong" v-if="cs">
						<text class="fontSG">赎回</text>
					</div>
					<div class="suhui" v-else>
						<text class="fontSH">申购中</text>
					</div>
				</div>
			</div>
			<div class="item-bottom">
				<div class="item-bottom-box">
					<image class="smallImg" src="./imgs/finance/sgfe.png"></image>
					<text class="font3">申购份额</text>
					<text class="font4">{{item.money | Sub}}</text>
				</div>
				<div class="item-bottom-box">
					<image class="smallImg" src="./imgs/finance/mjdqr.png"></image>
					<text class="font3">募集到期日</text>
					<text class="font5">{{item.time}}</text>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default {
		props:{
			list:{
				type: Array,
      			default: () => []
			},
			showRight:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return {
				cs:false
			}
		},
		methods:{
			//进入列表详情
			gotoNext(item){
				if(this.showRight){
					
				}else{
					this.jump("/detailsInfo");	
				}
			}
		},
		filters:{
			Sub(val){
				if(val.length > 18){
					return val.substring(0,18)+ ".."
				}else{
					return val
				}
			}
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
	}
	.item{
		width: 750px;
		height: 180px;
		background-color: #FFFFFF;
		margin-bottom: 20px;
	}
	.item-top{
		width: 720px;
		height: 90px;
		margin-left: 30px;
		border-bottom-width: 1px;
		border-bottom-color: #E7E7E7;
		padding-right: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.font2{
		font-family: PingFangSc-Regular;
		font-size: 30px;
		color: rgb(51, 51, 51);
		font-weight: 500;
	}
	.rightImg {
		width: 15px;
		height: 25px;
	}
	.item-bottom{
		width: 750px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.smallImg{
		width: 24px;
		height: 24px;
	}
	.item-bottom-box{
		height: 90px;
		flex-direction: row;
		align-items: center;
	}
	.font3{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#9DA5B5 ;
		margin-left: 10px;
	}
	.font4{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#F24753 ;
		margin-left: 10px;
	}
	.font5{
		font-family: PingFangSc-Regular;
		font-size: 26px;
		color:#757575 ;
		margin-left: 10px;
	}
	.shenggouzhong{
		width: 100px;
		height: 40px;
		border-width: 1px;
		border-color:rgb(223,223,223) ;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
	.fontSG{
		font-size: 26px;
		color:rgb(223,223,223)  ;
	}
	.suhui{
		width: 100px;
		height: 40px;
		border-width: 1px;
		border-color:rgb(233,179,87) ;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}
	.fontSH{
		font-size: 26px;
		color:rgb(233,179,87);
	}
	
</style>