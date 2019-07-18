<template>
    <div>

      <mp-mine 
       jsonUrl="json/mine.json" 
       :nameTxt="nameTxt"
       @mpMineDetailClick="mpMineDetailClick" @mpMineLoginClick="mpMineLoginClick"></mp-mine>
       
       <mp-mine 
       jsonUrl="json/mine.json" 
      :mpMineBgImgStyle="mpMineBgImgStyle"
      :bgStyle="bgStyle"
      :nameStyle="nameStyle"
      :decStyle="decStyle"
      :btnRightStyle="btnRightStyle"
      :loginStyle="loginStyle"
      :nameTxt="nameTxt"
       @mpMineDetailClick="mpMineDetailClick" @mpMineLoginClick="mpMineLoginClick"></mp-mine>
    </div>
</template>
<style scoped>
.row{
  flex-direction: row;
}
.right-btn{
  margin-left: 10px;
}
</style>
<script>
import { MpMine } from "../../index";
const context = weex.requireModule("context");
const modal = weex.requireModule("modal");
export default {
  components: { MpMine },
  data() {
    return {
       mpMineBgImgStyle:{},
       bgStyle:{},
       nameStyle:{},
       decStyle:{},
       btnRightStyle:{},
       loginStyle:{},
       nameTxt:""
    };
  },
  methods: {
    mpMineDetailClick(){

    },
    mpMineLoginClick(){

    }
  }
};
</script>

