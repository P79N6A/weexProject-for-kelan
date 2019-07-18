<template>
  <div>
    <mp-bar 
    title="tab切换"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>
   <div class="container">
    <text class="line">-------------------------</text>
    <mp-tab :tabList="tabList" :defaultIndex="defaultIndex0" @mpTabClick="mpTabClick0" :isAutoOffset="true"></mp-tab>
    <text class="line">-------------------------</text>
    <mp-tab :tabList="tabList" :defaultIndex="defaultIndex1" @mpTabClick="mpTabClick1" :isAutoOffset="true"></mp-tab>
    <mp-slider :defaultIndex="defaultIndex1" @mpSliderPageChanged="mpSliderPageChanged">
        <div class="slider-box" v-for="(item,index) in tabList" :key="index">
            <text>{{index}}</text>
        </div>
    </mp-slider>
    <text class="line">-------------------------</text>
    <mp-tab :tabList="tabList" :defaultIndex="defaultIndex2" @mpTabClick="mpTabClick2" ></mp-tab>
    <text class="line">-------------------------</text>

    <mp-tab :tabBoxStyle="tabBoxStyle" :tabItemTxtStyle="tabItemTxtStyle" :tabItemTxtSelStyle="tabItemTxtSelStyle" :tabList="tabMenu" :defaultIndex="defaultIndex3" @mpTabClick="mpTabClick3" ></mp-tab>



   </div>
  </div>
</template>
<style scoped>

.line {
  margin-top: 10px;
  margin-bottom: 10px;
}
.container {
  align-items: center;
  margin-top: 20px;
}
.slider-box{
  width: 750px;
  align-items: center;
  justify-content: center;
}

</style>
<script>
import { MpTab,MpBar,MpSlider } from "../../index";
const dom = weex.requireModule('dom');
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: { MpTab,MpBar,MpSlider },
  data() {
    return {
      defaultIndex0:0,
      defaultIndex1:0,
      defaultIndex2:2,
      defaultIndex3:0,
      tabList: [
        { title: "全部" },
        { title: "推荐" },
        { title: "视频" },
        { title: "热点" },
        { title: "北京" },
        { title: "新时代" },
        { title: "娱乐" }
      ],
      tabMenu:[
        { title: "全部" },
        { title: "推荐" }
      ],
      tabBoxStyle:{"width":"300px","justify-content":"center","margin-left":"225px","background-color":"#aaa","border-radius":"8px"},
      tabItemTxtStyle:{"color":"#fff"},
      tabItemTxtSelStyle:{"color":"#a00",
        "border-bottom-width": "4px",
        "border-bottom-style": "solid",
        "border-bottom-color": "#a00"}
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
    mpTabClick0(index){
      console.log("点击了"+index)
      this.defaultIndex0=index;
    },
    mpTabClick1(index){
      console.log("点击了"+index)
      this.defaultIndex1=index;
    },
    mpTabClick2(index){
      console.log("点击了"+index)
      this.defaultIndex2=index;
    },
    mpTabClick3(index){
      console.log("点击了"+index)
      this.defaultIndex3=index;
    },
    mpSliderPageChanged(event){
      this.defaultIndex1=event.index;
      console.log("当前页index:" + event.index);
    }
  }
};
</script>

