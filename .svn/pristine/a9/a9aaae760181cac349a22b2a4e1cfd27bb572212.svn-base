<template>
	<div class="container">
        <div class="fingerDiv">
        	<weex-lockview   ref="lockview1" 
                             class="activeS"
                             @onComplete="onComplete" 
                             lineWidth="3" 
                             normalColor="#e9e7e4" 
                             selectColor="#ffad00" 
                             errorColor="#ff2e13" 
                             :inStealthMode="inStealthMode"
                             :defaultSelected="defaultSelected"
                             ratio="0.8">
            </weex-lockview>
        	<text :class="[active?'message1':'message2']">{{myTxt2}}</text>
        </div>
        <div class="title">
            <weex-lockview   ref="lockview" 
                             class="active"
                             @onComplete="onComplete" 
                             lineWidth="3" 
                             normalColor="#e9e7e4" 
                             selectColor="#ffad00" 
                             errorColor="#ff2e13" 
                             ratio="0.8">
            </weex-lockview>
         </div> 
         
  </div>
</template>

<script>
	const context = weex.requireModule('context');
	export default{
		components:{
		},
		data(){
			return{
				myTxt2:"请绘制您的解锁密码",
				title:"设置手势密码",
				time:0,
				timeStamp:"",
				gesturePassword:"", // 第一次绘制的密码
				gesturePasswordone:"",   //第二次绘制的密码
				Sspassword:"",   //密码
				active:true,
				defaultSelected:"",
				inStealthMode:true,
				lastSsPssword:""
				
			}
		},
		created(){
			
		},
		methods:{
			//设置手势
			setGersture(){
				const param = {
					"Flag":"Y",
					"TuxPassword":this.Sspassword
				}
				this.postDo("GestureStatusSet.do",param,data=>{
					context.secureSetString("isGestureOpen","Y")
					this.$store.state.isGestureOpen = false;
					this.toastMsg("设置成功");
					this.goBack();
					
				});
			},
			onComplete(event){
				if(this.time==0){
					if(event.text.length<4){
						if(event.text != this.lastSsPssword){
							this.lastSsPssword  = event.text;
							this.$refs.lockview1.clear();
						}
						this.defaultSelected = this.util(event.text);
//						this.$refs.lockview1.error();
						this.myTxt2 = "至少连接4个点，请重新绘制";
						this.active = false;
						this.$refs.lockview.error();
						setTimeout(()=>{
							this.$refs.lockview.clear();
							this.myTxt2 = "请绘制您的解锁密码";
							this.active = true;
						},1000);
						return;
					}
					this.time++;
					this.myTxt2="请再次绘制您的解锁密码";
					this.gesturePassword=event.text;
					this.$refs.lockview.clear();
					if(event.text != this.lastSsPssword){
						this.lastSsPssword  = event.text;
						this.$refs.lockview1.clear();
					}
					this.defaultSelected = ""
					this.defaultSelected = this.util(this.gesturePassword);
					
				}else{
					this.gesturePasswordone=event.text;
					if(event.text != this.lastSsPssword){
						this.lastSsPssword  = event.text;
						this.$refs.lockview1.clear();
					}
					this.defaultSelected = this.util(this.gesturePasswordone);
					if(this.gesturePasswordone==this.gesturePassword){
						this.Sspassword = this.gesturePasswordone;
						this.setGersture();
					}else{
						this.defaultSelected = this.util(this.gesturePasswordone);
//						this.$refs.lockview1.error();
						this.myTxt2 = "您两次绘制的密码不一致";
						this.active = false;
						this.$refs.lockview.error();
						setTimeout(()=>{
							this.$refs.lockview.clear();
							this.myTxt2 = "请再次绘制您的解锁密码";
							this.active = true;
						},1000);
					}
				}
			},
			util(value){
				var result = "";
				for(var i=0;i<value.length;i++){
					if(i!= (value.length-1)){
						result = result+value[i]+",";
					}else{
						result = result+value[i];
					}
				}
				return result;
			}
		}
	}
</script>

<style scoped>
.container{
	width: 750px;
	margin-top: 20px;
	align-items: center;
	flex: 1;
	justify-content:flex-start;
}
.fingerDiv{
    flex-direction: column;
    justify-content: center;
    width: 750px;
    align-items: center;
    margin-top: 138px;
    
}
.title{
	margin-top: 30px;
}

.message1{
	font-size: 30px;
	font-family: PingFangSc-Regular;
	color: rgb(189, 193, 209);
	margin-top: 60px;
}
.message2{
	font-size: 30px;
	font-family: PingFangSc-Regular;
	color: rgb(255, 46, 19);
	margin-top: 60px;
}

.active{
	width: 500px;
	height: 500px;
	
}
.activeS{
	width: 126px;
	height: 126px;
}


</style>