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
            <text style="width:750px;text-align:center;font-size:30px;font-weight:bolder;">固定布局：</text>
            <text style="width:750px;text-align:center;">-----读取json轮播广告(固定布局)---------</text>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" :hasIndicator="hasIndicator" :infinite="infinite" @mpSliderClick="mpSliderClick">
            </mp-slider>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" sliderType="half" @mpSliderInnerClick="mpSliderInnerClick" :infinite="infinite">
            </mp-slider>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" sliderType="four" @mpSliderInnerClick="mpSliderInnerClick" :infinite="infinite">
            </mp-slider>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" :hasImgTxt="hasImgTxt" :infinite="infinite">
            </mp-slider>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" sliderType="half" :hasImgTxt="hasImgTxt" :infinite="infinite">
            </mp-slider>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged" jsonUrl="json/ad.json" sliderType="four" :hasImgTxt="hasImgTxt" :infinite="infinite">
            </mp-slider>
            <text style="width:750px;text-align:center;font-size:30px;font-weight:bolder;">可自定义扩展布局：</text>
            <text style="width:750px;text-align:center;">-----普通轮播广告---------</text>
            <mp-slider @mpSliderPageChanged="mpSliderPageChanged">
                <div class="slider-box" v-for="(item,index) in imageList" :key="index">
                    <image class="slider-img" :src="item.src" />
                </div>
            </mp-slider>
            <text style="width:750px;text-align:center;">-----自动轮播广告---------</text>
            <mp-slider :sliderStyle="sliderStyle" :interval="interval" :autoPlay="autoPlay" :infinite="infinite" @mpSliderPageChanged="mpSliderPageChanged">
                <div class="slider-box" v-for="(item,index) in imageList" :key="index">
                    <image class="slider-imgB" :src="item.src" />
                    <image class="slider-imgB" :src="item.src" />
                </div>
            </mp-slider>
            <text style="width:750px;text-align:center;">-----有指示器的轮播广告---------</text>
            <mp-slider :sliderStyle="sliderStyle" :hasIndicator="hasIndicator" @mpSliderPageChanged="mpSliderPageChanged">
                <div class="slider-box" v-for="(item,index) in imageList" :key="index">
                    <image class="slider-imgC" :src="item.src" />
                    <image class="slider-imgC" :src="item.src" />
                    <image class="slider-imgC" :src="item.src" />
                </div>
            </mp-slider>
            <text style="width:750px;text-align:center;">-----多列轮播---------</text>
            <mp-slider :sliderStyle="sliderStyleT" @mpSliderPageChanged="mpSliderPageChanged">
                <div class="slider-boxS" v-for="(item,index) in imageList" :key="index">
                    <image class="slider-imgBT" src="./imgs/banner.png" />
                    <image class="slider-imgBT" src="./imgs/banner.png" />
                    <image class="slider-imgBT" src="./imgs/banner.png" />
                    <image class="slider-imgBT" src="./imgs/banner.png" />
                </div>
            </mp-slider>
            <text style="width:750px;text-align:center;">-----多列图片+文字轮播---------</text>
            <mp-slider :sliderStyle="sliderStyleT" @mpSliderPageChanged="mpSliderPageChanged">
            <div class="slider-boxS" v-for="(item,index) in imageList" :key="index">
                <image class="slider-imgBT" :src="item.src" />
                <text class=slider-txt1>1</text>
                <image class="slider-imgBT" :src="item.src" />
                <text class=slider-txt2>2</text>
                <image class="slider-imgBT" :src="item.src" />
                <text class=slider-txt3>3</text>
                <image class="slider-imgBT" :src="item.src" />
                <text class=slider-txt4>4</text>
            </div>
        </mp-slider>

        </scroller>
    </div>
</template>
<style scoped>
.test {
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 750px;
}
.slider-box {
  flex-direction: row;
}
.slider-txt {
  position: absolute;
  width: 750px;
  text-align: center;
  bottom: 0;
}
.slider-txt1 {
  position: absolute;
  width: 375px;
  text-align: center;
  left: 0;
  bottom: 280px;
}
.slider-txt2 {
  position: absolute;
  width: 375px;
  text-align: center;
  right: 0;
  bottom: 280px;
}
.slider-txt3 {
  position: absolute;
  width: 375px;
  text-align: center;
  left: 0;
  bottom: 0;
}
.slider-txt4 {
  position: absolute;
  width: 375px;
  text-align: center;
  right: 0;
  bottom: 0;
}
.slider-boxS {
    width: 750px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.slider-img {
  width: 750px;
  height: 320px;
}
.slider-imgB {
  width: 350px;
  height: 150px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
}
.slider-imgBT {
  width: 350px;
  height: 200px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 62px;
}
.slider-imgC {
  width: 225px;
  height: 95px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>
<script>
import { MpSlider ,MpBar} from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpSlider ,MpBar},
  data() {
    return {
      interval: "3000", //轮播时间间隔
      autoPlay: true, //是否自动轮播
      infinite: true, //无限循环
      hasIndicator: true, //是否有提示器
      hasImgTxt: true, //是否显示轮播图片对应文字
      sliderStyle: { width: "750px", height: "160px" }, //整体轮播样式
      sliderStyle1: { width: "750px", height: "320px" }, //整体轮播样式
      sliderStyleT: { width: "750px", height: "550px" }, //整体轮播样式(带文字)
      imageList: [] //轮播json数据
    };
  },
  created() {
    //模拟请求后台获取轮播json数据
    setTimeout(() => {
      this.imageList = [
        {
          name: "",
          src: "./imgs/banner.png",
          url: "http://www.csii.com.cn"
        },
        {
          name: "",
          src: "./imgs/banner@3x.png",
          url: "http://www.csii.com.cn"
        }
      ];
    }, 500);
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E8%25BD%25AE%25E6%2592%25AD%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E8%25BD%25AE%25E6%2592%25AD%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    //切换轮播页数触发事件
    mpSliderPageChanged(event) {
      console.log("当前页index:" + event.index);
    },
    mpSliderClick(item,event){
      console.log("url:" + item.url);
    },
    mpSliderInnerClick(item,index){
      console.log("index:" + index);
    }
  }
};
</script>

