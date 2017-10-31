<template>
  <div class="mineBox">
    <div class="mineHeadLogo">
        <span class="iconfont icon-shezhi"></span>
        <span class="iconfont icon-bell"></span>
    </div>
    <div class="mineMain">
      <div class="mineHead">
        <div class="mineHeadInfo"></div>
        <div class="member"></div>
      </div>
      <div class="mineNav"></div>
      <div class="mineList"></div>
    </div>
    
  </div>
</template>
<style>
.mineBox{
  position: absolute;
  top: 0rem;
  left: 0;
  right: 0;
  bottom: 5rem;
}
.mineMain{
  position: absolute;
  top: 5rem;
  right: 0;
  left: 0;
  bottom: 0;
}
.mineHead,.mineNav,.mineList,.mineHeadLogo,.mineHeadInfo,.member{
  width: 100%;
}
.mineHead{
  padding: 0 1rem;
  background: #43b8b0;
  height: 35%;
  color: #eee;
}
.mineNav{
  height: 15%;
  background: gold;
}
.mineList{
  height: 50%;
  background: #ccc;
}
.member{
  height: 40%;
}
.mineHeadInfo{
  height: 60%;
  border-bottom: solid 1px #fff;
}
.mineHeadLogo{
  position: absolute;
  color: #FFF;
  top: 0;
  height: 5rem;
  background: #43b8b0;
  padding: 1.5rem 1rem;
}
.mineHeadLogo span{
  font-size: 2rem;
  display: inline-block;
  height: 100%;
}
.mineHeadLogo span:nth-child(2){
  float: right;
}
</style>
