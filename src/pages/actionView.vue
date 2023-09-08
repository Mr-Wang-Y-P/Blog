<template>
  <!-- 最外层的盒子 -->
  <div ref="outerBox" class="outerBox">
      <div v-for="(item, index) in actions" :key="item.id" :class="index % 2 === 0 ? 'dateBox' : 'dateLeftBox'"
      :style="{ top: showDaysArray[index] + 'px' }">
      <h2>
        {{ item.time }}
      </h2>
      <div>
        <p>
          {{ item.title }}
        </p>
        <ul>
          <li v-for="des in item.description" :key="des">
            {{ des.des }}
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>
<style scoped>
.outerBox {
  /* 竖线样式 高度根据事件的多少调整*/
  width: 5px;
  background: rgb(221, 221, 221);
  margin: 40px auto;
  position: relative;
  -webkit-animation: heightSlide 2s linear;
}

@-webkit-keyframes heightSlide {

  /* 竖线的动画效果：以百分比来规定改变发生的时间，0% 是动画的开始时间，100% 动画的结束时间 */
  0% {
    height: 0;
  }

  100% {
    height: 900px;
  }
}

.outerBox:after {
  /* 竖线末尾文字样式 */
  /*content: "未完待续";*/
  width: 100px;
  color: rgb(84, 84, 85);
  position: absolute;
  margin-left: -48px;
  text-align: center;
  bottom: -30px;
  -webkit-animation: showIn 5.5s ease;
}

.outerBox .dateBox,
.outerBox .dateLeftBox {
  /* 球球的样式 */
  position: absolute;
  margin-left: -8px;
  margin-top: -10px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 4px solid rgb(221, 221, 221);
  background: rgb(31, 122, 252);
  -webkit-transition: all 0.5s;
  -webkit-animation: showIn ease;
}

.outerBox .dateBox:nth-child(1) {
  /* 第一个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 1s;
}

.outerBox .dateLeftBox:nth-child(2) {
  /* 第二个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 1.5s;
}

.outerBox .dateBox:nth-child(3) {
  /* 第三个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 2s;
}

.outerBox .dateLeftBox:nth-child(4) {
  /* 第四个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 2.5s;
}

.outerBox .dateBox:nth-child(5) {
  /* 第五个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 3s;
}

.outerBox .dateLeftBox:nth-child(6) {
  /* 第六个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 3.5s;
}

.outerBox .dateBox:nth-child(7) {
  /* 第七个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 4s;
}

.outerBox .dateLeftBox:nth-child(8) {
  /* 第八个事件 设置动画在几秒内完成 */
  -webkit-animation-duration: 4.5s;
}

@-webkit-keyframes showIn {

  /* 球球、竖线、左右的模块的动画 */
  0%,
  70% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.outerBox .dateBox h2,
.outerBox .dateLeftBox h2 {
  /* 日期的样式 */
  width: 100px;
  position: absolute;
  margin-left: -35px;
  margin-top: 14px;
  color: rgb(84, 84, 85);
  font-size: 14px;
  cursor: pointer;
  /* -webkit-animation: showIn 3s ease; */
}

.outerBox .dateLeftBox h2 {
  /* 右边日期的样式 */
  margin-left: -32px;
  width: 100px;
}

.outerBox .dateBox:hover,
.outerBox .dateLeftBox:hover {
  /* 触摸事件后球球的样式 */
  border: 4px solid rgb(195, 195, 195);
  background: rgb(143, 189, 253);
  box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.4);
}

.outerBox .dateBox div,
.outerBox .dateLeftBox div {
  /* 左右事件的样式 */
  position: absolute;
  top: 50%;
  margin-top: 0px;
  left: 70px;
  width: 200px;
  height: 30px;
  border: 2px solid rgb(84, 84, 85);
  border-radius: 6px;
  z-index: 2;
  overflow: hidden;
  cursor: pointer;
  /* -webkit-animation: showIn 5s ease; */
  -webkit-transition: all 0.5s;
}

.outerBox .dateLeftBox div {
  /* 左边事件的样式 */
  left: -250px;
}

.outerBox .dateBox div:hover,
.outerBox .dateLeftBox div:hover {
  /* 触摸事件后的高度 */
  height: 70px;
}

.outerBox .dateBox div p,
.outerBox .dateLeftBox div p {
  /* 左右事件的字体样式 */
  color: rgb(84, 84, 85);
  font-weight: bold;
  text-align: center;
  margin: 5px 0 0 0;
}

.Line:before {  
  content: '...';  
  writing-mode: vertical-rl;  
  text-orientation: upright; 
  position: absolute;
  top: -110px;
  left: 20px;
  font-size: 30px;
  color: red;
}

.outerBox .dateBox div ul,
.outerBox .dateLeftBox div ul {
  /* 左右事件触摸展开后内容的样式 */
  list-style: none;
  width: 200px;
  height: 30px;
  padding: 4px;
  border-top: 2px solid rgb(84, 84, 85);
  color: rgb(84, 84, 85);
  font-size: 14px;
  margin:5px 0 0 0;
  overflow-y: auto;
}
.outerBox .dateBox div ul::-webkit-scrollbar {  
  display: none;/* 隐藏滚动条 */  
}
.outerBox .dateLeftBox div ul::-webkit-scrollbar {  
  display: none;/* 隐藏滚动条 */  
}
</style>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const outerBox = ref(null)


const actions = reactive([
  {
    id: 1,
    time: '2022-12-31',
    title: '发生的事件',
    description: [
      {
      des:'事件的详细内1'
    },
    {
      des:'事件的详细内2'
    },
    {
      des:'事件的详细内3'
    }
  ]
  },
  {
    id: 2,
    time: '2023-01-07',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  },
  {
    id: 3,
    time: '2023-01-08',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  },
  {
    id: 4,
    time: '2022-06-08',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  }, {
    id: 5,
    time: '2023-09-05',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  },
  {
    id: 6,
    time: '2023-01-10',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  },
  {
    id: 7,
    time: '2023-01-13',
    title: '发生的事件',
    description: [{
      des:'事件的详细内'
    }]
  }
])
actions.sort((a, b) => Date.parse(a.time) - Date.parse(b.time));
console.log(actions);

onMounted(async() => {
  await getData()
  await drawLine()
})
// 计算相差天数
const getDaysBetween = (date1, date2) => {
  var startDate = Date.parse(date1);
  var endDate = Date.parse(date2);
  if (startDate > endDate) {
    return 0;
  }
  if (startDate == endDate) {
    return 1;
  }
  var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  return days;
}
// 表示 每一天间隔 最小的高度
const minHeight = 35
const daysArray = []
const showDaysArray = reactive( [0])
// const showDaysArray =
const minDate = actions[0].time;
// const maxDay = getDaysBetween(actions[0].time, actions[actions.length - 1].time)

const getData = async() => {
  actions.forEach((item) => {
    daysArray.push(getDaysBetween(minDate, item.time))
  })
  for (let i = 1; i <= actions.length - 1; i++) {
    // 间隔 时间超过30天 那么 就以三倍的最小高度间隔开
    if (daysArray[i] - daysArray[i - 1] > 30) {
      showDaysArray.push(showDaysArray[i - 1] + minHeight * 5);
      outerBox.value.children[i].classList.add('Line')
    }
    else {
      showDaysArray.push(showDaysArray[i - 1] + (daysArray[i] - daysArray[i - 1]) * minHeight)
    }
  }
}
 
const drawLine = ()=>{
  outerBox.value.style.height = showDaysArray[actions.length - 1] + 'px'
}
</script>