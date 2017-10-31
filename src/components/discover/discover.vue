<template>
  <div class="discoverBox">
    <sliceimg :img1="sliceImg1" :img2="sliceImg2" :img3="sliceImg3"></sliceimg>
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
