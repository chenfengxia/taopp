<template>
  <div class="homeSlice">
      <div class="imgBox">
           <img :src=img1 alt="">
            <img :src=img2 alt="">
            <img :src=img3 alt="">
      </div>
      <ul class="sliceCicel">
          <li :class="{'activeImg': changenImg===1}"></li>
          <li :class="{'activeImg': changenImg===2}"></li>
          <li :class="{'activeImg': changenImg===3}"></li>
      </ul>
  </div>
</template>
<script>
    export default {
      props: ['img1', 'img2', 'img3'],
      data () {
        return {
          activeImgBol: 1
        }
      },
      computed: {
        changenImg () {
          setTimeout(function () {
            this.activeImgBol++
          }, 1000)
          return this.activeImgBol
        }
      }
    }
</script>
<style>
/* 轮播图 */
.homeSlice{
    background: greenyellow;
    width: 100%;
    height: 10.5rem;
    position: relative;
    overflow: hidden;
}
.imgBox{
    width: 300%;
    height: 100%;
    animation: sliceAnimation 5s steps(3,end) infinite;
}
@keyframes sliceAnimation {
    100%{
      transform: translateX(-100%);
      }
}
.imgBox>img{
    width: 33.333%;
    height: 100%;
    float: left;
}
.sliceCicel{
    position: absolute;
    bottom: 1rem;
    right: 50%;
    transform: translateX(50%);
}
.sliceCicel>li{
    background: white;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    float: left;
    margin-right: 1rem;
}
.sliceCicel>.activeImg{
    background: #ccc;
}
/* //gw.alicdn.com/tps/TB1ZWVgNXXXXXaYapXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg
//gw.alicdn.com/tfs/TB1IfkxiqmgSKJjSspiXXXyJFXa-1280-520.jpg_720x720Q30.jpg
//gw.alicdn.com/tfs/TB1E4UQXILJ8KJjy0FnXXcFDpXa-1280-520.jpg_720x720Q30.jpg
 */
</style>