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
            <mp-lamp jsonUrl="json/notice.json" type="row" duration="3000" lampImg="./imgs/logo.png" :lampImgStyle="lampImgStyle"></mp-lamp>
            <mp-lamp jsonUrl="json/notice.json" type="cols" ></mp-lamp>
            <mp-lamp jsonUrl="json/notice.json" type="row" ></mp-lamp>
        </scroller>
    </div>
</template>
<style scoped>

</style>
<script>
import { MpLamp,MpBar } from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpLamp,MpBar },
  data() {
    return {
        lampImgStyle:{width:'50px',height:'50px'}
    }
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E8%25B7%2591%25E9%25A9%25AC%25E7%2581%25AF%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E8%25B7%2591%25E9%25A9%25AC%25E7%2581%25AF%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    }
  }
};
</script>

