<template>
<div class="imgBox">
  <mt-swipe :auto="4000" class="imgBoxUi">
    <mt-swipe-item>
       <img :src=img1 alt="" class="imgs">
    </mt-swipe-item>
    <mt-swipe-item>
      <img :src=img2 alt=""  class="imgs">
    </mt-swipe-item>
    <mt-swipe-item>
      <img :src=img3 alt=""  class="imgs">
    </mt-swipe-item>
  </mt-swipe>
</div>

</template>
<script>
    export default {
      props: ['img1', 'img2', 'img3']
    }
</script>
<style>
.imgBox{
   background: greenyellow;
    width: 100%;
    height: 10.5rem;
}
.imgs{
    width: 100%;
    height: 100%;
}
</style>
