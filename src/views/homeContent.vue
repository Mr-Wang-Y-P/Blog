<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
    <div ref="homeBody" class="homeBody">

        <section id="content1" class="home section" ref="content1">
            <!-- 主页内容 -->
            <div class="home-content">
                <!-- 主页标题 -->
                <h3>Hello,It's Me</h3>
                <h1>Welcome To Know Me!</h1>
                <!-- 主页小标题 -->
                <h3>个人介绍
                    <!-- 小标题下的文本 -->
                    <span class="text" ref="text">
                    </span>
                </h3>
                <!-- 主页正文 -->
                <p>越努力，越幸运！！！Lucky!</p>
                <!-- 社交媒体链接 -->
                <div class="social-media">
                    <!-- 社交媒体链接1 -->
                    <a class="item" href="#" style="--i:7"><i class="bx bxl-tiktok"></i></a>
                    <!-- 社交媒体链接2 -->
                    <a class="item" href="#" style="--i:8"><i class="bx bxl-facebook-circle"></i></a>
                    <!-- 社交媒体链接3 -->
                    <a class="item" href="#" style="--i:9"><i class="bx bxl-google"></i></a>
                    <!-- 社交媒体链接4 -->
                    <a class="item" href="#" style="--i:10"><i class="bx bxl-linkedin-square"></i></a>
                </div>
                <!-- 主页按钮 -->
                <a href="#" class="btn">Learn More</a>
            </div>
            <!-- 主页图片 -->
            <div class="home-img">
                <img src="https://img.wxcha.com/m00/54/ed/69d26be4a4ac700e27c2d9cf85472b8c.jpg" alt="">
            </div>

        </section>
        <section id="content2" class="home2 section" ref="content2">
            <homeIndex :showHeader="showHeader"></homeIndex>
        </section>
        <div v-if="!isShow" class="arrowSS">
            <a @click="scrollBottom" href="#content2" class="arrowSS_style"></a>
        </div>
        <div v-else class="arrowSS1">
            <a @click="scrollTop" href="#content1" class="arrowSS_style1"></a>
        </div>
    </div>
</template>

<script setup>
  import homeIndex from '../components/homeIndex.vue';
import { ref, onMounted} from 'vue'
// eslint-disable-next-line no-unused-vars
import { main } from '../assets/js/dayinji';
// eslint-disable-next-line no-unused-vars
const str = ['你好 ,我是一名刚入坑不久的大四在校生。', '现在学习都是为了将来的工作。', '希望能够得到大家的鼓励，谢谢！', '成功者和失败者最大的区别在于面对失败时的态度。', '成功者从失败中寻找机会，而失败者则放弃。', '生活不会一直顺利，有时候会跌倒，但重要的是能够站起来。', '跌倒并不可怕，可怕的是不再尝试。']
const text = ref(null);
const isShow = ref(false)
const homeBody = ref(null)
const content1 = ref(null)
const content2 = ref(null)
const showHeader = ref(false)

onMounted(() => {
    homeBody.value.addEventListener('scroll', () => {
        const scrollTop  = homeBody.value.scrollTop
        const Top1 = content1.value.offsetTop
        const Top2 = content2.value.offsetTop
        const Height1 = content1.value.offsetHeight
        const Height2 = content2.value.offsetHeight
        // 第一个区域
        // console.log(scrollTop);
        if(scrollTop >= Top1 &&  scrollTop < Top1 + Height1 -500){
            isShow.value =false
        }
        // 第二个区域
        if(scrollTop >= Top2 - 500 &&  scrollTop < Top2 + Height2){
            isShow.value =true
        }
        // 父子组件传参 是否显示头部header
        if(scrollTop > Top1 + Height1 - 100){
            showHeader.value = true
        }
        else{
            showHeader.value = false
        }
    })
    main(str, text.value, 200)
})
// onUnmounted(()=>{
//     homeBody.value.removeEventListener('scroll', ()=>{
//         console.log('去除监听事件');
//     });
// })
const scrollBottom = () => {
    homeBody.value.scrollTo({
        top: content2.value.offsetTop,
        behavior: 'smooth'
    });

}
const scrollTop = () => {
    if(homeBody.value){
        homeBody.value.scrollTo({
        top: content1.value.offsetTop,
        behavior: 'smooth'
    });
    }
   
} 
</script>

<style  scoped>
/* 设置首页的样式 */
.homeBody{
    height: 100vh;
    overflow: auto;
    scroll-behavior: smooth;
}
.homeBody::-webkit-scrollbar {  
    display: none;/* 隐藏滚动条 */  
}
.home {
    position: relative;
    /* 设置为相对定位，用于子元素定位 */
    width: 100%;
    height: 100%;
    /* 设置高度为视口高度 */
    display: flex;
    /* 将子元素设置为flex布局 */
    justify-content: space-between;
    /* 将子元素分散对齐 */
    align-items: center;
    /* 将子元素垂直居中对齐 */
    padding: 0 50px;
    box-sizing: border-box;
    /* 设置内边距 */
}

/* 设置首页内容的样式 */
.home-content {
    max-width: 1200px;
    /* 设置最大宽度 */
}

/* 设置首页标题的样式 */
.home-content h3 {
    font-size: 32px;
    /* 设置字体大小 */
    font-weight: 700;
    /* 设置字体粗细 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: slideBottom 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: .7s;
    /* 设置动画延迟时间 */
}


/* 设置首页标题中的颜色 */
.home-content h3 span {
    color: #b7b2a9;
}

.text {
    /* 添加光标效果 */
    border-right: 2px solid white;
    /* 添加光标闪烁效果 */
    animation: blink 0.5s step-end infinite;
}

/* 设置首页内容标题的样式 */
.home-content h3:nth-of-type(2) {
    margin-bottom: 30px;
    /* 设置下方间距 */
    animation: slideTop 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: .7s;
    /* 设置动画延迟时间 */
}

/* 设置首页内容主标题的样式 */
.home-content h1 {
    font-size: 56px;
    /* 设置字体大小 */
    font-weight: 700;
    /* 设置字体粗细 */
    margin: -3px 0;
    /* 设置上下间距 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: slideRight 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: 1s;
    /* 设置动画延迟时间 */
}

/* 设置首页内容段落的样式 */
.home-content p {
    font-size: 18px;
    /* 设置字体大小 */
    animation: slideLeft 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: .7s;
    /* 设置动画延迟时间 */
}

/* 设置首页图片的样式 */
.home-img img {
    max-width: 450px;
    /* 设置最大宽度 */
    border-radius: 50%;
    /* 设置圆角 */
    margin-right: 20px;
    /* 设置右侧间距 */
    box-shadow: 0 0 20px #b7b2a9;
    /* 设置阴影效果 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: zoomIn 1s ease forwards, floatImg 4s ease-in-out infinite;
    /* 设置动画效果 */
    animation-delay: 2s 3s;
    /* 设置动画延迟时间 */
}
.social-media{
    margin-top: 40px;
}
.social-media .item i{
    padding-left: 10px;
}
/* 设置社交媒体图标的样式 */
.social-media a {
    display: inline-flex;
    /* 将链接设置为flex布局 */
    justify-content: center;
    /* 将子元素水平居中对齐 */
    align-items: center;
    /* 将子元素垂直居中对齐 */
    width: 40px;
    /* 设置宽度 */
    height: 40px;
    /* 设置高度 */
    background: transparent;
    /* 设置背景为透明 */
    border: 2px solid #b7b2a9;
    /* 设置边框样式 */
    color: #b7b2a9;
    /* 设置字体颜色 */
    text-decoration: none;
    /* 取消下划线 */
    font-size: 20px;
    /* 设置字体大小 */
    margin: 30px 15px 30px 0;
    /* 设置外边距 */
    transition: 0.5s ease;
    /* 设置过渡效果 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: slideLeft 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: calc(0.2s * var(--i));
    /* 设置动画延迟时间 */
}



/* 设置社交媒体图标的鼠标悬停样式 */
.social-media a:hover {
    background: #b7b2a9;
    /* 设置背景颜色 */
    color: #1f252d;
    /* 设置字体颜色 */
    box-shadow: 0 0 20px #b7b2a9;
    /* 设置阴影效果 */
}


/* 设置按钮的样式 */
.btn {
    display: inline-block;
    /* 将按钮设置为块级元素 */
    padding: 12px 28px;
    /* 设置内边距 */
    background: #b7b2a9;
    /* 设置背景颜色 */
    text-decoration: none;
    /* 取消下划线 */
    border-radius: 40px;
    /* 设置边框圆角 */
    box-shadow: 0 0 10px #b7b2a9;
    /* 设置阴影效果 */
    font-size: 16px;
    /* 设置字体大小 */
    color: #1f252d;
    /* 设置字体颜色 */
    letter-spacing: 1px;
    /* 设置字间距 */
    font-weight: 600;
    /* 设置字体粗细 */
    transition: 0.5s ease;
    /* 设置过渡效果 */
    opacity: 0;
    /* 设置初始透明度为0 */
    animation: slideTop 1s ease forwards;
    /* 设置动画效果 */
    animation-delay: 2s;
    /* 设置动画延迟时间 */
}

.arrowSS {
    position: fixed;
    bottom: 40px;
    left: 50%;
    cursor: pointer;
    transform: translateX(-50%);
    animation: bounce-inSS 2s infinite;
    /* 启动动画特效 */
}

.arrowSS1 {
    position: fixed;
    bottom: 40px;
    left: 50%;
    cursor: pointer;
    transform: translateX(-50%);
    animation: bounce-inSS 2s infinite;
    /* 启动动画特效 */
}

/* 箭头效果的盒子 */
.arrowSS_style {
    display: block;
    margin: 0 auto;
    width: 25px;
    height: 25px;
    border-right: 3px solid #6ba6c0;
    border-top: 3px solid #6ba6c0;
    -webkit-transform: rotate(135deg);
    /* 箭头方向可以自由切换角度 */
    transform: rotate(135deg);
    cursor: pointer;
}

.arrowSS_style1 {
    display: block;
    margin: 0 auto;
    width: 25px;
    height: 25px;
    border-right: 3px solid #6ba6c0;
    border-top: 3px solid #6ba6c0;
    -webkit-transform: rotate(-45deg);
    /* 箭头方向可以自由切换角度 */
    transform: rotate(-45deg);
    cursor: pointer;
}

.home2 {
    background-color: #fff;
    width: 100%;
    height: 100%;
}</style>