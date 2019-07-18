<template>
   <div class="content">
       <image class="mpMineBgImg" :style="mpMineBgImgStyle" :src="mineData.mpMineBgImgUrl"></image>
       <div class="mpMineTop" @click="mpMineDetailClick"  v-if="nameTxt">
           <image class="mpMine-img" :src="mineData.bgUrl" :style="bgStyle"></image>
           <div class="mpMine-box">
                <div class="mpMine-item">
                  <text class="mpMine-name" :style="nameStyle">{{nameTxt}}</text> 
                 </div>
                <text class="mpMine-dec" :style="decStyle">{{mineData.decTxt}}</text> 
           </div>
         
          <image class="arrow-right" :style="btnRightStyle" :src="mineData.btnRightUrl"></image>
       </div>
       <div class="mpMineTop" @click="mpMineLoginClick"  v-else>
           <image class="mpMine-img" :src="mineData.bgUrl" :style="bgStyle"></image>
            <div class="mpMinelogin-box">
              <text class="mpMinelogin-name" :style="loginStyle">{{mineData.loginTxt}}</text> 
          </div>
          <image class="arrow-right" :style="btnRightStyle" :src="mineData.btnRightUrl"></image>
       </div>
       <div class="mpMineBottom">
         <div v-for="(item,index) in mineItemList" :key="index">
            <div class="mpMine-property">
                  <text class="mpMine-propNum">{{item.propertyNum}}</text>
                   <text class="mpMine-propName">{{item.propertyName}}</text> 
            </div>
          </div>
       </div>
   </div>
</template>

<style scoped>
.content {
  width: 750px;
  height: 362px;
}
.mpMineBgImg{
  width: 750px;
  height: 362px;
  position:absolute;
  left:0px;
  top:0px;
  right: 0px;
  bottom: 0px;
}
.mpMineTop {
  flex-direction: row;
}
.mpMine-img {
  width: 115px;
  height: 115px;
  margin-left: 30px;
  margin-top: 47px;
}
.mpMine-box {
  margin-left: 18px;
  margin-top: 64px;
  flex-direction: column;

}
.mpMine-item {
  flex-direction: row;
}
.mpMine-name {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #404561;
  letter-spacing: -0.53px;
}
.mpMine-dec {
  margin-top: 3px;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #404561;
  letter-spacing: -0.42px;
}
.mpMinelogin-box {
  margin-left: 18px;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
}
.mpMinelogin-name {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: #404561;
  letter-spacing: -0.53px;
}
.arrow-right {
  margin-left: 40px;
  margin-top: 77px;
  width: 35px;
  height: 50px;
}
.mpMineBottom {
  margin-top: 53px;
  width: 750px;
  height: 149px;
  /* background-color: aliceblue; */
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
.mpMine-property {
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.mpMine-propNum {
  font-family: PingFangSC-Medium;
  font-size: 48px;
  color: #404561;
  letter-spacing: -1.19px;
  flex: 1;
}
.mpMine-propName {
  flex: 1;
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #404561;
  letter-spacing: -0.74px;
  margin-top: 12px;
}
</style>
<script>
/**
 * @module 头部组件
 * @description 头部组件
 * @example  <mp-mine></mp-mine>
 * 例子如下:
 *  <mp-mine 
    jsonUrl="json/mine.json"
    @mpMineClick="mpMineClick"
    @mpMineLoginClick="mpMineLoginClick"
    ></mp-mine>
 *
 */
const stream = weex.requireModule("stream");
export default {
  /**
   * Props 组件接收属性
   * bgUrl
   * 
   * @prop {Object} mpMineBgImgStyle 背景图片样式
   * @prop {Object} bgStyle 头部照片样式
   * @prop {String} nameTxt  名称文字,有值出现
   * @prop {Object} nameStyle 名称样式
   * @prop {Object} decStyle 名称底部描述样式
   * @prop {Object} btnRightStyle 向右按钮图片样式
   * @prop {String} jsonUrl 我的信息底部导航的json路径
   * @prop {Object} loginStyle 登录文字样式
   */
  props: {
   
    mpMineBgImgStyle:{
       type:Object,
       default: () =>({})
    },
   
    bgStyle: {
      type: Object,
      default: () => ({})
    },
    nameStyle: {
      type: Object,
      default: () => ({})
    }, 
    decStyle: {
      type: Object,
      default: () => ({})
    },
    btnRightStyle: {
      type: Object,
      default: () => ({})
    },
    jsonUrl: {
      type: String,
      default: ""
    },
    nameTxt:{
       type: String,
       default: ""
    },
    loginStyle: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      mineItemList: [],
      mineData:{},
     
    };
  },
  computed: {},
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  methods: {
    /**
     * @event mpMineDetailClick
     * @description 点击按钮触发事件
     * @param {Object} event 节点
     */
    mpMineDetailClick(event) {
      this.$emit("mpMineDetailClick", event);
    },
    /**
     * @event mpMineLoginClick
     * @description 点击按钮触发事件
     * @param {Object} event 节点
     */
    mpMineLoginClick(){
      this.$emit("mpMineLoginClick", event);
    },
    //获取我的信息底部json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.mineItemList = res.data.data.mineList;
          this.mineData = res.data.data;
          // this.mpMineBgImgUrl = res.data.data.mpMineBgImgUrl;
          // this.bgUrl = res.data.data.bgUrl;
          // this.btnRightUrl = res.data.data.btnRightUrl;
          // this.loginTxt = res.data.data.loginTxt;
          // this.decTxt = res.data.data.decTxt; 
        }
      );
    }
  },
  watch: {
    jsonUrl() {
      this.getJsonData();
    }
  }
};
</script>