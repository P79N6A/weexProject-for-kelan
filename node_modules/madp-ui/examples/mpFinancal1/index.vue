<template>
  <div>
    <mp-financal1 :boxStyle="boxStyle" :bgImg="bgImg">
      <div slot="innerContent">
        <div class="banker-middle-text">
          <text class="banker-middle-left">稳盈1816期35天 （ZXWY186132）</text>
          <text class="banker-middle-center">3.88</text>
          <text class="banker-middle-middle">预期收益率</text>
          <text class="banker-middle-right">5万元起购 期限91天 额度紧张</text>
        </div>
      </div>
      <div slot="bottomBtn">
        <image class="insert" :src="getImg" />
      </div>
    </mp-financal1>
  </div>
</template>
<style scoped>
.banker-middle-text {
  margin-top: -335px;
  justify-content: center;
  align-items: center;
}
.baker {
  background-color: #ffffff;
  height: 80px;
}
.banker-middle-left {
  font-size: 30px;
  color: #404561;
}
.banker-middle-center {
  font-size: 64px;
  font-weight: bolder;
  color: #ef3034;
  text-align: center;
  margin-top: 8px;
}
.banker-middle-middle {
  font-size: 28px;
  color: #8e939f;
  text-align: center;
}
.banker-middle-right {
  font-size: 28px;
  margin-top: 20px;
  color: #404561;
}
.insert {
  margin-left: 220px;
  margin-top: -40px;
  width: 317px;
  height: 52px;
}
</style>
<script>
import { MpFinancal1 } from "../../index";
export default {
  components: { MpFinancal1 },
  data() {
    return {
      bgImg: "./imgs/place@3x.png",
      getImg: "./imgs/insertbutton@3x.png",
      boxStyle:{height:"460px"}
    };
  },
  methods: {
    buy(item) {
      alert(item.finance_type);
    }
  }
};
</script>

