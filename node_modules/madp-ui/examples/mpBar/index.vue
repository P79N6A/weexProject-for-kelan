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

        <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="..."
   ></mp-bar>
  <mp-bar 
    bgUrl="./imgs/head.png"
    title="标题"
    leftTxt="返回"
    rightTxt="..."
   ></mp-bar>
   <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"

    rightTxt="更多"
   ></mp-bar>

   <mp-bar 
    :titleBg="titleBg"
    :titleBgStyle="titleBgStyle"
    leftTxt=""
    rightTxt="更多"
    :barStyle="barStyle"
   ></mp-bar>

  <mp-bar 
    :titleBg="titleBg"
    :titleBgStyle="titleBgStyle"
    :leftBtn="leftBtn"
    :leftBtnStyle="leftBtnStyle"
    :rightBtn="rightBtn"
    :rightBtnStyle="rightBtnStyle"
   ></mp-bar>
   
   <mp-bar 
    :titleBg="titleBg"
    :titleBgStyle="titleBgStyle1"
    :leftBtn="leftBtn"
    :leftBtnStyle="leftBtnStyle"
   >
   <div slot="right" class="row">
     <image class="right-btn" :src="leftBtn" :style="rightBtnStyle"/>
     <image class="right-btn" :src="rightBtn" :style="rightBtnStyle"/>
    </div>
   
   </mp-bar>
    </div>
</template>
<style scoped>
.row{
  flex-direction: row;
}
.right-btn{
  margin-left: 10px;
}
</style>
<script>
import { MpBar } from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpBar },
  data() {
    return {
      titleBg:"./imgs/logo@3x.png",
      titleBgStyle:{width:"206px",height:"43px"},
      titleBgStyle1:{width:"206px",height:"43px","margin-left":"-50px"},
      leftBtn:"./imgs/qrcode.png",
      leftBtnStyle:{width:"50px",height:"50px"},
      rightBtn:"./imgs/search@3x.png",
      rightBtnStyle:{width:"50px",height:"50px"},
      barStyle:{"background-color":"#ccc"}
    };
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E5%25A4%25B4%25E9%2583%25A8%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E5%25A4%25B4%25E9%2583%25A8%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    }
  }
};
</script>

