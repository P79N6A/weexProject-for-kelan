<template>
  <div class="container">
    <mp-bar title="个人信息" :barStyle="barStyle" :titleStyle="titleStyle" :isBack="true">
        <div class="btn-box" slot="left">
            <image class="back-btn" src="imgs/arrow-back.png"/>
            <image class="close-btn" src="imgs/close.png"/>
        </div>
    </mp-bar>
    <scroller>
    <div class="personinfo-box">
      <mp-cell leftTxt="用户名" btnTxt="zxm123" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="null" hasTopBorder="1"></mp-cell>
      <mp-cell leftTxt="真实姓名" btnTxt="张晓明" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="null" hasTopBorder="1"></mp-cell>
      <mp-cell leftTxt="身份证号" :btnTxt="idNo" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="null" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
    </div> 
    <div class="personinfo-box">
      <mp-cell leftTxt="性别" :btnTxt="sex" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" @mpCellBtnClick="mpCellBtnClick(sexList,'sex')"></mp-cell>
      <mp-cell leftTxt="民族" :btnTxt="nation" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" @mpCellBtnClick="mpCellBtnClick(nationList,'nation')"></mp-cell>
      <mp-cell leftTxt="职业" :btnTxt="profess" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" hasBottomBorder="1" @mpCellBtnClick="mpCellBtnClick(professList,'profess')"></mp-cell>
    </div> 
    <div class="personinfo-box">
      <mp-cell leftTxt="所在城市" :btnTxt="currentCity" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" @mpCellBtnClick="showListCity"></mp-cell>
      <mp-cell leftTxt="详细地址" :btnTxt="address" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="null" hasTopBorder="1"></mp-cell>
      <mp-cell leftTxt="电话" :btnTxt="phone" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="null" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
    </div> 
    </scroller>
     <wxc-city ref="wxcCity"
              :animationType="animationType"
              :currentLocation="location"
              :cityStyleType="cityStyleType"
              @wxcCityItemSelected="citySelect"
              ></wxc-city>
  </div>
</template>
<style scoped>
.container {
  width: 750px;
  background-color: #F4F4F4
}
.personinfo-box{
    margin-bottom: 20px;
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
</style>
<script>



import { MpBar,MpCell} from "madp-ui";
import { WxcCity } from 'weex-ui';


const stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
const picker = weex.requireModule('picker')
export default {
  components: {
    MpCell,
    MpBar,
    WxcCity
  },
  data() {
    return {
      barStyle:{"background-image": "linear-gradient(to right, #dd372a, #e54b3b)"},
      titleStyle:{"color":"#fff","font-size":"38px"},
      List:[1,2,3],
      arrowIcon:"./imgs/arrow-right.png",
      cellStyle:{"background-color":"#fff"},
      btnTxtStyle:{"width":"350px","color":"#333333","margin-right":"4px","text-align": "right"},
      idNo:"",
      sex:"请选择",
      nation:"汉族",
      profess:"请选择",
      profession:"",
      sexList:["男", "女", "未知"],
      nationList:[
        "汉族",
        "蒙古族",
        "回族",
        "藏族",
        "维吾尔族",
        "苗族",
        "彝族",
        "壮族",
        "布依族",
        "朝鲜族",
        "满族",
        "侗族",
        "瑶族",
        "白族",
        "土家族",
        "哈尼族",
        "哈萨克族",
        "傣族",
        "黎族",
        "傈僳族",
        "佤族",
        "畲族",
        "高山族",
        "拉祜族",
        "水族",
        "东乡族",
        "纳西族",
        "景颇族",
        "柯尔克孜族",
        "土族",
        "达斡尔族",
        "仫佬族",
        "羌族",
        "布朗族",
        "撒拉族",
        "毛难族",
        "仡佬族",
        "锡伯族",
        "阿昌族",
        "普米族",
        "塔吉克族",
        "怒族",
        "乌孜别克族",
        "俄罗斯族",
        "鄂温克族",
        "崩龙族",
        "保安族",
        "裕固族",
        "京族",
        "塔塔尔族",
        "独龙族",
        "鄂伦春族",
        "赫哲族",
        "门巴族",
        "珞巴族",
        "基诺族",
        "其他",
        "外国血统"
      ],
      professList:["务农", "工程师", "国家事业单位", "其它"],

      animationType: 'push',
      currentCity: '请选择',
      cityStyleType:'list',
      location: '定位中'
    };
  },

  created() {
    this.profess="务农";
    this.useable="投资理财";
    this.sex="男";
    this.idNo="6226000123003";
    this.phone="15916420402";
    this.address="朝外大街45号泛利大厦";
    // const params = {
    //   TransCode: "IDSP200037",
    //   idType: "01",
    //   idNo: "360424199201063012"
    // };
    // this.postDo("Request", params, data => {
    //   this.userInfo = data;
    //   switch (this.userInfo.profession) {
    //     case "01": this.profess="务农"; break;
    //     case "02": this.profess="工程师"; break;
    //     case "03": this.profess="国家事业单位"; break;
    //     case "99": this.profess="其它"; break;
    //     default:
    //       break;
    //   }
    //   switch (this.userInfo.cardUse) {
    //     case "01": this.useable="投资理财"; break;
    //     case "02": this.useable="个人储蓄"; break;
    //     case "03": this.useable="其它"; break;
    //     default:
    //       break;
    //   }
    //   switch (this.userInfo.certSex) {
    //     case "0": this.sex="男"; break;
    //     case "1": this.sex="女"; break;
    //     case "2": this.sex="未知"; break;
    //     default:
    //       break;
    //   }
    //   this.idNo=this.userInfo.idNo;
    //   this.phone=this.userInfo.phoneNo;
    //   this.address=this.userInfo.contactAddress;
    // });
  },
  methods: {
    mpCellBtnClick(item,model){
      picker.pick({
        items:item,
        confirmTitle:"确认",
        cancelTitle:"取消"
      },(result)=>{
        if(result.result=="cancel"){
          return;
        }
        this[model]=item[result.data]
      })
    },
    showListCity () {
        this.cityStyleType = 'list'
        this.$refs['wxcCity'].show();
      },
      citySelect (e) {
        this.currentCity = e.item.cityName;
      },
  }
};
</script>