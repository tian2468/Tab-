<template>
  <div id="app">
    <ul class="swiperTab">
      <li
        @click="tabClick(index)"
        v-for="(item,index) in navList"
        :key="index"
        :class="index==initialSlide?'active':''"
      >
        <span>{{item}}</span>
      </li>
    </ul>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @change="swiperChange()">内容一</div>
        <div class="swiper-slide">内容二</div>
        <div class="swiper-slide">内容三</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "app",
  data() {
    return {
      navList: ["内容一", "内容二", "内容三"],
      initialSlide: 0,
      mySwiper: ""
    };
  },
  mounted() {
    let that = this;
    that.dom();
    that.mySwiper = new Swiper(".swiper-container", {//初始化swiper
      initialSlide: this.initialSlide,//swiper开始内容页详情看swiperAPI
      observer: true
    });
    that.mySwiper.on("slideChange", function() {//监听swiper-slide切换
      that.initialSlide = this.realIndex;
    });
  },
  methods: {
    dom() {//fuzh
      let W = window.innerWidth;
      let H = window.innerHeight;
      let doms = document.getElementById("app");
      doms.style.width = W + "px";
      doms.style.height = H + "px";
    },
    tabClick(index) {//点击导航切换
      this.initialSlide = index;
      this.mySwiper.slideTo(index);//跳转到指定内容
    }
  }
};
</script>
<style lang="scss">
@import "../public/css/global.scss";
.active {
  color: red !important;
}
.swiperTab {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px2rem(20);
    color: #000;
  }
}
.swiper-container {
  width: 100%;
  height: 90%;
  .swiper-wrapper {
    font-size: px2rem(30);
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
