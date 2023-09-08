<template>
    <div class="articleCard" v-for="(item,index) in showData" :key="item.id">
        <div class="cardLeft">
            <div class="Title">
                {{ item.title }}
            </div>
            <div class="Description">
                {{ item.description }}
            </div>
            <div class="Information">
                <div class="Information-left">
                    <div class="time">
                       {{ item.time }}
                    </div>
                    <el-divider direction="vertical" />
                    <div class="look">
                        <el-icon>
                            <View />
                        </el-icon>
                       {{ item.lookCount }}
                    </div>
                    <div class="love">
                        <clickLove @multiplyLove="multiplyLoveCount(index)" @addLove="addLoveCount(index)"  :loveCount="item.loveCount"></clickLove>
                    </div>
                    <div class="pingLun">
                        <el-icon>
                            <ChatDotSquare />
                        </el-icon>
                        {{ item.pingLunCount }}
                    </div>
                </div>
                <div class="Information-right">
                    <div class="informationBox" v-for="inforBox in item.informationArr" :key="inforBox">
                       {{ inforBox.information }}
                    </div>
                </div>

            </div>

        </div>
        <div class="cardImg">
            <img :src="item.imgSrc"
                alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import clickLove from '@/myComponents/clickLove.vue'
const showData =ref([{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:18,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    }],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
},
{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:19,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    }],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
},
{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:20,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    }],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
},
{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:20,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    }],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
},
{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:20,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    }],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
},{
    id:1,
    title:'一些bug遇到的坑!!!',
    description:' 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑',
    time:'1月前',
    lookCount:'1.3k',
    loveCount:20,
    pingLunCount:1,
    informationArr:[{
        information:' 前端开发与css'
    },
{
    information:'JavaScript'
}],
    imgSrc:'https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp'
}])

const addLoveCount =(index)=>{
    // console.log('点赞+1');
    showData.value[index].loveCount =showData.value[index].loveCount  + 1
}
const multiplyLoveCount =(index)=>{
    // console.log('点赞-1');
    showData.value[index].loveCount =showData.value[index].loveCount  - 1
}
</script>

<style lang="less" scoped>
.articleCard {
    background-color: #fff;
    height: 120px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e4e6eb;

    .cardLeft {
        width: calc(100% - 90px);
        display: flex;
        flex-direction: column;
        align-items: center;

        >div {
            padding: 5px;
            margin-left: 15px;
        }

        .Title {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #000;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .Description {
            height: 22px;
            font-weight: 600;
            font-size: 13px;
            line-height: 22px;
            color: #8A919F;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .Information {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .Information-left {
                display: flex;
                align-items: center;

                .time,
                .love,
                .look,
                .pingLun {
                    width: 80px;
                    display: flex;
                    align-items: center;
                }
            }

            .Information-right {
                display: flex;

                .informationBox {
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    background-color: #f2f3f5;
                    color: #8A919F;
                    border-radius: 2px;
                    max-width: 76px;
                    box-sizing: border-box;
                    min-height: 18px;
                    line-height: 18px;
                    white-space: nowrap;
                    margin: 5px;
                }
            }
        }
    }

    .cardImg {
        height: 60px;
        margin: 10px;
        width: 100px;
        margin-left: 20px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}


</style>