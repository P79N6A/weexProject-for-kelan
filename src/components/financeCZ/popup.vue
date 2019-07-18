<template>
	<div class="wrapper">
		<div class="wxc-overlay" v-if = "show" @click="wxcPopupOverlayClicked"></div>
		<div :hack="isNeedShow" v-if = "show" ref="popup" class="popup">
			<div>
				<div style="width: 750px;flex-direction: row;height: 100px;align-items: flex-end;justify-content: space-between;padding-left: 30px;padding-right: 30px;">
					<text class="font1">交易时间</text>
					<text class="font4">最长可查询跨度一年时间</text>
				</div>
				<div style="width: 750px;flex-direction: row;height: 100px;align-items:center;justify-content: space-between;padding-left: 30px;padding-right: 30px;margin-top: 30px;">
					<div style="flex-direction: row;align-items: center;">
						<input type="date" v-model="startDate" class="input" @input="getDate1"/>
						<text class="font5">-</text>
						<input type="date" v-model="endDate" class="input" @input="getDate2"/>
					</div>
					<div class="btn" @click="confirm">
						<text class="font6">确定</text>
					</div>
				</div>
			</div>
		</div>
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
		created(){
			this.getDate();
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
			getDate1(event){
				this.startDate = event.value;
			},
			getDate2(event){
				this.endDate = event.value;
			},
			getDate(){
				var date = new Date();
		        var seperator1 = "-";
		        var year = date.getFullYear();
		        var month = date.getMonth() + 1;
		        var strDate = date.getDate();
		        if (month >= 1 && month <= 9) {
		            month = "0" + month;
		        }
		        if (strDate >= 0 && strDate <= 9) {
		            strDate = "0" + strDate;
		        }
		        var currentdate = year + seperator1 + month + seperator1 + strDate;
		        this.startDate = currentdate;
		        this.endDate = currentdate;
			},
			wxcPopupOverlayClicked(){
				this.$emit("wxcPopupOverlayClicked");
				
			},
			confirm(){
				var flag = this.compare(this.startDate,this.endDate);
				if(flag){
					const param = {
						"startDate":this.startDate,
						"endDate":this.endDate 
					}
					this.$emit("confirm",param)
				}else{
					this.alertMsg("开始日期不能大于结束日期");
				}
				
			},
			compare(startDate,endDate){
				var start = parseInt(startDate.replace(/-/g,""));
				var end = parseInt(endDate.replace(/-/g,""));
				if(start <= end){
					return true;
				}else{
					return false;
				}
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
		height: 300px;
		background-color: rgb(255, 255, 255);
	}
	
	.wrapper {
		position: fixed;
		width: 750px;
		/*兼容H5异常*/
		z-index: 99999;
	}
</style>