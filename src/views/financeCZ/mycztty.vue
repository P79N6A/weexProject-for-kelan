<template>
	<div class="container">
		<mp-bar 
			:title="title" 
			:titleStyle="titleStyle" 
			:barStyle="barStyle" 
			:leftBtn="leftBtn" 
			:leftBtnStyle="leftBtnStyle"
			@mpBarLeftBtnClick="mpBarLeftBtnClick"
			:rightTxt="rightTxt" 
			:rightTxtStyle="rightTxtStyle" 
			@mpBarRightBtnClick="mpBarRightBtnClick"></mp-bar>
		<scroller style="flex: 1;">
			<!--<image class="bgimg" src="./imgs/finance/bgImg1.png"></image>
			<div class="row1">
				<div class="item1" style="margin-top: 30px;">
					<text class="font">总金额(元)</text>
					<image v-if="showmoney" class="yanj1" src="./imgs/finance/xiaoyanjhz.png" @click="shwoMoney"></image>
					<image v-else class="yanj2" src="./imgs/finance/xiaoyanjhb.png" @click="shwoMoney"></image>
				</div>
				<div class="item1">
					<text v-if="showmoney" class="font1">{{info1}}</text>
					<text v-else class="font1">****</text>
				</div>
	            <div class="item1" style="margin-bottom: 30px;">
	            	<image class="bgimg2" src="./imgs/finance/bgImg2.png"></image>
	                <div class="item2">
	                    <text class="font3">累计结算</text>
	                    <text style="color: #F02736;font-size: 30px;margin-left: 10px;margin-right: 10px;">{{info2}}</text>
	                    <text class="font3">元</text>
	                </div>
				</div>
			</div>-->
			<!--<div>
				<div class="item1_1">
					<text class="font4" style="margin-right:10px;">产品列表</text>
					<text class="font4_1">您的专属芝米活期列表</text>
				</div>
			</div>-->
			<div class="row2" v-for="(item,key) in list">
				<div class="item4_1"> 
					<text class="font6">{{item.Zhaiyoms}}</text>
					<text class="font5">天添盈余额：{{item.Yueeeeee | addDot}}元</text>
				</div>
	            <div class="item4_2">
	                <text class="font5_1" v-if="item.Jiaoyije.indexOf('+') == '-1'">{{item.Jiaoyije}}</text>
	                 <text class="font5_2" v-else>{{item.Jiaoyije}}</text>
					<text class="font5">{{item.Xitongrq}}</text>
				</div>
	            <!--<div class="item4">
	                <text class="font5_1">7个月以上6月以内</text>
					<text class="font5">转入期限</text>
				</div>-->
	            <!--<div class="item4">
	                <image class="img1" src="./imgs/img_right.png" style="margin:0 6px"></image>
				</div>-->
			</div>
				
		</scroller>
		<popup :show="showPopup" @confirm="confirm"></popup>
	</div>
</template>

<script>
	import { MpBar } from "madp-ui";
	import popup from "@/components/financeCZ/popup.vue"
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	export default{
		components:{
			MpBar,
			popup
		},
		data(){
			return {
				title: "交易明细查询",
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
				bgUrl:"./imgs/finance/barBgImg.png",
				bgStyle:{
					width:"750px",
					height:"150px"
				},
				rightTxt: "筛选",
				rightTxtStyle: {
					"font-size": "26px",
					"font-family": "PingFangSc-Regular",
					"color": "rgb(51, 51, 51)"
				},
				imgshow:true,
                info1:'35,392.12',
                info2:'203.13',
                showmoney:false,
                list:[],
                showPopup:false,
                StartDate:"",
                EndDate:""
			}
		},
		created(){
			this.getList();
		},
		methods:{
			//筛选确认
			confirm(item){
				this.showPopup = false;
//				this.alertMsg(JSON.stringify(item));
				this.StartDate = item.startDate;
				this.EndDate = item.endDate;
				this.getList(); 
			},
			shwoMoney(){
				this.showmoney = !this.showmoney;
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			mpBarRightBtnClick(){
				this.showPopup = !this.showPopup;
			},
			//发交易
			getList(){
				const param = {
					"StartDate":this.StartDate,
					"EndDate":this.EndDate,
					"Frbgsq":"1",
					"Qrycnt":"10"
				}
				this.postDo("ZMTTYTransDetailQuery.do",param,data=>{
					this.list = data.resultMap.List;
				});
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
	.container{
		width: 750px;
		background-color: rgb(248, 248, 248);
	}
	.bgimg{
		width: 750px;
		height: 426px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.bgimg2{
		position: absolute;
		width: 304px;
		height: 64px;
		left: 193px;
		top: 0px;
	}
    .row1{
		margin-top:10px;
		width: 690px;
		margin-left: 30px;
		border-radius: 5px;
        flex-direction: column;
        justify-content: center;
        background-color:#ffffff;
        align-items: center;
	}
    .row2{
    	width: 690px;
    	margin-top: 20px;
		padding: 20px 30px;
		margin-left: 30px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color:#ffffff;
        border-radius:5px ;
	}
	.item1 {
		width: 690px;
		height: 90px;
		margin: 0 auto;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
    .item1_1 {
		width: 690px;
		height: 60px;
		margin-left: 30px;
		flex-direction: row;
		align-items: flex-end;
	}
	
    .item2 {
    	padding: 0 30px;
		height: 56px;
		flex-direction: row;
		background-color: rgb(242,239,233);
		border-radius: 28px;
		align-items: center;
		justify-content: center;
		margin-top: -20px;
	}
	.item4_1{
		 flex-direction: column;
        /*justify-content: space-between;*/
        background-color:#ffffff;
        align-items: flex-start;
	}
	.item4_2{
		 flex-direction: column;
        /*justify-content: space-between;*/
        background-color:#ffffff;
        align-items: flex-end;
	}
	.yanj1{
		width: 34px;
		height: 20px;
		margin-left: 20px;
	}
	.yanj2{
		width: 30px;
		height: 11px;
		margin-left: 20px;
	}
	
	.font {
		font-size: 26px;
		color: #666666;
	}
    .font1 {
		font-size: 60px;
        /* font-weight: 500; */
		color: #333333;
	}
    .font3 {
		font-size: 26px;
		color: #747373;
	}
    .font4 {
		font-size: 28px;
        font-weight: bold; 
		color: #3C3C3C;
	}
    .font4_1 {
		font-size: 22px;
		color: #C1C1C1;
	}
    .font5 {
    	line-height: 60px;
    	text-align: center;
		font-size: 26px;
		color: #8893A5;
	}
    .font5_1 {
    	line-height: 50px;
		text-align: center;
		font-size: 32px;
		color: #4bc04d;
	}
	.font5_2{
		line-height: 50px;
		text-align: center;
		font-size: 32px;
		color: #e94c09;
	}
	.font6{
		line-height: 50px;
		text-align: center;
		font-size:32px;
		color: rgb(31,31,31);
	}
	.img1 {
		width: 15px;    
 		height: 25px;
	}

</style>