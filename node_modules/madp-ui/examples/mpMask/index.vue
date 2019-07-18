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
            <mp-mask :show="show"></mp-mask>
           <text class="btn" @click="openMask">打开遮罩</text>
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
</style>
<script>
import { MpMask,MpBar } from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpMask ,MpBar},
  data() {
    return {
        show:false
    }
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-loading%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-loading%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
   openMask() {
      this.show = true;
      setTimeout(()=>{
          this.show = false;
      },1000)
    },
  }
};
</script>

