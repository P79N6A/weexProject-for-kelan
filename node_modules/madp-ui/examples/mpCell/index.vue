<template>
  <div class="bg">
    <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>
   <scroller>
    <text style="width:750px;text-align:center;">-------------1--------------</text>
    <mp-cell leftTxt="标题" hasTopBorder="1" hasBottomBorder="1" @mpCellClick="mpCellClick" @mpCellLeftClick="mpCellLeftClick" @mpCellRightClick="mpCellRightClick" @mpCellBtnClick="mpCellBtnClick"></mp-cell>
    <mp-cell leftTxt="标题"  :leftIconStyle="leftIconStyle" title="这是具体内容" btnTxt="按钮" :leftIcon="leftIcon" hasTopBorder="1" hasBottomBorder="1" @mpCellClick="mpCellClick"></mp-cell>
    <text style="width:750px;text-align:center;">-------------2--------------</text>
    <mp-cell title="这是具体内容111" :leftIcon="leftIcon" arrowIcon="" @mpCellClick="mpCellClick" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
    <text style="width:750px;text-align:center;">-------------3--------------</text>
    <mp-cell title="这是具体内容" :cellStyle="cellStyle" :leftIcon="leftIcon" :arrowIcon="arrowIcon" @mpCellClick="mpCellClick" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
    <text style="width:750px;text-align:center;">-------------4--------------</text>
    <mp-cell leftTxt="标题1" :cellStyle="cellStyle" @mpCellClick="mpCellClick" hasTopBorder="1" ></mp-cell>
    <mp-cell leftTxt="标题2" title="这是具体内容" btnTxt="按钮" :cellStyle="cellStyle" :leftStyle="leftStyle" :rightStyle="rightStyle" :btnTxtStyle="btnTxtStyle" @mpCellClick="mpCellClick" hasTopBorder="1" ></mp-cell>
    <mp-cell leftTxt="标题3" leftIcon="null" btnTxt="按钮" arrowIcon="" :cellStyle="cellStyle" @mpCellClick="mpCellClick" hasTopBorder="1"></mp-cell>
    <mp-cell leftTxt="标题4" btnTxt="按钮" :cellStyle="cellStyle" @mpCellClick="mpCellClick" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
    <text style="width:750px;text-align:center;">-------------5--------------</text>
    <mp-cell leftTxt="标题1" btnTxt="按钮" arrowIcon="" :cellStyle="cellStyle1" @mpCellClick="mpCellClick" hasTopBorder="1"></mp-cell>
    <mp-cell leftTxt="标题2" btnTxt="按钮" arrowIcon="null" :cellStyle="cellStyle1" @mpCellClick="mpCellClick" hasTopBorder="1"></mp-cell>
    <mp-cell leftTxt="标题3" title="这是具体内容" btnTxt="按钮" :cellStyle="cellStyle1" @mpCellClick="mpCellClick" hasTopBorder="1"></mp-cell>
    <mp-cell leftTxt="标题4"  :cellStyle="cellStyle1" @mpCellClick="mpCellClick" hasTopBorder="1" hasBottomBorder="1"></mp-cell>

    <mp-cell leftTxt="标题1" :leftStyle="{'font-size':'40px','font-weight':'bolder'}" btnTxt="更多" arrowIcon="" :cellStyle="{'background-color':'#fff','height':'120px'}" @mpCellBtnClick="mpCellBtnClick" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
   </scroller>
  </div>
</template>
<style scoped>
.bg{
    background-color: #eee
}
</style>
<script>
import { MpCell,MpBar } from "../../index";
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: { MpCell,MpBar },
  data() {
    return {
     leftIcon:"./imgs/menu@3x.png",
     arrowIcon:"./imgs/menu@3x.png",
     cellStyle:{"background-color":"#fff"},
     cellStyle1:{"width":"700px","margin-left":"25px","background-color":"#fff","height":"90px"},
     leftStyle:{"font-size":"38px"},
     rightStyle:{"font-size":"38px","color":"#a00"},
     btnTxtStyle:{"font-size":"38px","color":"#000"},
     leftIconStyle:{"width":"50px","height":"50px"}
    };
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E5%258D%2595%25E5%2585%2583%25E6%25A0%25BC%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E5%258D%2595%25E5%2585%2583%25E6%25A0%25BC%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    mpCellClick() {
      modal.alert({message:"触发了mpCellClick"})
      console.log("触发了")
    },
    mpCellBtnClick(){
      modal.alert({message:"触发了mpCellBtnClick"})
      console.log("触发了左右侧按钮")
    },
    mpCellLeftClick(){
      modal.alert({message:"触发了mpCellLeftClick"})
    },
    mpCellRightClick(){
      modal.alert({message:"触发了mpCellRightClick"})
    }
  }
};
</script>

