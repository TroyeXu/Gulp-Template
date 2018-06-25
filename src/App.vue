<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="./assets/logo.png" alt="">
    <h3>一般路由</h3>
    <router-link to="/">首頁</router-link>
    <h3>子路由</h3>
    <router-link :to="{ name: 'About'}">ABout</router-link>
    <router-link :to="{ name: 'AH'}">a-harry</router-link>
    <router-link :to="{ name: 'AT'}">a-troyexu</router-link>
    <h3>單頁面多rounter</h3>
    <router-link to="/">首页</router-link> |
    <router-link to="/hi">Hi页面</router-link> |
    <p>"router.name+{{$route.name}}</p>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    <router-link to="/Cat">cat首页</router-link>
    <router-link to="/params/11111/ website is very">caturl參數首页</router-link> |
    <h3>redirect</h3>
    <router-link to="/goback">redirectc回首頁</router-link>


    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>