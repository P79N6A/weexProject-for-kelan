export default {
	addDot(val){
        var Astr = val.toString();
        Astr = Astr.replace(/,/g,'');
        if(Astr.indexOf(".") != -1){
            var str = Astr.split(".")[0]
            var afDot = Astr.split(".")[1]
            var newVal = "";
            for(var i=0;i<=str.length-1;i++){
                if((str.length-i)%3 == 1 && i!=(str.length-1)){
                    newVal = newVal + str.charAt(i) + ",";
                }else{
                    newVal = newVal + str.charAt(i);
                }
            }
            return newVal+"."+afDot;
        }else{
            var str = val.toString();
            var newVal = "";
            for(var i=0;i<=str.length-1;i++){
                if((str.length-i)%3 == 1 && i!=(str.length-1)){
                    newVal = newVal + str.charAt(i) + ",";
                }else{
                    newVal = newVal + str.charAt(i);
                }
            }
            return newVal+".00";
        }
    }

}