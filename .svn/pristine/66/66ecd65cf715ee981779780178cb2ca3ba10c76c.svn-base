<template>
  <div class="mp-rich" :style="richStyle">
     <image class="mpRichBgImg" :style="mpRichBgImgStyle" :src="richData.mpRichBgImgUrl" v-if="richData.mpRichBgImgUrl"></image>
    <div class="top-box" :style="topStyle">
        <text class="topLeft-txt" :style="topLeftTxtStyle"  v-if="richData.topLeftTxt">{{richData.topLeftTxt}}</text>
        <div @click="mpRichLeftBtnClick">
             <image class="topLeft-btn" :src="richData.topLeftBtn" :style="topLeftBtnStyle" v-if="richData.topLeftBtn" />
        </div>
       <div @click="mpRichRightBtnClick">
          <image class="topRight-btn" :src="richData.topRightBtn" :style="topRightBtnStyle" v-if="richData.topRightBtn" />
       </div>
    </div>
    <div class="mpBottom">
        <div class="bottomBox" v-for="(item,index) in mpRichList" :key="index">
          <div class="bottomBox-top">
               <image class="treasure-Img" :src="item.src" :style="treasureImgStyle"/>
                <text class="treasure-Txt" :style="treasureTxtStyle" >{{item.treasureTxt}}</text>
          </div>
           <text class="money-Txt" :style="moneyTxtStyle"  v-if="isShowMoney">{{item.moneyTxt}}</text>
           <text class="money-Txt" v-else>****</text>
        </div>
    </div>
  
  </div>
</template>

<style scoped>
    .mp-rich{
      width: 750px;
      height: 253px;
      justify-content: center;
      align-items: center;
     /* background-color: bisque;  */
    }
    .mpRichBgImg{
      width: 750px;
      height: 253px;
      position:absolute;
      left:0px;
      top:0px;
      right: 0px;
      bottom: 0px;
    }
    .top-box{
      width: 750px;
      height: 100px;
      flex-direction: row;
     
       align-items: center;
    }
    .topLeft-txt{
      margin-left: 28px;
      height: 100px;
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #404561;
      line-height: 100px;
    }
    .topLeft-btn{
      margin-left: 30px;
      height: 20px;
      width: 34px;

    }
    .topRight-btn{
      /* position: absolute; */
      /* top: 33px; */
      height: 34px;
      width: 20px;
      /* right: 30px; */
      margin-left: 500px;
    }
    .treasure-Img{
      width: 27px;
      height: 27px;
      /* margin-left: 30px; */
      margin-top: 43px;
    }
    .treasure-Txt{
       margin-left: 19px;
       margin-top: 38px;
       font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #848996;
      letter-spacing: -0.55px;
    }
    .money-Txt{
      margin-top: 11px;
      margin-left: 45px;
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #000000;
      letter-spacing: -0.64px;
    }
   .mpBottom{
      width: 750px;
      height: 152px;
      /* background-color: aliceblue; */
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
   }
   .bottomBox{
      /* align-content: center;
      align-items: center; */
      flex-direction: column;
   }
   .bottomBox-top{
     flex-direction: row;
   }
</style>
<script>
/**
 * @module 头部组件
 * @description 头部组件
 * @example  <mp-rich></mp-rich>
 * 例子如下:
 *  <mp-rich 
    jsonUrl="json/rich.json"
    @mpRichLeftBtnClick="mpRichLeftBtnClick"
    @mpRichRightBtnClick="mpRichRightBtnClick"
   ></mp-rich>
 *
 */
const navigator = weex.requireModule("navigator");
const stream = weex.requireModule("stream");
export default {
  /**
   * Props 组件接收属性
   * bgUrl  
   * @prop {Object} richStyle 组件整体的样式 mpRichBgImgStyle
   * @prop {Object} mpRichBgImgStyle
   * @prop {Object} topStyle 上面部分样式
   * @prop {Object} topLeftTxtStyle  上部文字样式
   * @prop {String} topLeftTxt 上部文字内容
   * @prop {Object} topLeftBtnStyle 上部左侧图片样式
   * @prop {Object} topRightBtnStyle 上部右侧图片样式
   * @prop {String} topLeftBtn 上部左侧图片
   * @prop {String} topRightBtn 上部右侧图片
   * @prop {Object} treasureImgStyle 底部图片样式
   * @prop {Object} treasureTxtStyle 底部文字样式
   * @prop {String} moneyTxtStyle 底部数字样式
   *
   *
   */
  props: {
    richStyle: {
      type: Object,
      default: () => ({})
    },
    mpRichBgImgStyle: {
      type: Object,
      default: () => ({})
    },
    topStyle:{
      type: Object,
      default: () => ({})
    },
    topLeftTxtStyle:{
      type: Object,
      default: () => ({})
    },
    
    topLeftBtnStyle: {
       type: Object,
      default: () => ({})
    },
    topRightBtnStyle: {
      type: Object,
      default: () => ({})
    },
    treasureImgStyle:{
      type: Object,
      default: () => ({})
    },
    treasureTxtStyle:{
      type: Object,
      default: () => ({})
    },
    moneyTxtStyle:{
      type: Object,
      default: () => ({})
    },
    jsonUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mpRichList:[],
      isShowMoney:true,
      richData:{}
    };
  },
  computed: {},
  created() {
      if (this.jsonUrl) {
        this.getJsonData();
      }
    },
  watch: {
    // jsonUrl() {
    //   this.getJsonData();
    // }
  },
  methods: {
    /**
     * @event mpRichLeftBtnClick
     * @description 点击左部区域触发事件
     * @param {Object} event  dom节点
     */
    mpRichLeftBtnClick(event) {
      this.isShowMoney = !this.isShowMoney;
      this.$emit("mpRichLeftBtnClick",event);

    },
    /**
     * @event mpRichRightBtnClick
     * @description 点击左部区域触发事件
     * @param {Object} event  dom节点
     */
    mpRichRightBtnClick(){
      this.$emit("mpRichRightBtnClick", event);
    },

    //获取菜单json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.mpRichList = res.data.data.mpRichList;
          this.richData = res.data.data;
        }
      );
      }
  }
};
</script>