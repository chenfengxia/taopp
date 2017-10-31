<template>
  <div id="app">
<<<<<<< HEAD
    <div class="appBox">
      <ul class="mod-navs">
          <router-link tag="li" to="/home">
              <div class="iconfont icon-dianyingpiao"></div>
              首页</router-link>
          <router-link to="/cinema" tag="li">
              <div class="iconfont icon-yingyuanB-"></div>
              影院</router-link>
              <router-link to="/discover" tag="li">
                  <div class="iconfont icon-faxian"></div>
                  发现</router-link>
          <router-link to="/mine" tag="li">
              <div class="iconfont icon-wode"></div>
              我的</router-link>
      </ul>
    </div>
=======
    <img src="./assets/logo.png">
>>>>>>> 380bb92be45520af4917ccb0e64ef040423e7568
    <router-view/>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'app',
  components: {

  }
=======
  name: 'app'
>>>>>>> 380bb92be45520af4917ccb0e64ef040423e7568
}
</script>

<style>
<<<<<<< HEAD
ul{
  list-style: none;
}
#app,.appBox{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mod-navs{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  width: 100%;
  border-top: 1px solid #ccc;
}
.mod-navs>li{
  float: left;
  width: 25%;
  height: 100%;
  font-size: 1.2rem;
  list-style: none;
  text-align: center;
}
.mod-navs>li .iconfont{
    font-size: 2.5rem;
    color: #888;
    text-shadow: 0 0 1px #000;
    text-decoration-line: none;
}
.mod-navs .router-link-active,.mod-navs .router-link-active .iconfont{
  color: rgba(255, 50, 50, 1);
=======
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
>>>>>>> 380bb92be45520af4917ccb0e64ef040423e7568
}
</style>
