<template>
  <div class="container">
    <mp-bar title="信息补录" :barStyle="barStyle" :titleStyle="titleStyle" :isBack="true">
      <div class="btn-box" slot="left">
        <image class="back-btn" src="imgs/arrow-back.png" />
        <image class="close-btn" src="imgs/close.png" />
      </div>
    </mp-bar>
    <scroller>
      <div class="personinfo-box">
        <mp-cell leftTxt="手机号" :cellStyle="cellStyle" hasTopBorder="1">
          <div slot="btn">
            <mp-input type="number" vModel="phone" :defaultValue="phone" @mpInputChange="mpInputChange" :inputStyle="inputStyle" closeIcon="imgs/popup-close.png"></mp-input>
          </div>
        </mp-cell>
        <!-- <mp-cell leftTxt="验证码" :cellStyle="cellStyle" hasTopBorder="1">
          <div class="token-box" slot="btn">
            <mp-input type="number" vModel="token" @mpInputChange="mpInputChange" :inputStyle="inputStyle1" closeIcon="imgs/popup-close.png"></mp-input>
            <image src="./imgs/found.png" class="imgL" @click="sendSmS" v-if="isTimerStop==false" />
            <text class="disimg" v-else>{{msgCodeBtnText}}</text>
          </div>
        </mp-cell> -->
        <mp-cell leftTxt="职业" :btnTxt="profess" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" @mpCellBtnClick="mpCellBtnClick(professList,'profess')"></mp-cell>
        <mp-cell leftTxt="联系地址" :cellStyle="cellStyle" hasTopBorder="1">
          <div slot="btn">
            <mp-input type="text" vModel="address" :defaultValue="address" @mpInputChange="mpInputChange" :inputStyle="inputStyle" closeIcon="imgs/popup-close.png"></mp-input>
          </div>
        </mp-cell>
        <mp-cell leftTxt="开卡用途" :btnTxt="useable" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" :arrowIcon="arrowIcon" hasTopBorder="1" hasBottomBorder="1" @mpCellBtnClick="mpCellBtnClick(useableList,'useable')"></mp-cell>
        <div class="btn-submit">
          <mp-button title="提交" :btnClass="btnClass" @mpButtonClick="mpButtonClick"></mp-button>
        </div>

        <div v-if="busiId">
          <mp-cell leftTxt="业务编码" :btnTxt="busiId" arrowIcon="" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" hasTopBorder="1"></mp-cell>
          <mp-cell leftTxt="提示：请到智慧柜台领取银行卡！"  arrowIcon="" :cellStyle="cellStyle" :btnTxtStyle="btnTxtStyle" hasTopBorder="1" hasBottomBorder="1"></mp-cell>
        </div>

      </div>

    </scroller>

  </div>
</template>
<style scoped>
.container {
  width: 750px;
  background-color: #f4f4f4;
}
.personinfo-box {
  margin-bottom: 20px;
}
.input-txt {
  text-align: right;
}
.btn-box {
  flex-direction: row;
  align-items: center;
}
.back-btn {
  width: 30px;
  height: 54px;
  margin-right: 10px;
}
.close-btn {
  width: 48px;
  height: 48px;
  margin-left: 10px;
}
.btn-submit {
  width: 750px;
  margin-top: 50px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
}
.shadow {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
}
.shadow:active {
  box-shadow: 0 20px 18px rgba(0, 0, 0, 0.4);
}
/* .token-box{
  flex-direction: row;
}
.imgL {
    width: 200px;
    height: 70px;
    margin-top: 15px;
    margin-right: 15px;
  }
  .disimg {
    display: block;
    width: 200px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 24px;
    color: #C0C0C0;
    border-radius: 70px;
    border-style: solid;
    border-width: 1px;
    border-color: #C0C0C0;
    margin-top: 15px;
    margin-right: 15px;
  } */
</style>
<script>
import { MpBar, MpCell, MpInput, MpButton } from "madp-ui";

const stream = weex.requireModule("stream");
const modal = weex.requireModule("modal");
const context = weex.requireModule("context");
const picker = weex.requireModule("picker");
export default {
  components: {
    MpCell,
    MpBar,
    MpInput,
    MpButton
  },
  data() {
    return {
      barStyle: {
        "background-image": "linear-gradient(to right, #dd372a, #e54b3b)"
      },
      titleStyle: { color: "#fff", "font-size": "38px" },
      arrowIcon: "./imgs/arrow-right.png",
      cellStyle: { "background-color": "#fff" },
      btnTxtStyle: {
        width: "350px",
        color: "#333333",
        "margin-right": "4px",
        "text-align": "right"
      },
      inputStyle: { width: "500px", "text-align": "right" },
      inputStyle1: { width: "250px", "text-align": "right" },
      btnClass: "shadow",
      sex: "请选择",
      nation: "请选择",
      profess: "请选择",
      useable: "请选择",
      profession:"",
      cardUse:"",
      sexList: ["男", "女", "未知"],
      nationList: [
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
      professList: ["务农", "工程师", "国家事业单位", "其它"],
      useableList: ["投资理财", "个人储蓄", "其它"],
      phone:"",
      address:"",
      busiId:""
      // msgCodeBtnText:'',
      // isTimerStop:false,
      // time: 60,
      // msgCode:"",
    };
  },
  created() {
    // modal.alert({ message: context.getParam("paramsData") });
    // let paramsData=context.getParam("paramsData")
    // const params = {
    //   TransCode: "IDSP200037",
    // };
    // if(!paramsData){
    //   params.idType="01",
    //   params.idNo="360424199201063012"
    // }else{
    //   params.busiId=paramsData
    // }
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
    //   // this.profess="工程师";
    //   // this.useable="其它";
    //   this.phone=this.userInfo.phoneNo;
    //   this.address=this.userInfo.contactAddress;
    // });
    // setTimeout(()=>{
      // this.phoneDefaultValue="12312434";
      this.profess="工程师";
      // this.addressDefaultValue="XXXXXX"
      this.useable="其它";
      this.userInfo={};
      this.phone="12312434";
      this.address="XXXXXX";
    // },1000)
    
  },
  methods: {
    mpCellBtnClick(item, model) {
      picker.pick(
        {
          items: item,
          confirmTitle: "确认",
          cancelTitle: "取消"
        },
        result => {
          if (result.result == "cancel") {
            return;
          }
          this[model] = item[result.data];
        }
      );
    },
    // //获取短信验证码
    //   	sendSmS(){
    //       this.timeBuild();
    //     },
    // //倒计时
    //   timeBuild(){
    //       var timer = setInterval(() => {
    //           if (this.time < 0) {
    //               this.time = 60;
    //               this.isTimerStop=false;
    //               clearInterval(timer);
    //           } else {
    //               this.isTimerStop=true;
    //               this.msgCodeBtnText = "重新获取(" + this.time-- + "s)";
    //           }
    //       }, 1000);
    //   },
    //获取输入框值
    mpInputChange(model, value) {
      debugger;
      this[model] = value;
    },
    mpButtonClick() {
      // this.userInfo.TransCode = "IDSP200038";

      // switch (this.profess) {
      //   case "务农": this.profession="01"; break;
      //   case "工程师": this.profession="02"; break;
      //   case "国家事业单位": this.profession="03"; break;
      //   case "其它": this.profession="99"; break;
      //   default:
      //     break;
      // }
      // switch (this.useable) {
      //   case "投资理财": this.cardUse="01"; break;
      //   case "个人储蓄": this.cardUse="02"; break;
      //   case "其它": this.cardUse="03"; break;
      //   default:
      //     break;
      // }
      // this.userInfo.phoneNo = this.phone;
      // this.userInfo.profession = this.profession;
      // this.userInfo.contactAddress = this.address;
      // this.userInfo.cardUse = this.cardUse;
      
      // this.postDo("Request", this.userInfo, data => {
      //   this.busiId=this.userInfo.busiId ;
        modal.alert({ message: "信息补录成功！" });
      // });
    }
  }
};
</script>