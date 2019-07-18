<template>
	<div class="container">
		<div v-if="showTry" class="xialaBtn" @click="chengMoney">
			<text class="font6">{{money}}</text>
			<image class="xialaImg" src="./imgs/finance/xiala3.png"></image>
		</div>
		<div v-else class="xialaBtn">
			<text class="font6">{{prestoreMoney}}</text>
		</div>
		<div class="center" @touchmove="touchmove" @touchstart="touchstart">
			
			<div class="div1">
			</div>
			<div class="div" :style="{'width': cswidth}" >
			</div>
			<div class="item1">
				<div style="margin-bottom: 20px;align-items: center;" v-if="clickNum == '0'">
					<text class="font1">{{result | addDot}}</text>
					<image class="sanjiao2" src="./imgs/finance/bottomSanjiao.png"></image>
				</div>
				<image class="yuedian1" src="./imgs/finance/dian5.png"></image>
				<text class="font7">{{dateList[0].stepTime}}</text>
				<text class="font8">{{dateList[0].baseir}}</text>
			</div>
			<div class="item2">
				<div style="margin-bottom: 20px;align-items: center;" v-if="clickNum == '1'">
					<text class="font1">{{result | addDot}}</text>
					<image class="sanjiao2" src="./imgs/finance/bottomSanjiao.png"></image>
				</div>
				<image class="yuedian2" src="./imgs/finance/dian5.png"></image>
				<text class="font7">{{dateList[1].stepTime}}</text>
				<text class="font8">{{dateList[1].baseir}}</text>
			</div>
			<div class="item2">
				<div style="margin-bottom: 20px;align-items: center;" v-if="clickNum == '2'">
					<text class="font1">{{result | addDot}}</text>
					<image class="sanjiao2" src="./imgs/finance/bottomSanjiao.png"></image>
				</div>
				<image class="yuedian2" src="./imgs/finance/dian5.png"></image>
				<text class="font7">{{dateList[2].stepTime}}</text>
				<text class="font8">{{dateList[2].baseir}}</text>
			</div>
			<div class="item2">
				<div style="margin-bottom: 20px;align-items: center;" v-if="clickNum == '3'">
					<text class="font1">{{result | addDot}}</text>
					<image class="sanjiao2" src="./imgs/finance/bottomSanjiao.png"></image>
				</div>
				<image class="yuedian2" src="./imgs/finance/dian5.png"></image>
				<text class="font7">{{dateList[3].stepTime}}</text>
				<text class="font8">{{dateList[3].baseir}}</text>
			</div>
			<div class="item3">
				<div style="margin-bottom: 20px;align-items: center;" v-if="clickNum == '4'">
					<text class="font1">{{result | addDot}}</text>
					<image class="sanjiao2" src="./imgs/finance/bottomSanjiao.png"></image>
				</div>
				<image class="yuedian3" src="./imgs/finance/dian5.png"></image>
				<text class="font7">{{dateList[4].stepTime}}</text>
				<text class="font8">{{dateList[4].baseir}}</text>
			</div>
		</div>
	</div>
</template>

<script>
	const stream = weex.requireModule("stream");
	const context = weex.requireModule("context");
	const picker = weex.requireModule("picker");
	const pickview = weex.requireModule("pickview");
	export default {
		props:{
			cswidth:{
				type: String,
				default:"0px"
			},
			prestoreMoney:{
				type: String,
				default:"100000"
			},
			showTry:{
				type: Boolean,
				default:true
			}
		},
		data() {
			return {
				result: "",
				clickNum: "-1",
				info:"我是坐标",
				imgleft:"0px",
				money:"10万",
				dateList:[],
			}
		},
		mounted(){
			this.getDate1();
		},
		methods: {
			getDate(){
				stream.fetch({
						method: "GET",
						url: "./json/financeCZ/rateClass.json",
						type: "json"
					},
					res => {
						this.dateList = res.data.data.centerList;
						if(parseInt(this.cswidth) <= 172.5){
							this.look("0");
						}else if(parseInt(this.cswidth) <= 345){
							this.look("1");
						}else if(parseInt(this.cswidth) <= 517.5){
							this.look("2");
						}else if(parseInt(this.cswidth) <= 670.75){
							this.look("3");
						}else if(parseInt(this.cswidth) <= 690){
							this.look("4");
						}
					}
				);
			},
			getDate1(){
				this.postDo("IntelligentInterestQry.do",{},data=>{
//					this.alertMsg(JSON.stringify(data));
					this.dateList = data.resultMap.List;
				},()=>{
					this.getDate();
				});
			},
			look(id) {
				this.clickNum = id;
				if(id == '0') {
					this.result = parseInt(this.prestoreMoney) * this.dateList[0].stepRate;
				} else if(id == '1') {
					this.result = parseInt(this.prestoreMoney) * this.dateList[1].stepRate;
				} else if(id == '2') {
					this.result = parseInt(this.prestoreMoney) * this.dateList[2].stepRate;
				} else if(id == '3') {
					this.result = parseInt(this.prestoreMoney) * this.dateList[3].stepRate;
				} else {
					this.result = parseInt(this.prestoreMoney) * this.dateList[4].stepRate;
				}
			},
			touchstart(e){
				thsi.setInfo(e);
			},
			touchmove(e){
				this.setInfo(e);	
			},
			setInfo(e) {
				this.cswidth = e.changedTouches[0].pageX+"px";
				if(e.changedTouches[0].pageX <= 172.5){
					this.look("0");
				}else if(e.changedTouches[0].pageX <= 345){
					this.look("1");
				}else if(e.changedTouches[0].pageX <= 517.5){
					this.look("2");
				}else if(e.changedTouches[0].pageX <= 670.75){
					this.look("3");
				}else if(e.changedTouches[0].pageX <= 690){
					this.look("4");
				}
		    },
		    chengMoney(){
		    	let items = ["10万", "5万", "2万", "1万","5千"];
		    	let liems1 = [
		    		{
		    			"showMoney":"1万",
		    			"money":10000
		    		},{
		    			"showMoney":"5万",
		    			"money":50000
		    		},{
		    			"showMoney":"10万",
		    			"money":100000
		    		},{
		    			"showMoney":"50万",
		    			"money":500000
		    		},{
		    			"showMoney":"100万",
		    			"money":1000000
		    		}
		    	]
		    	if(WXEnvironment.platform != "iOS"){
		    		pickview.showOptionsPicker(liems1,data=>{
		    			this.clickNum = "-1";
						this.cswidth = "0px";
						this.prestoreMoney = data.money;
						this.money = data.showMoney;
		    		});
		    	}else{
		    		picker.pick({
							confirmTitle: "确认",
							cancelTitle: "取消",
							index: 0,
							items:liems1
						},
						event => {
							if(event.result == "success") {
								this.clickNum = "-1";
								this.cswidth = "0px";
								this.prestoreMoney = liems1[event.data].money;
								this.money = liems1[event.data].showMoney;
							}
						}
					);
		    	}
		    }
		},
		filters: {
			addDot(val) {
				var Astr = val.toString();
				Astr = Astr.replace(/,/g, '');
				if(Astr.indexOf(".") != -1) {
					var str = Astr.split(".")[0]
					var afDot = Astr.split(".")[1]
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + "." + afDot.substring(0,2);
				} else {
					var str = val.toString();
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + ".00";
				}
			}
		}
	}
</script>

<style scoped>
	.info {
	  font-size: 50px;
	}
	.div{
		height: 15px;
		background-color: rgb(255, 198, 1);
		border-radius: 7.5px;
		position: absolute;
		top:72px ;
		left: 0px;
	}
	.div1{
		height: 15px;
		background-color: #EEEEEE;
		width: 690px;
		position: absolute;
		top:72px ;
		left: 0px;
		border-radius: 7.5px;
	}
	.yuedianCS{
		height: 26px;
		width: 26px;
		position: absolute;
		top:12px ;
		left: 0px;
	}
	.container {
		width: 750px;
		background-color: #FFFFFF;
	}
	
	.xialaBtn {
		width: 300px;
		height: 60px;
		border-radius: 5px;
		background-color: #FAAC3C;
		margin-left: 225px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 50px;
		margin-top: 50px;
	}
	
	.font6 {
		font-size: 30px;
		font-family: PingFangSc-Medlum;
		color: #FFFFFF;
	}
	
	.xialaImg {
		width: 26px;
		height: 13px;
		margin-left: 10px;
		margin-top: 5px;
	}
	
	.item1 {
		height: 150px;
		width: 86.25px;
		align-items: flex-start;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	
	.item3 {
		height: 150px;
		width: 86.25px;
		align-items: flex-end;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	
	.font7 {
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: rgb(51, 51, 51);
		letter-spacing: 0;
		margin-top: 20px;
	}
	
	.font8 {
		font-family: PingFangSC-Regular;
		font-size: 18px;
		color: #AFB1B3;
		letter-spacing: 0;
	}
	.yuedian1 {
		height: 26px;
		width: 26px;
		position: absolute;
		left: -1px;
		top: 68px;
	}
	
	.center {
		width: 689px;
		margin-left: 30px;
		flex-direction: row;
		align-items: center;
	}
	
	.yuedian2 {
		height: 26px;
		width: 26px;
		position: absolute;
		left: 73.25px;
		top: 68px;
	}
	
	.yuedian3 {
		height: 26px;
		width: 26px;
		position: absolute;
		right: -1px;
		top: 68px;
	}
	
	.item2 {
		height: 150px;
		width: 172.5px;
		align-items: center;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	
	.font1 {
		background-color: #F1EEE6;
		color: #484040;
		font-size: 16px;
		line-height: 30px;
		padding: 0 10px;
		border-radius: 4px;
	}
	.sanjiao2 {
		height: 9px;
		width: 18px;
	}
</style>