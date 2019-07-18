<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			></mp-bar>
		<scroller style="flex: 1;">
			<div class="big">
				<div class="item">
					<text class="font">存入口令</text>
					<text class="font">{{items.ItemId}}</text>
				</div>
				<div class="item">
					<text class="font">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</text>
					<text class="font">{{name}}</text>
				</div>
				<div class="item">
					<text class="font">身份证号</text>
					<text class="font">{{idCard | sub}}</text>
				</div>
				<div class="item">
					<text class="font">手机号码</text>
					<text class="font">{{MobilePhone}}</text>
				</div>
				<div class="item">
					<text class="font">资产合计</text>
					<text class="font">{{items.DepositSumAmt | addDot}}元</text>
				</div>
			</div>
			<div class="bottom">
				<div class="item1">
					<div class="box1">
						<text class="font2">存入网点</text>
					</div>
					<div class="box2">
						<text class="font2">存入金额</text>
					</div>
					<div class="box3">
						<text class="font2">存入日期</text>
					</div>
				</div>
				<div class="item1" v-for="(item,key) in List" :key="key" @click="getCundanDetails(item)">
					<div class="box1">
						<text v-if="item.PrdFlag == '1'" class="font3">{{item.DeptName}}</text>
						<text v-else class="font3_1">{{item.DeptName}}</text>
					</div>
					<div class="box2">
						<text v-if="item.PrdFlag == '1'" class="font4">{{item.TrsAmount | addDot}}</text>
						<text v-else class="font4_1">{{item.TrsAmount | addDot}}</text>
					</div>
					<div class="box3">
						<text v-if="item.PrdFlag == '1'" class="font5">{{item.CYCDepositDate}}</text>
						<text v-else class="font5_1">{{item.CYCDepositDate}}</text>
						<image class="img" src="./imgs/tab_user/menu/img_right.png"></image>
					</div>
				</div>
			</div>
		</scroller>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar
		},
		data(){
			return {
				title: "我的存单",
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
				items:"",
				List :[],
				MobilePhone:"",
				name:"",
				idCard:"8823948923842938429",
				DepositSunAmt:"0.00"  //资产合计
				
			}
		},
		created(){
			if(context.sessionGetString("loginMsg")){
				this.idCard = JSON.parse(context.sessionGetString("loginMsg")).IdNo;
				this.MobilePhone = JSON.parse(context.sessionGetString("loginMsg")).MobilePhone;
				this.name = JSON.parse(context.sessionGetString("loginMsg")).CifName;
			}
			this.items = this.$store.state.CYCInfo;
			this.List = this.$store.state.CYCInfo.subList;
//			this.alertMsg(JSON.stringify(this.items));
		},
		methods:{
			getCundanDetails(item){
				this.$store.state.cundanDetails = item;
				this.jump("/cundanDetails");
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
		},
		filters:{
			addDot(val){
				if(val == "" || val == undefined){
					return "0.00"
				}else{
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
		    },
		    sub(val){
		    	var str = val.toString();
		    	return val.substring(0,6)+"****"+val.substring(val.length-4,val.length)
		    
		    }
		}
	}
</script>

<style scoped>
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.big{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item {
		width: 720px;
		height: 90px;
		border-bottom-width: 1px;
		border-bottom-color: #f0f0f0;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 30px;
	}
	
	.font {
		font-size: 28px;
		color: rgb(51, 51, 51);
	}
	.font1{
		font-size: 28px;
		color: #E93F1D;
	}
	.bottom{
		width: 750px;
		background-color: #FFFFFF;
		margin-top: 20px;
	}
	.item1{
		width: 750px;
		height: 80px;
		flex-direction: row;
	}
	.box1{
		width: 249.3px;
		height: 78px;
		border-bottom-width:2px ;
		border-color: rgb(244,244,255);
		/*border-color: red;*/
		border-right-width:1px ;
		align-items: center;
		justify-content: center;
	}
	.box2{
		width: 249.3px;
		height: 78px;
		border-bottom-width:2px ;
		border-color: rgb(244,244,255);
		/*border-color: red;*/
		border-right-width:1px ;
		border-left-width:1px ;
		align-items: center;
		justify-content: center;
	}
	.box3{
		width: 249.3px;
		height: 78px;
		flex-direction: row;
		border-bottom-width:2px ;
		border-color: rgb(244,244,255);
		/*border-color: red;*/
		border-left-width:1px ;
		align-items: center;
		justify-content: center;
	}
	.img{
		width: 15px;
		height: 25px;
	}
	.font2{
		font-size: 28px;
		color: rgb(88,88,88);
	}
	.font3{
		font-size: 24px;
		color: rgb(183,183,183);
		width: 200px;
		text-align: center;
	}
	.font4{
		font-size: 24px;
		color:#E93F1D;
		width: 200px;
		text-align: center;
	}
	.font5{
		font-size: 24px;
		color: rgb(183,183,183);
		width: 200px;
		text-align: center;
	}
	.font3_1{
		font-size: 24px;
		color: rgb(51,51,51);
		width: 200px;
		text-align: center;
	}
	.font4_1{
		font-size: 24px;
		color:#E93F1D;
		width: 200px;
		text-align: center;
	}
	.font5_1{
		font-size: 24px;
		color: rgb(51,51,51);
		width: 200px;
		text-align: center;
	}
	
</style>