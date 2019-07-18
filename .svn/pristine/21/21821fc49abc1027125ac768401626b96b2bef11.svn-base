  //客户端扩展模块
  const context = weex.requireModule('context');
  const modal = weex.requireModule("modal");
  const stream = weex.requireModule("stream");
  const device = weex.requireModule("weex-devices");
  const Toast = weex.requireModule("weex-toast");
  
  
  export default {
      methods: {
          jump(to,flag) {
              if (this.$router) {
                  if(flag){
                    this.$router.replace(to)
                  }else{
                    this.$router.push(to)
                  }
                  
              }
          },
      goto(){
      	context.launchStage("main.login?return=finish");
      },
           //是否是iphoneX iphoneXS iphoneXSMax
	    isipx() {
	      let [deviceList, deviceModel] = [
	        [
	          'iPhone10,3',
	          'iPhone10,6',
	          'iPhone11,8',
	          'iPhone11,2',
	          'iPhone11,4',
	          'iPhone11,6'
	        ],
	        weex.config.env.deviceModel
	      ];
	      return deviceList.indexOf(deviceModel) != '-1';
	    },
          goBack() {
              if (this.$router) {
              	//"/utilResult",
                 let arr=["/depositHome","/myXLD",'/myCYC',"/czbHome","/QRdraw","/myFinance","/financeHome","/Loans","/financeCYC","/msgCenter","/financeZM","/ChangePwd","/Login","/RegisterFirst","/fingerLogin","/Equipment","/SecurityCenter","/forgetPassword"]
                  if(this.$route.path=='/Launcher' || this.$route.path=='/LauncherOld'){
                    this.$store.state.show=true;
                  }else if (arr.toString().indexOf(this.$route.path)!=-1) {
                      context.finish()
                  } else if(this.$route.path == "/utilResult" || this.$route.path=='/resultPage'){
                  	return;
                  }else{
                      this.$router.back()
                  }
              }
          },
          commonTransResponse(response,sucessCallback,failCallback) {
            if (response.status == 200) {

                if (response.data._RejCode == "000000") {
                    sucessCallback(response.data);

                } else {
                   this.alertMsg(
                        JSON.stringify(response.data.errmsg),
                    );
                    failCallback(JSON.stringify(response.data.errmsg));
                }
            } else {
                this.alertMsg(
                    "网络异常",
                );
                failCallback("通讯异常");

            }
        },
         confirm(message, callback) {
            modal.confirm({
                message: message,
                okTitle :'确定',
                cancelTitle:"取消",
                duration: 3
            }, function (value) {
                callback(value);
            })
        },
        alertMsgCallBack(message, callback) {
            modal.alert({
                message: message,
                okTitle :'确定',
                duration: 3
            }, function (value) {
                callback();
            })
        },
        alertMsg(message) {
            modal.alert({
                message: message,
                okTitle :'确定',
                duration: 3
            })
        },
        toastMsg(message) {
            Toast.showToast(message);
//						modal.toast({
//							message: message,
//							duration: 3
//						})
        },
        toastMsg1(message){
        	modal.toast({
							message: message,
							duration: 3
						})
        },
        getHeight() {
            const { env: { deviceHeight, deviceWidth } } = weex.config;
            var pageHeight = deviceHeight / deviceWidth * 750;
            return pageHeight;
        },
        propName(value){
		        	if(value == ''){
		            	this.alertMsg('用户名或手机号不能为空')
		    					return true;
		    			}
        },
        propSms(value){
        	if(value == ''){
		            	this.alertMsg('图形验证码不能为空')
		    					return true;
		    			}
        },
        openOverlay(){
            this.$store.state.overLayShow=true;
            // setTimeout(()=>{
            //     this.$store.state.overLayShow=false;
            // },30000)
        },
        closeOverlay(){
            this.$store.state.overLayShow=false;
        },
        postDo(url,formData,sucessCallback,failCallback){
            var head = {
                "_locale":"zh_CN",
                "content-type":"application/json;charset=utf-8",
                "Accept":"application/json"
            }
            	this.addCommonParams(formData);
							device.getMachineCode(data=>{
								formData["MachineCode"] = data;
								device.getMachineOS(data=>{
									formData["MachineOS"] =data;
										device.getIpAddr(data=>{
										formData["IpAddr"] = data;
										device.getMacAdrr(data=>{
											formData["MacAdrr"] = data;
//											device.getDeviceToken(data=>{
//												formData["DeviceToken"] = data;
					              this.openOverlay();
					              stream.fetch(
					                  {
					                      method: "POST",
					                      url: `/pweb/`+url,
					                      type: "json",
					                      body: JSON.stringify(formData),
					                      headers:head,
					                  },
					                  response => {
//					                  	this.alertMsg(JSON.stringify(response));
					                    this.closeOverlay();
					                    if(response.status!=200){
					                        this.alertMsg("网络异常"+response.status);
					                        failCallback()
					                        return;
					                    }
																if(response.data.jsonError){
																	this.alertMsg(response.data.jsonError);
																	failCallback()
																	return;
																}
					                      if(response.data._RejCode=="000000"){
					                            sucessCallback(response.data)
					                      }else{
					                      	failCallback()
					                          //交易失败
					                          this.alertMsg();
					                      }
					
					                  }
					              );
//					            });
			              })
		              })
	              })
              })
          },
          //增加公共参数
        addCommonParams(params) {
					// 公共参数
	        params["_locale"] = "zh_CN";
	        params["BankId"] = "9999";
	        params["LoginType"] = "Q";
	        params["_ChannelId"] = "PMBS";
        }
      }
  }