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
    <!-- <scroller> -->

    <mp-popup :show="isShowTop" type="top" @mpPopupClick="mpPopupTopClick" width="750" height="200"></mp-popup>
    <mp-popup :show="isShowBottom" type="bottom" @mpPopupClick="mpPopupBottomClick" width="750" height="200">
      <div class="content-b">
        <text class="btn-txt" @click="confirm">确定</text>
        <text class="btn-txt" @click="cancel">取消</text>
      </div>
    </mp-popup>
    <mp-popup :show="isShowLeft" type="left" @mpPopupClick="mpPopupLeftClick" width="500" :height="getHeight"></mp-popup>
    <mp-popup :show="isShowRight" type="right" @mpPopupClick="mpPopupRightClick" width="500" :height="getHeight">
      <scroller :style="{'height':getHeight+'px'}">
        <div class="content-r">
          <text class="test">1{{getHeight}}</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <input class="input" placeholder="请输入">
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>
          <text class="test">1</text>
          <text class="test">111</text>
          <text class="test">111111</text>
          <text class="test">111111111</text>
          <text class="test">111111111111</text>

        </div>
      </scroller>
    </mp-popup>
    <text class="btn " @click="openTopPopup">打开上弹出框</text>
    <text class="btn marginBtn" @click="openBottomPopup">打开下弹出框</text>
    <text class="btn marginBtn" @click="openLeftPopup">打开左弹出框</text>
    <text class="btn marginBtn" @click="openRightPopup">打开右弹出框</text>
    <!-- </scroller> -->
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
.btn-txt {
  width: 600px;
  height: 80px;
  line-height: 80px;
  margin-bottom: 20px;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #fff;
  background-color: #a00;
  border-color: #a00;
}
.marginBtn {
  margin-top: 50px;
}
.content-b {
  width: 600px;
  margin-left: 75px;
}
.content-r {
  align-items: center;
  background-color: #a00;
}
.test {
  height: 30px;
}
.input {
  width: 200px;
  height: 60px;
  background-color: #eee;
}
</style>
<script>
import { MpPopup ,MpBar} from "../../index";
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: { MpPopup ,MpBar},
  data() {
    return {
      isShowTop: false,
      isShowBottom: false,
      isShowLeft: false,
      isShowRight: false
    };
  },
  computed: {
    getHeight() {
      let clientHeight =
        750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight;
      return clientHeight;
    }
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E5%25BC%25B9%25E5%2587%25BA%25E6%25A1%2586%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E5%25BC%25B9%25E5%2587%25BA%25E6%25A1%2586%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    openTopPopup() {
      this.isShowTop = true;
    },
    openBottomPopup() {
      this.isShowBottom = true;
    },
    openLeftPopup() {
      this.isShowLeft = true;
    },
    openRightPopup() {
      this.isShowRight = true;
    },
    mpPopupTopClick() {
      this.isShowTop = false;
    },
    mpPopupBottomClick() {
      this.isShowBottom = false;
    },
    mpPopupLeftClick() {
      this.isShowLeft = false;
    },
    mpPopupRightClick() {
      this.isShowRight = false;
    },
    confirm() {
      this.mpPopupBottomClick();
    },
    cancel() {
      this.mpPopupBottomClick();
    }
  }
};
</script>

