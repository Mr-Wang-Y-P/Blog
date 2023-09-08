<template>
    <div class="oper-item" @click="thumbsUp">
        <div class="heart" ref="heart">
            <svg ref="heart_icon" :style="heartStyle" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                    d="M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z"
                    p-id="2432"></path>
            </svg>
        </div>
        <span class="oper-text">{{ loveCount }}</span>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import mojs from '@mojs/core';

// 是否点赞
const hearted = ref(false);
// 点赞按钮
const heart = ref(null);
const heartP = ref(1);
const heartStyle = computed(() => {
    return {
        fill: `${hearted.value ? '#E05B5B' : ''}`,
        stroke: `${hearted.value ? '#E05B5B' : ''}`,
        transform: `scale3d(${heartP.value},${heartP.value},1)`
    }
})
// 红心本体
const heart_icon = ref(null);
// 扩散 
let burst
// 红色光圈
let aperture
// 弹跳
let bounce
const { loveCount } = defineProps({
    loveCount: Number
})
const addLove = () => {
    emits('addLove')
}
const multiplyLove = () => {
    emits('multiplyLove')
}
const emits = defineEmits(['addLove','multiplyLove'])
onMounted(() => {
    aperture = new mojs.Transit({
        parent: heart.value,
        duration: 750,
        type: 'circle',
        radius: { 0: 20 },
        fill: 'transparent',
        stroke: '#E05B5B',
        strokeWidth: { 20: 0 },
        opacity: 0.6,
        isRunLess: true,
        easing: mojs.easing.bezier(0, 1, 0.5, 1)
    })

    burst = new mojs.Burst({
        radius: { 0: 50 },
        parent: heart.value,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        // duration: 1500,
        delay: 300,
        children: {
            duration: 750,
            radius: { 0: 'rand(5, 25)' },
            shape: ['circle', 'rect', 'polygon'],
            fill: ['#1abc9c', '#2ecc71', '#00cec9', '#3498db', '#9b59b6', '#fdcb6e', '#f1c40f', '#e67e22', '#e74c3c', '#e84393'],
            degreeShift: 'rand(-90, 90)',
            delay: 'stagger(0, 40)',
        },
        opacity: 0.6,
        count: 10,
        onStart() {
            // 发送点赞请求
            hearted.value = true

        },
        onComplete() {

        }
    });
    bounce = new mojs.Tween({
        duration: 1200,
        onUpdate: function (progress) {
            if (progress > 0.3) {
                heartP.value = mojs.easing.elastic.out(1.43 * progress - 0.43);
                // heart_icon.value.style.transform = 'scale3d(' + elasticOutProgress + ',' + elasticOutProgress + ',1)';
            } else {
                heartP.value = 0
                // heart_icon.value.style.transform = 'scale3d(0,0,1)';
            }
        }
    })
})

// 点赞
function thumbsUp() {
    if (!hearted.value) {
        // 点赞
        new mojs.Timeline().add(burst, aperture, bounce).play();
        addLove()
    } else {
        // 取消赞
        hearted.value = false
        multiplyLove()
    }
}


</script>

<style scoped>
.oper-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    height: 24px;
    border-right: 1px solid rgba(#9A9DAA, .3);
    cursor: pointer;
}

.oper-item:last-child {
    border: none;
}

.oper-item i {
    color: #9A9DAA;
    font-size: 18px;
}

.oper-item .heart {
    height: 20px;
    position: relative;
    display: inline-block;
}

.oper-item .heart svg {
    transition: fill .3s, stroke .3s;
    stroke: #9A9DAA;
    stroke-width: 80px;
    fill: transparent;
}

.oper-item:hover .heart svg {
    stroke: #E05B5B;
}

.oper-text {
    margin-left: 12px;
    font-size: 13px;
    user-select: none;
}
</style>
