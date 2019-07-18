<template>
  <div class="container">
    <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>
   <scroller>
    <text class="line">------------1-------------</text>
    <mp-input type="text" vModel="test" :defaultValue="test" @mpInputChange="mpInputChange" :inputStyle="inputStyle" :closeIcon="closeIcon"></mp-input>
    <mp-input type="number" vModel="test1" :defaultValue="test1" @mpInputChange="mpInputChange" :closeIcon="closeIcon"></mp-input>
    <mp-input type="number" vModel="test2" :defaultValue="test2" :hasCloseBtn=false @mpInputChange="mpInputChange" placeholder="无X号输入框"></mp-input>
    <div class="center">
    <mp-button title="获取第一个输入框的值" @mpButtonClick="mpButtonClick"></mp-button>
    </div>
    <text class="line">------------2-------------</text>
    <mp-cell leftTxt="表单：" arrowIcon="" btnTxt="更多" :cellStyle="cellStyle1" hasTopBorder="1">
    </mp-cell>
    <mp-cell leftTxt="姓名" arrowIcon="" :cellStyle="cellStyle" hasTopBorder="1">
      <mp-input type="text" vModel="test3" :defaultValue="test3" :inputStyle="inputStyle" @mpInputChange="mpInputChange" :closeIcon="closeIcon" slot="right"></mp-input>
    </mp-cell>
    <mp-cell leftTxt="性别" arrowIcon="" :cellStyle="cellStyle" hasTopBorder="1">
      <mp-input type="text" vModel="test4" :defaultValue="test4" :inputStyle="inputStyle1" @mpInputChange="mpInputChange" :closeIcon="closeIcon" slot="btn"></mp-input>
    </mp-cell>
    <mp-cell leftTxt="跳转" arrowIcon="imgs/arrow-right.png" :cellStyle="cellStyle" hasTopBorder="1" hasBottomBorder="1">
    </mp-cell>
    <mp-cell leftTxt="反显" arrowIcon="" btnTxt="123" :cellStyle="cellStyle" hasTopBorder="1" hasBottomBorder="1">
    </mp-cell>
    <mp-cell leftTxt="反显" arrowIcon="null" btnTxt="123" :cellStyle="cellStyle" hasTopBorder="1" hasBottomBorder="1">
    </mp-cell>
   </scroller>
  </div>
</template>
<style scoped>
.line {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.container {
  /* align-items: center; */
  margin-top: 20px;
}
.center{
  width: 750px;
  align-items: center;
}
</style>
<script>
import { MpInput,MpButton,MpCell,MpBar} from "../../index";
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: { MpInput,MpButton,MpCell,MpBar},
  data() {
    return {
      test:"",
      test1:"",
      test2:"",
      test3:"",
      test4:"",
      closeIcon:"imgs/close.png",
      defaultValue:"",
      cellStyle:{"width":"700px","margin-left":"25px","background-color":"#fff","height":"90px"},
      cellStyle1:{"width":"750px","background-color":"#eee","height":"90px"},
      inputStyle:{"width":"500px"},
      inputStyle1:{"width":"500px","text-align":"right"}
    };
  },
  created(){
    this.test="1"
    setTimeout(()=>{
      this.test1="1234"
    },1000)
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E8%25BE%2593%25E5%2585%25A5%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E8%25BE%2593%25E5%2585%25A5%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    //获取输入框值
    mpInputChange(model,value){
      this[model]=value;

    },
    mpButtonClick(){
      modal.alert({message:this.test})
    },
    
  }
};
</script>

