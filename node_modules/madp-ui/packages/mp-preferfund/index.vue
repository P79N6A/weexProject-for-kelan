<template>
  <div class="container">
    <mp-bar :leftTxt="subTitle" :barStyle="barStyle" :leftTxtStyle="leftTxtStyle"  :rightTxt="hasMore" :rightTxtStyle="rightTxtStyle"></mp-bar>
    <div class="wrapper" v-for="(item,index) in fundList" :key="index" >
      <div class="detail">
        <div class="rate" :style="item.backgroundcolor">
          <text class="rateText" :style="rateTextStyle">{{item.rate}}</text>
          <text class="description" :style="descriptionStyle">{{item.description}}</text>
          <div class="separator" :style="separatorStyle"></div>
          <text class="fundType" :style="fundTypeStyle">{{item.fundType}}</text>
        </div>
        <div class="fundDesc">
          <text class="fundName" :style="fundNameStyle">{{item.fundName}}</text>
          <!-- <div class="fundLabel"> -->
            <text class="fundLabelText" :style="fundLabelTextStyle">{{item.fundLabel}}</text>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 750px;
}
.wrapper { 
  padding: 20px;
  background-color: #ffffff;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  flex-direction: column;
  
}
.detail {
  flex-direction: row;
  justify-content: space-between;
  height: 160px;
}
.rate {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 172px;
  width: 246px;
  background-color: #ff5c5c;
  border-radius: 10%;
}
.rateText {
  font-family: DINAlternate-Bold;
  font-size: 46px;
  color: #ffffff;
}
.separator {
  width: 156px;
  background-color: #ffffff;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.description {
  font-family: PingFangSC-Regular;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 5px;
}
.fundType {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: rgb(255, 255, 255);
  padding-top: 5px;
  padding-bottom: 19px;
}
.redText {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 24px;
  color: #a2a2a2;
  padding-top: 35px;
}
.fundDesc {
  flex-direction: column;
  margin-left: 33px;
  width: 600px;
}
.fundName {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #404561;
  margin-top: 16px;
}
.fundLabel {
  width: 150px;
  height:50px;
  border:1px solid#ff5c5c;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}
.fundLabelText{
  font-family: Verdana, Geneva, sans-serif;
  font-size: 24px;
  color: #a2a2a2;
  margin-top: 20px;
}
</style>
<script>
/**
 * @module 理财模板组件[待讨论]
 * @description 理财模板组件
 * @example  <mp-financal></mp-financal>
 * 例子如下:
 *
 *
 */
import MpBar from "../mp-bar";
const stream = weex.requireModule("stream");
export default {
  components: { MpBar },
  /**
   * Props 组件接收属性
   * @prop {String} jsonUrl 底部导航的json路径
   * @prop {String} type 模板的类型 type：理财模板
   * @prop {String} lineRate 根据比例显示轴线，如果为空字符串则不显示
   * @prop {String} lineTxt lineRate有值时，显示文字
   *
   * isShowRate
   */
  props: {
    //内容标题
    subTitle: {
      type: String,
      default: "优选基金"
    },
    //内容标题右侧更多
    hasMore: {
      type: String,
      default: "更多"
    },
    jsonUrl: {
      type: String,
      default: ""
    },
    //内容栏整体样式
    barStyle: {
      type: Object,
      default: () => ({
        height: "100px"
      })
    },
    //标题左侧文字样式
    leftTxtStyle: {
      type: Object,
      default: () => ({
        "font-size": "30px"
      })
    },
    //标题右侧文字样式
    rightTxtStyle: {
      type: Object,
      default: () => ({
        "font-size": "26px",
        "color": "#848996"
      })
    },
    //内容栏整体样式0
    rateTextStyle: {
      type: Object,
      default: () => ({
      })
    },
    //描述文字样式
    descriptionStyle: {
      type: Object,
      default: () => ({
      })
    },
    //分割线样式
    separatorStyle: {
      type: Object,
      default: () => ({
      })
    },
    //基金类型文字样式
    fundTypeStyle: {
      type: Object,
      default: () => ({
      })
    },
    //基金名称文字样式
    fundNameStyle: {
      type: Object,
      default: () => ({})
    },
    //基金标签样式
    fundLabelTextStyle: {
      type: Object,
      default: () => ({
      })
    }
  },
  data() {
    return {
      fundList: [] //json数据
    };
  },
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  computed: {},
  methods: {
    //获取理财信息json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.fundList = res.data.data.fundList;
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