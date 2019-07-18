<template>
  <div>
    <div v-for="(news,key) in NewsList" :key="key" @click="jumpTo(news.url)">
      <div v-if="selectLabel == '全部' ||selectLabel == '' " class="ad_area">
        <div class="text_area">
          <text class="face_text">{{news.title}}</text>
          <text class="hua_text">{{news.short}}</text>
          <div class="third">
            <text class="hours">{{news.time}}</text>
            <text class="newsitem">{{news.newsitem}}</text>
          </div>

        </div>
        <div class="rightsection">
          <image class="ad" :src="news.src" />
          <div class="thirdsectionright">
            <image class="eye" :src="news.eyesrc" />
            <text class="seenNum">{{news.seenNum}}</text>
          </div>
        </div>
      </div>
      <div v-if="news.label == selectLabel" class="ad_area">
        <div class="text_area">
          <text class="face_text">{{news.title}}</text>
          <text class="hua_text">{{news.short}}</text>
          <div class="third">
            <text class="hours">{{news.time}}</text>
            <text class="newsitem">{{news.newsitem}}</text>
          </div>

        </div>
        <div class="rightsection">
          <image class="ad" :src="news.src" />
          <div class="thirdsectionright">
            <image class="eye" :src="news.eyesrc" />
            <text class="seenNum">{{news.seenNum}}</text>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.topic {
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
}

.topic_img {
  margin-top: 1px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 260px;
  width: 750px;
  margin-bottom: 1px;
}

.topic_text {
  color: #404561;
  font-size: 30px;
  font-weight: 600;
}

.more {
  font-size: 26px;
  color: #848996;
}

.fast {
  width: 450px;
  height: 200px;
  margin: 30px;
}

.ad_area {
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 200px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.text_area {
  width: 450px;
  margin-right: 50px;
}

.face_text {
  font-size: 28px;
  color: #404561;
}

.hua_text {
  margin-top: 20px;
  font-size: 26px;
  color: #848996;
}
.third {
  margin-top: 20px;
  flex-direction: row;
}

.hours {
  color: #a6aeb4;
  font-size: 26px;
}
.newsitem {
  margin-left: 15px;
  color: #416dff;
  font-size: 26px;
}
.rightsection {
  flex-direction: column;
}
.ad {
  width: 200px;
  height: 140px;
  border-radius: 5px;
}
.thirdsectionright {
  margin-top: 20px;
  margin-left: 130px;
  flex-direction: row;
}
.eye {
  width: 33px;
  height: 27px;
}
.seenNum {
  color: #a6aeb4;
  font-size: 16px;
}
</style>
<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");

export default {
  props: ["jsonurl", "showData","selectLabel"],
  data() {
    return {
      ImgList: [],
      NewsList: []
      
    };
  },
  created() {
    this.getGoldData();
  },
  methods: {
    jumpTo(url) {
      if (url) {
        context.launchStage(url);
      }
    },
    getGoldData() {
      if (!this.showData) {
        stream.fetch(
          {
            method: "GET",
            url: this.jsonurl,
            type: "json"
          },
          response => {
            if (response.status === 200) {
              this.ImgList = response.data.data.bigImgList;
              this.NewsList = response.data.data.newsList;
            }
          }
        );
      } else {
        this.NewsList = this.showData;
      }
    }
  },
  showData() {
    debugger;
    this.getGoldData();
  }
};
</script>