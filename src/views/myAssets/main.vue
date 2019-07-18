<template>
  <div class="container">
    <mp-bar title="我的资产" :barStyle="barStyle" :titleStyle="titleStyle" :isBack="true">
        <div class="btn-box" slot="left">
            <image class="back-btn" src="imgs/arrow-back.png"/>
            <image class="close-btn" src="imgs/close.png"/>
        </div>
    </mp-bar>
    <scroller>
        
        <div class="assets-title">
            <div class="assets-c">
                <text class="assets-c-t">总资产（元）</text>
                <text class="assets-c-v">{{flag?"233,456.33":"####.##"}}</text>
            </div>
            <div class="assets-c">
                <text class="assets-c-t">昨日收益（元）</text>
                <text class="assets-c-v">{{flag?"456.34":"####.##"}}</text>
            </div>
            <div class="eyes-box" @click="showAssets">
            <image class="eyes" src="./imgs/Combined@3x.png" />
            </div>
        </div>
        <div class="assets-mark">
            <div class="mark-c">
                <text class="assets-c-t mark-t">累计收益（元）</text>
                <text class="assets-c-v mark-v">233,456.33</text>
            </div>
            <div class="mark-c1">
                <text class="assets-c-t mark-t">风险等级</text>
                <text class="assets-c-v mark-v">稳健性</text>
            </div>
            <div class="mark-c1">
                <text class="assets-c-t mark-t">财务健康分</text>
                <text class="assets-c-v mark-v">83.00</text>
            </div>
        </div>
        <div class="assets-content">
            <div class="content-c">
                <text class="assets-c-t content-t">定期理财</text>
                <text class="assets-c-v content-v">233,456.33</text>
            </div>
            <div class="content-c">
                <text class="assets-c-t content-t">余额盈</text>
                <text class="assets-c-v content-v">123,343.34</text>
            </div>
            <div class="content-c">
                <text class="assets-c-t content-t">定期理财</text>
                <text class="assets-c-v content-v">233,456.33</text>
            </div>
            <div class="content-c">
                <text class="assets-c-t content-t">余额盈</text>
                <text class="assets-c-v content-v">123,343.34</text>
            </div>
            <div class="content-c">
                <text class="assets-c-t content-t">银行理财</text>
                <text class="assets-c-v content-v">5,456.33</text>
            </div>
            <div class="content-c">
                <text class="assets-c-t content-t more-t">更多精彩</text>
                <text class="assets-c-v content-v more-v">尽情期待</text>
            </div>
        </div>
        <div class="assets-chart">
        <text class="chart-title">资产占比</text>
        <div class="assets-chart-c">
            <weex-chart-pie ref="chart" class="chart-box" animEnable="true" animDuration="1500" :data="charPieData" ratio="0.4"></weex-chart-pie>
            <div class="chart-row">
                <div class="row-0"><text class="btn0"></text></div>
                <text class="row-1">定期理财</text>
                <text class="row-2">34%</text>
                <text class="row-3">103,453.00</text>
            </div>
            <div class="chart-row">
                <div class="row-0"><text class="btn1"></text></div>
                <text class="row-1">余额盈</text>
                <text class="row-2">5%</text>
                <text class="row-3">19,453.00</text>
            </div>
            <div class="chart-row">
                <div class="row-0"><text class="btn2"></text></div>
                <text class="row-1">基金</text>
                <text class="row-2">26%</text>
                <text class="row-3">89,353.00</text>
            </div>
            <div class="chart-row">
                <div class="row-0"><text class="btn3"></text></div>
                <text class="row-1">黄金</text>
                <text class="row-2">26%</text>
                <text class="row-3">89,353.00</text>
            </div>
            <div class="chart-row">
                <div class="row-0"><text class="btn4"></text></div>
                <text class="row-1">银行理财</text>
                <text class="row-2">5%</text>
                <text class="row-3">8,353.00</text>
            </div>
        </div>
        </div>
    </scroller>
  </div>
</template>
<style scoped>
.container {
  width: 750px;
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
.eyes-box{
    position: absolute;
    width: 80px;
    height: 50px;
    right:0px;
    top: 0px;
    align-items: center;
    justify-content: center;
}
.eyes{
    width: 30px;
    height: 20px;
}
.assets-title{
    flex-direction: row;
    /* background-color: #e54c3c; */
    background-image: linear-gradient(to right, #dd372a, #e54b3b);
    padding-top: 60px;
    padding-bottom: 50px;
    padding-left: 44px;
    padding-right: 44px;
}
.assets-c{
    flex: 1;
}
.assets-c-t{
    height:36px;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:36px;
}
.assets-c-v{
    font-size: 48px;
    height:66px;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:66px;
    color: #fff;
}
.mark-c{
    width:220px;
}
.mark-c1{
    width:220px;
    padding-left: 44px;
}
.mark-t{
    height:34px;
    font-size:24px;
    font-family:PingFang-SC-Medium;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:34px;
}
.mark-v{
    height:42px;
    font-size:30px;
    font-family:PingFang-SC-Medium;
    font-weight:normal;
    color:rgba(255,255,255,1);
    line-height:42px;
}
.assets-mark{
    flex-direction: row;
    /* background-color: #e54c3c; */
    background-image: linear-gradient(to right, #dd372a, #e54b3b);
    padding-top: 6px;
    padding-bottom: 32px;
    padding-left: 44px;
    padding-right: 44px;
}
.assets-content{
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    padding-top: 6px;
    padding-bottom: 6px;
}
.content-c{
    width: 375px;
    padding-left: 30px;
    padding-right: 16px;
    padding-top: 20px;
    padding-bottom: 26px;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
}
.content-t{
    height:40px;
    font-size:28px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:40px;
}
.content-v{
    height:38px;
    font-size:32px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:38px;
}
.more-t{
    color:rgba(102,102,102,.5);
}
.more-v{
    color:rgba(51,51,51,.5);
}
.chart-title{
    font-weight: bolder;
    font-size:32px;
    padding-top: 40px;
    padding-left: 30px;
    padding-bottom: 12px;
}
.assets-chart {
    width: 750px;
    background-color: #fff;
}
.assets-chart-c{
    width: 750px;
    align-items: center;
    justify-content: center;
}
.chart-box{
    width: 342px;
    height: 342px;
}
.chart-row{
    width: 720px;
    height: 88px;
    line-height: 88px;
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
}
.btn0{
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #50a5f1
}
.btn1{
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #EFC32E
}
.btn2{
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #FC7B53
}
.btn3{
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #E1EA2F
}
.btn4{
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #94D94A
}

.row-0{
    width: 50px;
}
.row-1{
    width: 200px;
}
.row-2{
    width: 208px;
    text-align: center;
}
.row-3{
    width: 200px;
    text-align: right;
}
</style>
<script>



import { MpBar,MpCell} from "madp-ui";



const stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
export default {
  components: {
    MpCell,
    MpBar
  },
  data() {
    return {
      barStyle:{"background-image": "linear-gradient(to right, #dd372a, #e54b3b)"},
      titleStyle:{"color":"#fff","font-size":"38px"},
      leftTxtStyle:{"color":"#fff"},
      //饼状图数据
        charData: [
            { color: "#50a5f1", percent: 0.34 },
            { color: "#94d94a", percent: 0.05 },
            { color: "#e1ea2f", percent: 0.26 },
            { color: "#fc7b53", percent: 0.15 },
            { color: "#efc32e", percent: 0.2 }
        ],
        flag:false
    };
  },
  created() {

  },
  computed: {
        charPieData() {
            return JSON.stringify(this.charData);
        }
    },
  methods: {
    showAssets(){
        this.flag=!this.flag;
    },
    mpCellBtnClick(item,model){
      picker.pick({
        items:item,
        confirmTitle:"确认",
        cancelTitle:"取消"
      },(result)=>{
        this[model]=item[result.data]
      })
    }
  }
};
</script>