<template>
  <div class="cinema">
      <ul class="homeHead cinemaHead">
         <li>深圳▼</li>
         <li>影院</li>
         <li><span  class="iconfont icon-dizhi cinemaiconfont" ></span><span class="iconfont icon-sousuo cinemaiconfont"></span></li>
     </ul>
     <div class="cinemafilter">
         <div class="cinemaLocation" @click="filterLocation">区域▼</div>
         <div class="cinemaStyle" @click="filterFavorite">特色▼</div>
     </div>
     <div class="filterLocationList cinemafilterList" v-show="filterLocationBol">
         <ul>
             <li v-for="item in filterLocationList" :key="item" @click="filterLocationHide(item)">{{item}}</li>
         </ul>
     </div>
      <div class="filterFavoriteList cinemafilterList" v-show="filterFavoriteBol">
         <ul>
             <li v-for="item in filterFavoriteList" :key="item" @click="filterFavoriteHide(item)">{{item}}</li>
         </ul>
     </div>
     <!-- 蒙版 -->
     <div class="cinemaListsmengban" v-show="mengban" @click="hidefiterList"></div>
     <div class="cinemaLists">
         <!-- 轮播图 -->
        <sliceimg :img1="sliceImg1" :img2="sliceImg2" :img3="sliceImg3"></sliceimg>
        <div class="cinemaItem">
            <div class="cinemaInfoContent">
                <p class="cinemaNameInfo"><span class="cinemaName">电影院名字</span><span>影城卡</span><span>多少元起</span></p>
                <p class="cinemaInfoLocation">
                    <span>具体地址</span>
                    <span>距离当前位置多少米</span>
                </p>
                <p class="cinemaStyleList"><span>退票</span><span>改签</span><span>观影小食</span></p>
                <p class="cinemaCart"><span>卡</span><span>影城卡信息</span></p>
                <p class="cinemaFavorable"><span>促</span><span>特惠促销信息</span></p>
            </div>
            <div class="cinemaInfoContent">
                <p class="cinemaNameInfo"><span class="cinemaName">电影院名字</span><span>影城卡</span><span>多少元起</span></p>
                <p class="cinemaInfoLocation">
                    <span>具体地址</span>
                    <span>距离当前位置多少米</span>
                </p>
                <p class="cinemaStyleList"><span>退票</span><span>改签</span><span>观影小食</span></p>
                <p class="cinemaCart"><span>卡</span><span>影城卡信息</span></p>
                <p class="cinemaFavorable"><span>促</span><span>特惠促销信息</span></p>
            </div>
            <div class="cinemaInfoContent">
                <p class="cinemaNameInfo"><span class="cinemaName">电影院名字</span><span>影城卡</span><span>多少元起</span></p>
                <p class="cinemaInfoLocation">
                    <span>具体地址</span>
                    <span>距离当前位置多少米</span>
                </p>
                <p class="cinemaStyleList"><span>退票</span><span>改签</span><span>观影小食</span></p>
                <p class="cinemaCart"><span>卡</span><span>影城卡信息</span></p>
                <p class="cinemaFavorable"><span>促</span><span>特惠促销信息</span></p>
             </div>
        
        
        
        </div>
     </div>
  </div>
</template>
<script>
import sliceimg from '@/common/sliceImg'
export default {
  data () {
    return {
      sliceImg1: 'http://gw.alicdn.com/tps/TB1ZWVgNXXXXXaYapXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg',
      sliceImg2: 'http://gw.alicdn.com/tfs/TB1IfkxiqmgSKJjSspiXXXyJFXa-1280-520.jpg_720x720Q30.jpg',
      sliceImg3: 'http://gw.alicdn.com/tfs/TB1E4UQXILJ8KJjy0FnXXcFDpXa-1280-520.jpg_720x720Q30.jpg',
      // 特色列表
      filterFavoriteList: [],
      filterFavoriteBol: false,
      // 区域列表
      filterLocationList: [],
      filterLocationBol: false,
      // 蒙版
      mengBanBol: false
    }
  },
  methods: {
    // 区域
    filterLocation () {
      this.filterLocationBol = !this.filterLocationBol
      this.filterFavoriteBol = false
      this.filterLocationList = [1, 2, 3, 4, 5, 6, 7]
    },
    // 特色筛选
    filterFavorite () {
      this.filterLocationBol = false
      this.filterFavoriteBol = !this.filterFavoriteBol
      this.filterFavoriteList = ['号', '哈哈', '哦', '哼']
    },
    // 点击蒙版
    hidefiterList () {
      this.filterFavoriteBol = false
      this.filterLocationBol = false
    },
    // 点击区域列表
    filterLocationHide () {
      this.filterLocationBol = false
    },
    // 点击特色列表
    filterFavoriteHide () {
      this.filterFavoriteBol = false
    }
  },
  computed: {
    mengban () {
      if (!this.filterLocationBol && !this.filterFavoriteBol) {
        this.mengBanBol = false
      } else {
        this.mengBanBol = true
      }
      return this.mengBanBol
    }
  },
  components: {
    sliceimg
  }
}
</script>
<style>
.cinema{
    position: absolute;
    top: 0;
    bottom: 5rem;
    left: 0;
    right: 0;
}
.homeHead{
    height: 5rem;
    width: 100%;
}
.homeHead li{
    float: left;
    height: 100%;
    text-align: center;
    line-height: 5rem;
    font-size: 1.4rem;
}
.homeHead li:first-of-type{
    width: 20%;
}
.homeHead li:nth-child(2){
    width: 60%;
    position: relative;
}
.homeHead li:nth-child(3){
    width: 20%;
}
/* 轮播图 */
.homeSlice{
    background: greenyellow;
    width: 100%;
    height: 10.5rem;
}
/* 影院列表 */
.cinemaiconfont{
    margin-right: 1rem;
    font-size: 2rem;
}
.cinemaHead{
    border-bottom: solid 1px #ccc;
}
.cinemafilter{
    height: 5rem;
    width: 100%;
    border-bottom: solid 1px #ccc;
}
.cinemafilter div{
    float: left;
    width: 50%;
    text-align: center;
    height: 2rem;
    margin-top: 1.5rem;
}
.cinemaLocation{
    border-right: 1px solid #ccc;
}
.cinemaLists{
    position: absolute;
    top: 10rem;
    bottom: 5rem;
    left: 0;
    right: 0;
    overflow: scroll;
}
/* 蒙版 */
.cinemaListsmengban{
    background:rgba(100, 100, 100, 0.1);
    position: absolute;
    top: 10rem;
    bottom:0;
    left: 0;
    right: 0;
    z-index: 10;
}
.cinemaItem{
    padding: 0 1rem 0 1rem;
}
.cinemaInfoContent{
    border-bottom: solid 1px #ccc;
}
.cinemaInfoContent p{
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
}
.cinemaName{
    font-size: 2rem;
}
.cinemaNameInfo span:nth-child(2){
    background: rgba(80, 200, 80, 1);
    display: inline-block;
    margin-left: 2rem;
    width: 4rem;
    color: #ffffff;
    height: 1.8rem;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .5rem;
}
.cinemaNameInfo span:nth-child(3){
    float: right;
    height: 100%;
    line-height: 3rem;
}
.cinemaStyleList span{
    border: solid 1px skyblue;
    color: skyblue;
    padding: 0.2rem 0.5rem;
    margin-right: 1rem;
    border-radius: .5rem;
}
.cinemaInfoLocation span:last-child{
    float: right;
    height: 100%;
    color: #777;
    /* line-height: 3rem; */
}
.cinemaCart span:nth-child(1),.cinemaFavorable span:nth-child(1){
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
}
.cinemaCart span:nth-child(1){
     background: rgba(80, 200, 80, 1);
}
.cinemaFavorable span:nth-child(1){
     background: rgba(250, 150, 80, 1);
}
/* 筛选隐藏模块 */
.filterFavoriteList,.filterLocationList{
    width: 100%;
    /* height: 30rem; */
    position: absolute;
    background: white;
    top: 10rem;
    z-index: 20;
}
.cinemafilterList ul{
    width: 100%;
    height: 100%;
    padding: 1rem;
}
.cinemafilterList li{
    float: left;
    width: 6.3rem;
    height: 3.5rem;
    border:solid 1px #ccc;
    margin: .5rem .5rem;
    text-align: center;
    line-height: 3.5rem;
}

</style>
