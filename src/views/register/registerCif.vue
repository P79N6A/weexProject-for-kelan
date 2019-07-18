<template>
    <scroller class="open-account">
        <div class="title">
            <text class="title-text">请按照要求拍摄身份证</text>
            <text class="title-text">至少拍摄身份证一面才可以进行识别</text>
        </div>
        <div class="content">
            <div class="card1-img">
                <image class="card1" :src="card1Src" @click="getCard1" />
            </div>
            <text class="account-text">点击拍摄身份证正面（人像面）</text>
            <text class="title-text">{{frontBase64}}</text>
            <div class="card2-img">
                <image class="card1" :src="card2Src" @click="getCard2" />
            </div>
            <text class="account-text">点击拍摄身份证背面（国徽面）</text>
            <text class="title-text">{{backBase64}}</text>
        </div>
        <!-- <div class="footer">
            <text class="button" @click="doIt">识别</text>
        </div> -->
        <div  class="button4"  @click="doIt"><text class="text">识别</text></div>
    </scroller>
</template>

<script>
const modal = weex.requireModule("modal");
//const ocr = weex.requireModule("ocr");
const context = weex.requireModule("context");

export default {
  data() {
    return {
      card1Src: "./imgs/register/card2.png",
      card2Src: "./imgs/register/card1.png",
      card1Flag:false,
      card2Flag:false,
      frontBase64: "**********",
      backBase64: "**********",
      licence:
        "Mzg1NDE0bm9kZXZpY2Vjd2F1dGhvcml6ZZfk4+bn5+Tq3+bg5efm5Of65Obn4Obg5Yjm5uvl5ubrkeXm5uvl5uai6+Xm5uvl5uTm6+Xm5uDm1efr5+vn6+er4Ofr5+vn64vn5+Tm5+bn"
    };
  },
  methods: {
//  setLicence() {
//    ocr.setLicence(this.licence);
//  },
//  //正面
//  getCard1() {
//    var card1Params = {
//      flag: "front"
//    };
//    this.setLicence();
//    ocr.ocrOpenCamera(JSON.stringify(card1Params), data => {
//      //图片的url
//      // this.alertMsg(data);
//      var data = JSON.parse(data);
//      this.card1Flag=true;
//      //context.getMappedFileUrl("文件路径");
//      this.card1Src = context.getMappedFileUrl(data.path);
//      //this.frontBase64 = data.base64;
//    });
//  },
//  //反面
//  getCard2() {
//    var card2Params = {
//      flag: "back"
//    };
//    this.setLicence();
//    ocr.ocrOpenCamera(JSON.stringify(card2Params), data => {
//      //图片的url
//      // this.alertMsg(data);
//      var data = JSON.parse(data);
//      this.card2Flag=true;
//      this.card2Src = context.getMappedFileUrl(data.path);
//      //this.backBase64 = data.base64;
//    });
//  },
//  doIt(){
//      // this.alertMsg('测试！');
//      if(!this.card1Flag){
//        this.alertMsg("请上传身份证正面照片！")
//      }else if(!this.card2Flag){
//        this.alertMsg("请上传身份证背面照片！")
//      }else{
//        this.jump('/RegisterSecond')
//      }
//      
//  }
}
};
</script>

<style scoped>
.button4{
	width: 669.9975px;
	height: 84.9975px;
	margin-left:37.5px;
	margin-bottom:76.5px;
	margin-top:42.5px;
	border-radius: 53.4975px ;
	background-color: #00A0E8 ;
}
.text {
	width: 100%;
	font-size: 32.4975px;
	color: #FFFFFF;
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	margin-top: 22px;
	margin-left:280px;
}
.open-account {
  /* background-color: #151d30; */
}
.title {
  margin-top: 58px;
}
.title-text {
  text-align: center;
  color: white;
  font-size: 38px;
}
.content {
  margin-top: 78px;
}

.card1 {
  width: 470px;
  height: 297px;
  align-self: center;
}
.account-text {
  text-align: center;
  color: white;
  font-size: 35px;
  margin-top: 14px;
  margin-bottom: 14px;
}
.footer {
  align-items: center;
  margin-top: 40px;
}
.button {
  background-color: #d62b31;
  width: 700px;
  height: 86px;
  line-height: 86px;
  text-align: center;
  font-size: 36px;
  color: #fff;
}
</style>

