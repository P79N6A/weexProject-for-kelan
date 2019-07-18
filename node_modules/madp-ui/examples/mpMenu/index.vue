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
            <text style="width:750px;text-align:center;">-----传json路径菜单---------</text>
            <mp-menu jsonUrl="json/menu.json"  @mpMenuItemClick="mpMenuItemClick"></mp-menu>
            <mp-menu jsonUrl="json/menu.json" pageSize="10"></mp-menu>
            <mp-menu :tabStyle="tabStyle1" :bgImg="bgImg" jsonUrl="json/menu.json"></mp-menu>

            <text style="width:750px;text-align:center;font-size:30px;font-weight:bolder;">传json数据菜单：</text>
            <text style="width:750px;text-align:center;">-------------1--------------</text>
            <mp-menu :menuList="menuList" :menuItemStyle="menuItemStyle" :menuImgStyle="menuImgStyle" :menuTitleStyle="menuTitleStyle" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
            <text style="width:750px;text-align:center;">-------------2--------------</text>
            <mp-menu :menuList="menuList" :menuItemStyle="menuItemStyle1" :menuImgStyle="menuImgStyle" :menuTitleStyle="menuTitleStyle1" :bgImgStyle="bgImgStyle" :bgImg="bgImg" :tabStyle="tabStyle1" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
            <text style="width:750px;text-align:center;">-------------3--------------</text>
            <mp-menu :menuList="menuList" :menuItemStyle="menuItemStyle" :menuImgStyle="menuImgStyle" :menuTitleStyle="menuTitleStyle" :sortType="sortType" :tabStyle="tabStyle" @mpMenuItemClick="mpMenuItemClick"></mp-menu>
        </scroller>
    </div>
</template>
<style scoped>
</style>
<script>
import { MpMenu,MpBar } from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpMenu,MpBar },
  data() {
    return {
      menuItemStyle: { width: 750 / 5 + "px", height: "120px" },
      menuImgStyle: { width: "60px", height: "60px" },
      menuTitleStyle: { "font-size": "24px" },
      menuItemStyle1: {
        width: 750 / 4 + "px",
        height: "160px",
        "padding-top": "20px",
        "padding-bottom": "20px"
      },
      menuTitleStyle1: { "font-size": "24px", color: "#000" },
      tabStyle1: { width: "750px",height: "320px" },
      bgImgStyle: { width: "750px", height: "320px" },
      tabStyle: {
        "background-color": "#ccc",
        "padding-top": "20px",
        "padding-bottom": "20px"
      },
      bgImg: "./imgs/banner.png",
      menuList: [
        {
          url: "main.newmain",
          src: "imgs/cards@3x.png",
          name: "账户管理"
        },
        {
          url: "main.transferaccouts",
          src: "imgs/cards@3x.png",
          name: "转账汇款"
        },
        {
          url: "main.plnv",
          src: "imgs/cards@3x.png",
          name: "投资理财"
        },
        {
          url: "main.deposit",
          src: "imgs/cards@3x.png",
          name: "特色定活"
        },
        {
          url: "main.loan",
          src: "imgs/cards@3x.png",
          name: "贷款管理"
        },
        {
          url: "main.businesscard",
          src: "imgs/cards@3x.png",
          name: "公务卡"
        },
        {
          url: "main.allmenu",
          src: "imgs/cards@3x.png",
          name: "更多"
        }
      ],
      sortType: false
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
    mpMenuItemClick(item) {
      alert(item.name);
    },
    mpMenuItemClick(item){
      console.log(item.url)
    }
  }
};
</script>

