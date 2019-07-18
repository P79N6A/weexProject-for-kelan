<template>
  <div class="container">
    <div class="wrapper" v-for="(item,index) in finList" :key="index" v-if="type=='fin1'">

      <div class="finance_name">
        <slot name="title">
          <text>{{item.finance_type}}</text>
        </slot>
      </div>

      <div class="buy_pro">
        <div>
          <div class="per_box">
            <slot name="row_1_1">
              <text class="per">{{item.rate}}</text>
              <text class="symbol">%</text>
            </slot>
          </div>
          <div class="down_text">
            <slot name="row_2_1">
              <text>预期年化收益率</text>
            </slot>
          </div>
        </div>

        <div>
          <div class="per_box">
            <slot name="row_1_2">
              <text class="day">{{item.day}}</text>
            <text class="_text">天</text>
            </slot>
          </div>
          <div class="_down">
            <slot name="row_2_2">
              <text>理财期限</text>
            </slot>
          </div>
        </div>
        <div>
          <div class="per_box">
            <slot name="row_1_3">
              <text class="amount">{{item.amount}}</text>
            <text class="_text">万元</text>
            </slot>
          </div>
          <div class="_down">
            <slot name="row_2_3">
              <text>起购金额</text>
            </slot>
          </div>
        </div>
        <slot name="row_right">
          <div class="but_btn">
          <text class="but_btn_text">立即购买</text>
        </div>
        </slot>
      </div>

      <div class="sale_text" v-if="lineRate">
        <div>
          <div class="bg_line"></div>
          <div class="sale_line" :style="{width:450*`${item.saled_val}`+'px'}"></div>
        </div>
        <text class="saled_text">{{item.saled_text}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 750px;
}
.wrapper {
  width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.finance_name {
  font-size: 28px;
  padding-left: 30px;
  margin-top: 30px;
  height: 40px;
  line-height: 40px;
  color: #404561;
}

.buy_pro {
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
}

.per_box {
  flex-direction: row;
  margin-left: 7px;
}

.per {
  padding-left: 30px;
  font-size: 54px;
  color: #ef3034;
  margin-top: -10px;
}

.symbol {
  margin-top: 13px;
  margin-left: 5px;
  color: #ef3034;
  font-size: 30px;
}

.down_text {
  /* padding-left: 34px; */
  font-size: 20px;
  color: #848996;
}

.day {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}

.amount {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}

._text {
  font-size: 20px;
  margin-top: 15px;
}

._down {
  /* margin-top: 7px; */
  font-size: 20px;
  color: #848996;
}

.but_btn {
  margin-right: 30px;
  margin-top: 15px;
  width: 138px;
  height: 55px;
  border-width: 1px;
  border-style: solid;
  border-color: #ef3034;
  border-radius: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.but_btn_text {
  font-size: 24px;
  color: #ef3034;
}

.saled {
  margin-top: 40px;
  width: 500px;
  margin-left: 40px;
  height: 5px;
}

.sale_text {
  margin-left: -20px;
  width: 750px;
  height: 80px;
  flex-direction: row;
  background-color: #ffffff;
}

.saled_text {
  font-size: 25px;
  margin-top: 10px;
  margin-left: 80px;
  color: #b7bac1;
}
.sale_line {
  height: 4px;
  margin-top: -4px;
  background-color: #ef3034;
  margin-left: 50px;
}

.bg_line {
  height: 4px;
  background-color: #eeeeee;
  width: 450px;
  margin-left: 50px;
  margin-top: 30px;
}
</style>
<script>
/**
 * @module 理财模板组件[待讨论]
 * @description 理财模板组件
 * @example  <mp-financal></mp-financal>
 * 例子如下:
 * <mp-financal :lineRate="0.75+''" :lineTxt="`已售 ${0.75*100}%`">
        <div slot="title">
          <text>{{item.finance_type}}</text>
        </div>
        <div class="per_box " slot="row_1_1">
            <text class="per">3.8</text>
            <text class="symbol">%</text>
        </div>
        <div slot="row_2_1">
            <text class="down_text">预期年化收益率</text>
        </div>
        <div class="per_box" slot="row_1_2">
            <text class="day">10</text>
            <text class="_text">天</text>
        </div>
        <div slot="row_2_2">
            <text class="_down">预期年化收益率</text>
        </div>
        <div class="per_box" slot="row_1_3">
            <text class="amount">5</text>
            <text class="_text">万元</text>
        </div>
        <div slot="row_2_3">
            <text class="_down">起购金额</text>
        </div>
        <div slot="row_right">
            <div class="but_btn" @click="buy()">
              <text class="but_btn_text">立即购买</text>
            </div>
        </div>
      </mp-financal>
<style scoped>
.per_box {
  flex-direction: row;
  margin-left: 7px;
}
.per {
  padding-left: 30px;
  font-size: 54px;
  color: #ef3034;
  margin-top: -10px;
}
.symbol {
  margin-top: 13px;
  margin-left: 5px;
  color: #ef3034;
  font-size: 30px;
}
.down_text {
  padding-left: 34px;
  font-size: 20px;
  color: #848996;
}
.day {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}

.amount {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}
._text {
  font-size: 20px;
  margin-top: 15px;
}
._down {
  margin-top: 7px;
  font-size: 20px;
  color: #848996;
}
.but_btn {
  margin-right: 30px;
  margin-top: 15px;
  width: 138px;
  height: 55px;
  border-width: 1px;
  border-style: solid;
  border-color: #ef3034;
  border-radius: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.but_btn_text {
  font-size: 24px;
  color: #ef3034;
}
</style>
slot插槽：
  title:标题部分
  row_1_1:第一行第一列元素
  row_1_2:第一行第二列元素
  row_1_3:第一行第三列元素
  row_2_1:第二行第一列元素
  row_2_2:第二行第二列元素
  row_2_3:第二行第三列元素
  row_right:右侧元素（按钮）

 * 
 */
const stream = weex.requireModule("stream");
export default {
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
    jsonUrl: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "fin1"
    },
    lineRate: {
      type: String,
      default: "1"
    },
    lineTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      finList:[]//json数据
    };
  },
  created() {
    if (this.jsonUrl) {
      this.getJsonData();
    }
  },
  computed: {},
  methods: {
    //获取底部导航json数据
    getJsonData() {
      stream.fetch(
        {
          method: "GET",
          url: this.jsonUrl,
          type: "json"
        },
        res => {
          this.finList = res.data.data.financeList;
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