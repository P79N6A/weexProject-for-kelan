<template>
    <div>
        <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    :isBack="true"
   ></mp-bar>
        <text class="title">MADP-UI组件库</text>
        <scroller>
        <div v-for="(item,i) in List" :key="i">
            <mp-cell :leftTxt="item.title" :arrowIcon="arrowIcon" @mpCellClick="mpCellClick(item)" @mpCellLeftClick="mpCellClick(item)" @mpCellRightClick="mpCellClick(item)" @mpCellBtnClick="mpCellClick(item)" hasTopBorder="1" ></mp-cell>
        </div>
        </scroller>
    </div>
</template>
<style scoped>
.title{
    font-weight: bold;
    font-size: 36px;
    padding-top:30px;
    padding-bottom: 30px;
    width: 750px;
    text-align: center;

}
.row{
  flex-direction: row;
}

</style>
<script>
import { MpCell,MpBar } from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpCell,MpBar},
  data() {
    return {
      List:[
          {title:"轮播组件",url:"main.mpSlider"},
          {title:"菜单组件",url:"main.mpMenu"},
          {title:"头部菜单组件",url:"main.mpBar"},
          
          {title:"弹出框组件",url:"main.mpDialog"},
          {title:"底部导航组件",url:"main.mpFooter"},
          {title:"输入框组件",url:"main.mpInput"},
          {title:"跑马灯组件",url:"main.mpLamp"},
          {title:"加载组件",url:"main.mpMask"},
          {title:"遮罩组件",url:"main.mpShadow"},
          {title:"按钮组件",url:"main.mpButton"},
          {title:"单元格组件",url:"main.mpCell"},
          {title:"popup组件",url:"main.mpPopup"},
          {title:"tab组件",url:"main.mpTab"}
          
          ],
      arrowIcon:"./imgs/showe@3x.png",
    };
  },
  methods: {
      mpCellClick(item) {
        context.launchStage(item.url);
     },
  }
};
</script>

