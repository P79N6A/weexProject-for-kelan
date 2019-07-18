<template>
    <div>
      <mp-bar 
    title="标题"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>

    <mp-rich jsonUrl="json/rich.json" @mpRichLeftBtnClick="mpRichLeftBtnClick" ></mp-rich>
    
   <mp-rich jsonUrl="json/rich.json" @mpRichLeftBtnClick="mpRichLeftBtnClick" :mpRichBgImgStyle="mpRichBgImgStyle"  :richStyle="richStyle" :topStyle="topStyle" 
        :topLeftTxtStyle="topLeftTxtStyle" :topLeftBtnStyle="topLeftBtnStyle" :topRightBtnStyle="topRightBtnStyle"  :treasureImgStyle="treasureImgStyle"
        :treasureTxtStyle="treasureTxtStyle" :moneyTxtStyle="moneyTxtStyle"
   > 
   </mp-rich>
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
import { MpRich } from "../../index";
import { MpBar } from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpRich,MpBar },
  data() {
    return {
      richStyle:{"background-color":"bisque"},
      mpRichBgImgStyle:{},
      topStyle:{},
      topLeftTxtStyle:{},
      topLeftBtnStyle:{},
      topRightBtnStyle:{},
      treasureImgStyle:{},
      treasureTxtStyle:{},
      moneyTxtStyle:{}
    };
  },
  methods: {
      mpBarRightBtnClick(){
        let url="";
        if(weex.config.env.osName.toLocaleLowerCase()=="android"){
          url="http://192.168.1.57:8088/docs/module-%25E4%25B8%25BB%25E8%258F%259C%25E5%258D%2595%25E7%25BB%2584%25E4%25BB%25B6.html";
        }else{
          url=decodeURI("http://192.168.1.57:8088/docs/module-%25E4%25B8%25BB%25E8%258F%259C%25E5%258D%2595%25E7%25BB%2584%25E4%25BB%25B6.html")
        }
          context.launchStage("ext:"+url)
      },
      mpRichLeftBtnClick(){
      
       
        
      }
  }
};
</script>

