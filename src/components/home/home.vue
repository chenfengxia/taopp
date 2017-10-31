<template>
 <div class="homeBox">
     <ul class="homeHead">
         <li>深圳▼</li>
         <li><span class="iconfont icon-sousuo homeHeadSousuo"></span><input type="text" placeholder="搜影片、影院、影人"></li>
         <li>扫一扫</li>
     </ul>
     <ul class="homeNav">
         <li>正在热映</li>
         <li>即将上映</li>
         <li>排行榜</li>
     </ul>
     <div class="moveMain">
     <sliceimg :img1="sliceImg1" :img2="sliceImg2" :img3="sliceImg3"></sliceimg>
      <!-- <div class="homeSlice"></div> -->
      <div class="moveLists">
        <div class="homeMoveItem">
          <div class="moveInfo">
             <div class="moveInfoImg">
                <img src="" alt="">
             </div>
             <div class="moveInfoContent">
                <p class="moveName">片名 <span>3D效果</span></p>
                <p class="moveStart">评分<span>购票</span></p>
                <p class="moveActor">导演</p>
                <p class="moveActor">主演:</p>
                <p class="moveActor"><span>今日最热</span><span>一周最热</span></p>
             </div>
          </div>
         <div class="content">
             <div class="contentRight"></div>
         </div>
        </div>
      <div class="homeMoveItem">
         <div class="moveInfo">
             <div class="moveInfoImg">
             <img src="" alt="">
             </div>
             <div class="moveInfoContent">
                <p class="moveName">片名 <span>3D效果</span></p>
                <p class="moveStart">评分<span>购票</span></p>
                <p class="moveActor">导演</p>
                <p class="moveActor">主演:</p>
                <p class="moveActor"><span>今日最热</span><span>一周最热</span></p>
             </div>
         </div>
         <div class="content">
             <div class="contentRight"></div>
         </div>
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
      sliceImg3: 'http://gw.alicdn.com/tfs/TB1E4UQXILJ8KJjy0FnXXcFDpXa-1280-520.jpg_720x720Q30.jpg'
    }
  },
  components: {
    sliceimg
  }
}
</script>
<style>
.homeBox{
    position: absolute;
    top: 0;
    bottom: 5rem;
    left: 0;
    right: 0;
}
.homeHead,.homeNav{
    height: 5rem;
    width: 100%;
}
.homeNav{
    border-bottom: 1px solid #ccc;
}
.homeHead li,.homeNav li{
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
.homeHeadSousuo{
    position: absolute;
    left: 2.5rem;
    top: 0.3rem;
}
.homeHead li>input{
    width: 100%;
    outline: none;
    text-align: center;
    height: 3rem;
    border-radius: 1rem;
    background: rgba(240, 240, 220, 1);
}
/* 导航 */
.homeNav li{
    width: 33.33%;
}
/* 轮播图 */
/* .homeSlice{
    background: greenyellow;
    width: 100%;
    height: 10.5rem;
} */
.moveMain{
    position: absolute;
    right: 0;
    left: 0;
    top: 10rem;
    bottom: 5rem;
    overflow: auto;
}
/* 影片列表 */
.moveLists{
    width: 100%;
}
.homeMoveItem{
    width: 100%;
    position: relative;
    height: 17rem;
    border-bottom: 1px solid #ccc;
}
.moveInfo{
    width: 100%;
    /* height: 70%; */
    background: white;
    padding: 1.2rem;
}
.moveInfoImg{
    width: 17%;
    height: 6.5rem;
    float: left;
    background: red;
}
.moveInfoContent{
    width: 80%;
    height: 100%;
    background: pink;
    float: right;
}
.content{
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 0;
}
.moveInfoContent p {
    height: 2rem;
}
.moveName{
    height: 2rem;
}
.moveStart>span{
    background: rgba(255, 50, 50, 1);
    display: inline-block;
    width: 16%;
    height: 2.5rem;
    border-radius: 1rem;
    position: absolute;
    right: 2rem;
    text-align: center;
    line-height: 2.5rem;
}
.moveName span{
    display: inline-block;
    border:solid 1px #ccc;
    border-radius: 0.5rem;
}
.contentRight{
    float: right;
    height: 100%;
    width: 78%;
    background: green;
}
</style>
