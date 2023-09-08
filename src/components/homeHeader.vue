<template>
    <div class="header">
        <a href="#" class="logo">
            This is a Logo!
        </a>
        <nav class="navbar">
            <router-link to="/"  class="item" style="--i:1">Home</router-link>
            <router-link to="/about"  class="item" style="--i:2">About</router-link>
            <router-link to="/skill"  class="item" style="--i:3">Skills</router-link>
            <router-link to="/me"  class="item me" style="--i:4">Me
                <div class="showMeBox">
                    <meCard></meCard>
                </div>
            </router-link>
        </nav>
       
    </div>
</template>

<script setup>
import meCard from './meCad.vue'
</script>

<style scoped>
.header {
    position: fixed;
    /* 将导航栏固定在页面顶部 */
    left: 0;
    width: 100%;
    background: transparent;
    /* 设置导航栏背景为透明 */
    display: flex;
    /* 将导航栏的子元素设置为flex布局 */
    justify-content: space-between;
    /* 将导航栏子元素分散对齐 */
    align-items: center;
    /* 将导航栏子元素垂直居中对齐 */
    z-index: 100;
    text-shadow:5px 5px 10px #fff;
    /* 将导航栏设置为最上层 */
}

/* 设置导航栏Logo的样式 */
.logo {
    font-size: 25px;
    /* 设置字体大小 */
    color: #fff;
    /* 设置字体颜色 */
    text-decoration: none;
    /* 取消下划线 */
    font-weight: 600;

    /* 设置字体粗细 */
    cursor: default;
    /* 设置鼠标样式为默认 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: slideRight 1s ease forwards;
    /* 设置动画效果 */
}
 /* 设置导航栏链接的样式 */
 .navbar .item {
    display: inline-block;
    box-sizing: border-box;
    /* 将链接设置为块级元素 */
    font-size: 18px;
    /* 设置字体大小 */
    color: #fff;
    /* 设置字体颜色 */
    text-decoration: none;
    /* 取消下划线 */
    font-weight: 500;
    /* 设置字体粗细 */
    opacity: 0;
    /* 设置初始透明度为0 */
    transition: 0.3s;
    margin: 35px;
    /* 设置过渡效果 */
    animation: slideTop 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: calc(.2S * var(--i));
    /* 设置动画延迟时间 */
}
/* 设置导航栏链接的鼠标悬停和点击样式 */
.navbar a:hover,
.navbar a:active {
    color: #b7b2a9;
    /* 设置字体颜色 */
}
.me{
    position: relative;
}
.showMeBox{
    position: absolute;
    top: 150px;
    right: 0px; 
    display: none;
}
.me:hover .showMeBox{
    display: block;
    animation: cardLeft 3s ease-in-out;
}
.me:not(:hover) .showMeBox {
    display: none;  
    animation: cardRight 3s ease-in-out;
  }
</style>