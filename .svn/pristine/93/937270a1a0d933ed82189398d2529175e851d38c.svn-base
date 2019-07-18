<template>
  <div @clickbackitem="fanhui"  @viewappear="viewappear">
    <!--主界面-->
    <router-view style="flex:1"></router-view>
    <!-- 遮罩 -->
    <mp-mask :show="$store.state.overLayShow"></mp-mask>
    <!-- 退出客户端弹框 -->
    <dialog :show="$store.state.show"
    				@confirm="confirm"
    	  		@cancel="cancel"
            :title="title"
            :content="message"
            :left="leftBtn"
            :right="rightBtn"
             ></dialog>
  </div>
</template>

<script>
const context = weex.requireModule("context");
import Dialog from "@/components/dialog.vue"

import { MpMask} from "madp-ui";
export default {
  components:{MpMask,Dialog},
  data() {
    return {
        title:"提示",
        message:"是否确认退出客户端？",
        leftBtn:"取消",
        rightBtn:"确认"
    };
  },
  created() {
    
  },
  mounted() {
    
  },
  methods:{
  	fanhui(){
    		if(context.getParam("return") == "changePwd"){  //修改密码完成到登录页面点击物理返回键
    			context.replaceStage("main.launcher");
    		}else if (context.sessionGetString("isBack")){  //修改密码完成点击物理返回键
    			context.replaceStage("main.launcher");
    		}else{
    			this.goBack();
    		}
    },
    confirm() {
      context.shutdown()
    },
    cancel() {
      this.$store.state.show = false;
    },
    viewappear() {
				let islogin = context.sessionGetString("isLogin");
				if(islogin=='true'){
					this.$store.state.login=true;
					this.$store.state.name = context.sessionGetString("cifName");  //登录名
					this.$store.state.lastLoginTime = "欢迎回来,上次登录时间" + context.sessionGetString("lastLoginTime");  //上次登录时间
					this.$store.state.CZisSign = JSON.parse(context.sessionGetString("loginMsg")).IsSignFlag;
				}else{
					this.$store.state.login=false;
					this.$store.state.name = "阳阳农"
					this.$store.state.lastLoginTime = "欢迎回来,"+"上次登录时间2019-5-29";
					this.$store.state.CZisSign = "0";
        }
				if(context.sessionGetString("IsSignFlag")){
					this.$store.state.CZisSign = "1"
				}
        if(context.sessionGetString("authResultData") !=""){
          this.$store.state.flag=true;
        }else{
          this.$store.state.flag=false;
        }
			}
  }
};
</script>
