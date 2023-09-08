<template>
    <div class="home">
      <homeHeader></homeHeader>
      <div class="homeBody">
        <router-view></router-view>
    </div>
    </div>
   
    
  </template>
  
  <script setup>
  import homeHeader from '../components/homeHeader.vue';
  </script>
  
  <style scoped>
  .home{
    color: #fff;
    background-image: url(https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/R-C.fe2cb92a9809a66b8ea0b5046d1ed9aa);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow: auto;
  }
  .home::-webkit-scrollbar {  
    display: none;/* 隐藏滚动条 */  
  }
  .homeBody{
    margin-top: 94px;
    height: calc(100% - 94px);
  }
  </style>