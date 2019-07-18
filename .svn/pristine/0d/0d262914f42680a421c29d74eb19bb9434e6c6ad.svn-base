
<template>
	<div class="conatainer">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			:bgUrl="bgUrl"
			:bgStyle="bgStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick" 
			></mp-bar>
		<scroller style="flex: 1;">
			<image class="bgimg" src="./imgs/finance/bgImg1.png"></image>
			<div class="top">
				<div class="item1">
					<text class="font1">总金额</text>
					<image class="yan" src=""></image>
				</div>
				<div class="item1">
					<text class="font2">{{money | addDot}}</text>
				</div>
				<div class="row">
					<image class="sanjiao" src="./imgs/finance/topsanjiao.png"></image>
					<div class="fontBox">
						<text class="font3">昨日收益</text>
						<text class="font4">{{shouyi | addDot}}</text>
						<text class="font3">元</text>
					</div>
				</div>
				<div class="item1">
					<div class="item2">
						<text class="font5">业绩比较精准</text>
						<text class="font6">{{rate}}%</text>
					</div>
					<div class="item2">
						<text class="font5">累积收益(元)</text>
						<text class="font6">{{allShouyi | addDot}}</text>
					</div>
				</div>
				<div class="item1">
					<div class="item3">
						<div class="dian"></div>
						<text class="font7">理财非存款，投资有风险，投资需谨慎</text>
					</div>
				</div>
			</div>
			<div>
				<div class="title">
					<text class="font8">产品规则</text>
					<text class="font5" style="margin-left: 20px;">请详细阅读产品规则</text>
				</div>
				<div class="content">
					<text class="font9">产品简介</text>
					<text class="font10">请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则</text>
				</div>
				<div class="content">
					<text class="font9">产品简介</text>
					<text class="font10">请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则</text>
				</div>
				<div class="content">
					<text class="font9">产品简介</text>
					<text class="font10">请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则</text>
				</div>
				<div class="content">
					<text class="font9">产品简介</text>
					<text class="font10">请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则请详细阅读产品规则</text>
				</div>
			</div>
		</scroller>
		<div :class="[active ? 'bottom' : 'bottom1']">
			<div class="bottom-item1">
				<div style="height: 60px;width: 60px;align-items: center;justify-content: center;" @click="check">
					<image class="img1" src="./imgs/register/checkIn.png" style="margin-right:10px" v-if="imgshow" ></image>
					<image class="img1" src="./imgs/register/checkOut.png" style="margin-right:10px" v-else></image>
				</div>
				<text class="font5" style="font-size: 24px;">请阅读产品说明书及风险提示</text>
				<text class="font7" style="margin-left: 0px;font-size: 24px;">《超值宝活期业务用户服务协议》</text>
			</div>
			<div class="bottom-item2">
				<div class="leftBtn" @click="gotoSH">
					<text class="font11">我要赎回</text>
				</div>
				<div class="rightBtn" @click="gotoGM">
					<image class="btnBgimg" src="./imgs/finance/bottomLeftBtn.png"></image>
					<text class="font12">立即购买</text>
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
				title: "超值宝活期",
				titleStyle: {
					"font-family": "PingFangSC-Semibold",
					"font-size": "36px",
					"color": "rgb(255,255,255)",
					"letter-spacing": "-0.64px"
				},
				leftBtn: "./imgs/arrow-back.png",
				leftBtnStyle: {
					width: "15px",
					height: "27px"
				},
				barStyle: {
					'height': '150px',
					'padding-top': '60px'
				},
				bgUrl:"./imgs/finance/barBgImg.png",
				bgStyle:{
					width:"750px",
					height:"150px"
				},
				money:"342483.23",
				shouyi:"3.13",
				rate:3.66,
				allShouyi:"345",
				active:true,
				imgshow:true
			}
		},
		created() {
			if(this.isipx() == 1) {
				this.active = false;
			} else {
				this.active = true;
			}
		},
		methods:{
			mpBarLeftBtnClick(){
				this.goBack();
			},
			check(){
				this.imgshow = !this.imgshow
			},
			//我要赎回
			gotoSH(){
				
			},
			//立即购买
			gotoGM(){
				this.jump("/buyCzb");
			}
		},
		filters:{
			addDot(val){
		        var Astr = val.toString();
		        Astr = Astr.replace(/,/g,'');
		        if(Astr.indexOf(".") != -1){
		            var str = Astr.split(".")[0]
		            var afDot = Astr.split(".")[1]
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+"."+afDot;
		        }else{
		            var str = val.toString();
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+".00";
		        }
		    }
		}
	}
</script>

<style scoped>
	.big{
		flex: 1;
		margin-bottom: 200px;
	}
	.big1{
		flex: 1;
		margin-bottom: 250px;
	}
	.conatainer{
		width: 750px;
		background-color: rgb(248,248,248);
	}
	.bgimg{
		width: 750px;
		height: 426px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.top{
		width: 690px;
		margin-left: 30px;
		margin-top: 10px;
		border-radius: 5px;
		background-color: #FFFFFF;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.item1{
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}
	.row{
		width: 690px;
		align-items: center;
		justify-content: center;
	}
	.font1{
		font-size: 26px;
		color: rgb(120,120,120);
	}
	.yan{
		width: 30px;
		height: 30px;
		margin-left: 5px;
		background-color: #222222;
	}
	.font2{
		font-size: 48px;
		color: rgb(51,51,51);
		font-weight: 700;
	}
	.sanjiao{
		width: 48px;
		height: 12px;
	}
	.fontBox{
		height: 60px;
		border-radius: 40px;
		padding: 0 30px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color:rgb(242,239,233) ;
		margin-top: -3px;
	}
	.font3{
		font-size: 26px;
		color: rgb(106,106,106);
	}
	.font4{
		font-size: 28px;
		color:rgb(240,35,51) ;
		margin-left: 10px;
		margin-right: 10px;
	}
	.item2{
		width: 300px;
		height: 90px;
		align-items: center;
		justify-content: space-between;
		margin-top: 50px;
	}
	.font5{
		font-size: 26px;
		color: rgb(203,203,203);
	}
	.font6{
		font-size: 26px;
		color: rgb(61,61,61);
	}
	.item3{
		flex-direction: row;
		align-items: center;
		padding: 0 30px;
		background-color:rgb(249,243,235) ;
		border-radius: 5px;
		height: 80px;
		margin-top: 20px;
	}
	.dian{
		width: 12px;
		height: 12px;
		border-radius: 6px;
		background-color: #FC8109;
	}
	.font7{
		font-size: 26px;
		color: #FC8109;
		margin-left: 20px;
	}
	.title{
		width: 750px;
		height: 90px;
		padding-left: 30px;
		padding-bottom: 20px;
		flex-direction: row;
		align-items: flex-end;
	}
	.font8{
		font-size: 30px;
		color: rgb(61,61,61);
	}
	.content{
		width: 750px;
		padding-top:20px ;
		padding-left: 30px;
		background-color: #FFFFFF;
	}
	.font9{
		font-size: 26px;
		color: rgb(142,142,142);
	}
	.font10{
		font-size: 26px;
		color: rgb(164,164,164);
		width: 690px;
		line-height: 30px;
		margin-top: 20px;
	}
	.bottom{
		position: flex;
		width: 750px;
		bottom: 0px;
		left: 0px;
		height: 200px;
		background-color: #FFFFFF;
	}
	.bottom1{
		position: flex;
		width: 750px;
		bottom: 0px;
		left: 0px;
		height: 250px;
		background-color: #FFFFFF;
	}
	.img1 {
		width: 20px;    
 		height: 20px;
	}
	.bottom-item1{
		flex-direction: row;
		height: 80px;
		align-items: center;
	}
	.bottom-item2{
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