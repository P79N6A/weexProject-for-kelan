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
   <div class="container">
    <text class="line">-------------------------</text>
    <mp-button title="按钮" @mpButtonClick="mpButtonClick"></mp-button>
    <text class="line">-------------------------</text>
    <mp-button title="按钮" :btnClass="btnClass"></mp-button>
    <text class="line">-------------------------</text>
    <mp-button title="按钮" :btnStyle="btnStyle"></mp-button>
    <text class="line">-------------------------</text>
    <mp-button title="按钮" :btnClass="btnClass" :btnStyle="btnStyle"></mp-button>
    <text class="line">-------------------------</text>
    <div class="row">
      <mp-button title="按钮" :btnStyle="btnStyle1"></mp-button>
      <mp-button title="按钮" :btnStyle="btnStyle1"></mp-button>
    </div>
   </div>
  </div>
</template>
<style scoped>
.row {
  width: 750px;
  flex-direction: row;
  justify-content: space-around;
}
.line {
  margin-top: 10px;
  margin-bottom: 10px;
}
.container {
  align-items: center;
  margin-top: 20px;
}
.shadow {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}
.shadow:active {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
</style>
<script>
import { MpButton,MpBar } from "../../index";
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: { MpButton,MpBar },
  data() {
    return {
      btnClass: "shadow",
      btnStyle: {
        "background-image": "linear-gradient(to bottom, #F35BB6, #7B79F9)"
      },
      btnStyle1: { width: "300px", "background-color": "#a00" }
    };
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E6%258C%2589%25E9%2592%25AE%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E6%258C%2589%25E9%2592%25AE%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    mpButtonClick(){
      console.log("点击")
      modal.alert({message:"点击了"})
    }
  }
};
</script>

