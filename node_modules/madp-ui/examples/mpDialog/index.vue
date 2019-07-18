<template>
    <div>
      <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>
        <scroller>
            
            <text class="btn" @click="openAlert">打开Alert对话框</text>
            <text class="btn marginBtn" @click="openConfirm">打开Confirm对话框</text>
            <text class="btn marginBtn" @click="openPrompt">打开Prompt对话框</text>
            <mp-dialog :show="show" @mpDialogLeftClick="mpDialogLeftClick" @mpDialogRightClick="mpDialogRightClick"
            :type="type"
            :title="title"
            :message="message"
            :leftBtn="leftBtn"
            :rightBtn="rightBtn"
             ></mp-dialog>
        </scroller>
    </div>
</template>
<style scoped>
.btn {
  width: 600px;
  height: 80px;
  line-height: 80px;
  margin-top: 300px;
  margin-left: 75px;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #fff;
  background-color: #a00;
  border-color: #a00;
}
.marginBtn {
  margin-top: 50px;
}
</style>
<script>
import { MpDialog ,MpBar} from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpDialog ,MpBar},
  data() {
    return {
        show:false,
        type:"alert",
        title:"提示",
        message:"这是一条消息",
        leftBtn:"确认",
        rightBtn:"取消"
    }
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E5%25AF%25B9%25E8%25AF%259D%25E6%25A1%2586%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E5%25AF%25B9%25E8%25AF%259D%25E6%25A1%2586%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    openAlert() {
      this.show = true;
      this.type="alert";
    },
    openConfirm() {
      this.show = true;
      this.type="confirm";
    },
    openPrompt() {
      this.show = true;
      this.type="prompt";
    },
    mpDialogLeftClick(data){
        this.show = false;
        modal.alert({message:data})
    },
    mpDialogRightClick(){
        this.show = false;
    }
  }
};
</script>

