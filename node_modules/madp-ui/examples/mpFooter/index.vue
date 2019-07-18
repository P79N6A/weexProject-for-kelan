<template>
  <div>
    
    <mp-footer jsonUrl="json/tab.json" @mpFooterClick="mpFooterClick"></mp-footer>
    <!-- <mp-footer :tabItems="tabItems" @mpFooterClick="mpFooterClick"></mp-footer> -->
    <mp-bar 
    title="标题"
    leftBtn="imgs/arrow-left.png"
    leftTxt="返回"
    rightTxt="使用手册"
    :isBack="true"
    @mpBarRightBtnClick="mpBarRightBtnClick"
   ></mp-bar>
  </div>
</template>
<style scoped>
</style>
<script>
import { MpFooter ,MpBar} from "../../index";
const context = weex.requireModule("context");
export default {
  components: { MpFooter ,MpBar},
  data() {
    return {
      tabItems: []
    };
  },
  created() {
    this.tabItems = [
      {
        title: "首页",
        image: "imgs/home_nor.png",
        selectedImage: "imgs/home_sel.png",
        src: "index.weex.js?Page=Tab_home",
        visibility: "visible"
      },
      {
        title: "理财",
        image: "imgs/wealth_nor.png",
        selectedImage: "imgs/wealth_sel.png",
        src: "index.weex.js?Page=Tab_finance",
        visibility: "hidden"
      },
      {
        title: "生活",
        image: "imgs/life_nor.png",
        selectedImage: "imgs/life_sel.png",
        src: "index.weex.js?Page=Tab_life",
        visibility: "hidden"
      },
      {
        title: "我的",
        image: "imgs/user_nor.png",
        selectedImage: "imgs/user_sel.png",
        src: "index.weex.js?Page=Tab_user",
        visibility: "hidden"
      }
    ];
  },
  methods: {
    mpBarRightBtnClick(){
      let url="";
      if(weex.config.env.osName.toLocaleLowerCase()=="android"){
        url="http://192.168.1.57:8088/docs/module-%25E5%25BA%2595%25E9%2583%25A8%25E5%25AF%25BC%25E8%2588%25AA%25E7%25BB%2584%25E4%25BB%25B6.html";
      }else{
        url=decodeURI("http://192.168.1.57:8088/docs/module-%25E5%25BA%2595%25E9%2583%25A8%25E5%25AF%25BC%25E8%2588%25AA%25E7%25BB%2584%25E4%25BB%25B6.html")
      }
        context.launchStage("ext:"+url)
    },
    mpFooterClick(item) {
      alert(item);
      // alert(item.name);
    }
  }
};
</script>

