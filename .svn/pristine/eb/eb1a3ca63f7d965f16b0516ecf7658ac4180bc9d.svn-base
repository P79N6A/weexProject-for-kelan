<template>
  <div>
    <mp-financal jsonUrl="json/hotfinance.json" type="fin1"></mp-financal>
    
    <!-- <div v-for="(item,index) in financeList" :key="index">
      <mp-financal :lineRate="item.saled_text+''" :lineTxt="`已售 ${item.saled_text*100}%`">
        <div slot="title">
          <text>{{item.finance_type}}</text>
        </div>
        <div class="per_box " slot="row_1_1">
            <text class="per">{{item.rate}}</text>
            <text class="symbol">%</text>
        </div>
        <div slot="row_2_1">
            <text class="down_text">预期年化收益率</text>
        </div>
        <div class="per_box" slot="row_1_2">
            <text class="day">{{item.day}}</text>
            <text class="_text">天</text>
        </div>
        <div slot="row_2_2">
            <text class="_down">预期年化收益率</text>
        </div>
        <div class="per_box" slot="row_1_3">
            <text class="amount">{{item.amount}}</text>
            <text class="_text">万元</text>
        </div>
        <div slot="row_2_3">
            <text class="_down">起购金额</text>
        </div>
        <div slot="row_right">
            <div class="but_btn" @click="buy(item)">
              <text class="but_btn_text">立即购买</text>
            </div>
        </div>
      </mp-financal>
    </div> -->
  </div>
</template>
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
<script>
import { MpFinancal } from "../../index";
export default {
  components: { MpFinancal },
  data() {
    return {
      financeList: [
        {
          finance_type: "智富1815期35天 （GXZF1819219）",
          rate: 3.88,
          day: 35,
          amount: 5,
          saled_text: 0.72
        },
        {
          finance_type: "智富1815期35天 （GXZF1819219）",
          rate: 3.88,
          day: 35,
          amount: 5,
          saled_text: 0.92
        }
      ]
    };
  },
  methods: {
    buy(item){
      alert(item.finance_type)
    }
  }
};
</script>

