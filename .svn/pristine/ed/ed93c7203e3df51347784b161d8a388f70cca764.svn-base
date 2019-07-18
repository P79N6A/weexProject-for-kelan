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
			<div class="row2" v-for="(item,key) in list" :key="key">
				<div class="item4" style="align-items: flex-start;"> 
					<text class="font6">{{item.smryif}}</text>
				</div>
	            <div class="item4_1">
	                <text class="font5_1">+{{item.tsamot | addDot}}</text>
					<text class="font5">{{item.usdate}}</text>
				</div>
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
				title: "超值天添盈收益明细",
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
                list:[],
                showPopup:false,
                 StartDate:"",
                EndDate:""
			}
		},
		created(){
			this.getPost();
		},
		methods:{
				//筛选确认
			confirm(item){
				this.showPopup = false;
//				this.alertMsg(JSON.stringify(item));
				this.StartDate = item.startDate;
				this.EndDate = item.endDate;
				this.getPost(); 
			},
			mpBarLeftBtnClick(){
				this.goBack();
			},
			getPost(){
				const param ={
					"StartDate":this.StartDate,
					"EndDate":this.EndDate,
					"Frbgsq":"1",
					"Qrycnt":"10"
				}
				this.postDo("IntelligentdepositInComeQry.do",param,data=>{
					this.list = data.resultMap.List;
				})
			},
			mpBarRightBtnClick(){
				this.showPopup = !this.showPopup;
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
    .item4 {
        flex-direction: column;
        /*justify-content: space-between;*/
        background-color:#ffffff;
        align-items: center;
	}
	.item4_1{
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