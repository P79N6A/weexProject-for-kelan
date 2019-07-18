<template>
  <div class="container">
    <mp-bar title="交易记录" :barStyle="barStyle" :titleStyle="titleStyle" rightTxt="筛选" :rightTxtStyle="rightTxtStyle" @mpBarRightBtnClick="mpBarRightBtnClick" :isBack="true">
        <div class="btn-box" slot="left">
            <image class="back-btn" src="imgs/arrow-back.png"/>
            <image class="close-btn" src="imgs/close.png"/>
        </div>
    </mp-bar>
    <scroller>
      <div class="transactionRecord" v-for="(item,index) in List" :key="index">
        <div class="title" @click="showDetail(index)">
          <div class="title-date">
          <text class="title-date">{{item.monthData}}
          </text>
          <image class="arrow" src="./imgs/arrow-bottom.png" />
          </div>
          <text class="title-value">支出 ￥20,453.23 收入￥20,453.23</text>
          <!-- <input type="text"  ref="money" :value="money" @input="test">
          <text>{{money}}</text> -->
        </div>
        <div class="content" :ref="`detail_${index}`" v-if="!item.flag">
          <div class="content-item">
            <div class="content-left">
              <text class="content-left-t">支付</text>
              <text class="content-left-b">2017-12-25 15:35:34</text>
            </div>
            <div class="content-right">
              <text class="content-right-c">-100.50</text>
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <text class="content-left-t">支付</text>
              <text class="content-left-b">2017-12-25 15:35:34</text>
            </div>
            <div class="content-right">
              <text class="content-right-c red">+530.50</text>
            </div>
          </div>
          <div class="content-item">
            <div class="content-left">
              <text class="content-left-t">支付</text>
              <text class="content-left-b">2017-12-25 15:35:34</text>
            </div>
            <div class="content-right">
              <text class="content-right-c">-100.50</text>
            </div>
          </div>
        </div>
      </div>
    </scroller>
    <mp-popup :show="isShowBottom" type="bottom" @mpPopupClick="mpPopupBottomClick" width="750" height="400">
      <div class="popup-box">
        <div class="popup-title">
          <text class="popup-title-txt">请选择交易类型</text>
          <image class="popup-title-icon" src="imgs/popup-close.png" @click="close"/>
        </div>
        <div class="popup-content">
          <text class="popup-btn" :class="[clickIndex=='0'&&'sel']" @click="btnClick('0')">支付</text>
          <text class="popup-btn" :class="[clickIndex=='1'&&'sel']" @click="btnClick('1')">收款</text>
          <text class="popup-btn" :class="[clickIndex=='2'&&'sel']" @click="btnClick('2')">转账</text>
          <text class="popup-btn" :class="[clickIndex=='3'&&'sel']" @click="btnClick('3')">理财收益</text>
          <text class="popup-btn" :class="[clickIndex=='4'&&'sel']" @click="btnClick('4')">理财收益</text>
          <text class="popup-btn" :class="[clickIndex=='5'&&'sel']" @click="btnClick('5')">收款</text>
        </div>
      </div>
    </mp-popup>
  </div>
</template>
<style scoped>
.container {
  width: 750px;
  background-color: #F4F4F4;
}
.btn-box{
    flex-direction: row;
    align-items: center;
}
.back-btn{
  width: 30px;
  height: 54px;
  margin-right: 10px;
}
.close-btn{
  width: 48px;
  height: 48px;
  margin-left: 10px;
}
.arrow {
  width: 36px;
  height: 21px;
  margin-left:12px;
}
.transactionRecord {
}
.title {
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 26px;
  padding-right: 26px;
  background-color: #F9F9FD;
  margin-top: 12px;
}
.title-date {
  font-size: 30px;
  height:36px;
  line-height: 36px;
  font-family:PingFang-SC-Bold;
  font-weight:normal;
  color:rgba(51,51,51,1);
  margin-bottom: 6px;
  flex-direction: row;
  align-items: center;
}
.title-value {
  height:30px;
  font-size:26px;
  font-family:PingFang-SC-Medium;
  font-weight:normal;
  color:rgba(128,128,128,1);
  line-height:30px;
}
.content {
  background-color: #fff;
}
.content-item {
  flex-direction: row;
  align-items: center;
  padding-top: 26px;
  padding-bottom: 26px;
  margin-left: 26px;
  margin-right: 26px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
}
.content-left {
  flex: 1;
}
.content-left-t {
  height:42px;
  font-size:30px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(51,51,51,1);
  margin-bottom:10px;
  line-height:42px;
}
.content-left-b {
  height:36px;
  font-size:26px;
  font-family:PingFang-SC-Medium;
  font-weight:normal;
  color:rgba(153,153,153,1);
  line-height:36px;
}
.content-right {
  flex: 1;
}
.content-right-c {
  height:50px;
  font-size:36px;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(9,139,34,1);
  line-height:50px;
  text-align: right;
  margin-right: 10px;
}
.red{
  color:rgba(220,53,40,1);
}
.popup-box{
  background-color: #fff;
}
.popup-title{
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
}
.popup-title-txt{
  height: 90px;
  line-height: 90px;
  font-size:32px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:#333333;
  text-align: center;
}
.popup-title-icon{
  position: absolute;
  right:30px;
  top:30px;
  width: 30px;
  height: 30px;
}
.popup-content{
  width: 750px;
  height: 320px;
  flex-direction: row;
  flex-wrap: wrap;
}
.popup-btn{
  width: 200px;
  height: 86px;
  border-radius: 6px;
  padding-top:16px;
  padding-bottom:16px;
  padding-left:16px;
  padding-right:16px;
  margin-top:24px;
  margin-left:37.5px;
  border-width: 1px;
  font-size:30px;
  color:#808080;
  border-color: #ccc;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.sel{
  color: #DC3528;
  border-color: #DC3528;
}
</style>
<script>

import {MpBar,MpPopup } from "madp-ui";

const stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
const animation = weex.requireModule("animation");
const picker = weex.requireModule("picker");
export default {
  components: {
    MpBar,
    MpPopup
  },
  data() {
    return {
      barStyle:{"background-image": "linear-gradient(to right, #dd372a, #e54b3b)"},
      titleStyle:{"color":"#fff","font-size":"38px"},
      rightTxtStyle:{"color":"#fff","font-size":"32px"},
      money: "1",
      List: [{"monthData":"2018年9月"},{"monthData":"2018年8月"}],
      isShowBottom:false,
      clickIndex:''
    };
  },
  created() {},
  methods: {
    // test(event) {
    //   this.money = event.value.match(/^\d*/g)[0];
    //   this.$set(this,'money',event.value.match(/^\d*/g)[0]);
    //   this.$refs["money"].value=this.money
    //   modal.alert({ message: this.$refs["money"].value });
    // },
    setMonth(list,index) {
      picker.pickDate(
        {
          value: '2018-09',
          confirmTitle:"确认",
          cancelTitle:"取消"
        },
        (result) => {
          this.$set(this.List[index],'monthData',result.data);
        //  this[list][index]['monthData']=result.data;
        }
      );
    },
    showDetail(index) {
      // this.List[index].flag=!this.List[index].flag;
      this.$set(this.List[index], "flag", !this.List[index].flag);
      // let h=this.$refs["detail_"+index][0].offsetHeight;
      // animation.transition(
      //   this.$refs["detail_"+index],
      //   {
      //     styles: {
      //       height: h!==0?0:h+"px"
      //     },
      //     duration: 600,
      //     timingFunction: "ease-out",
      //     delay: 0
      //   },
      //   () => {}
      // );
    },
    mpBarRightBtnClick(){
      this.isShowBottom=true;
    },
    mpPopupBottomClick(){
      this.isShowBottom = false;
    },
    close(){
      this.isShowBottom = false;
    },
    btnClick(i){
      this.clickIndex=i
    }
  }
};
</script>