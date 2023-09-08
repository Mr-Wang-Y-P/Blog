<template>
    <div class="articleCard">
        <div class="cardLeft">
            <div class="Title">
                一些bug遇到的坑
            </div>
            <div class="Description">
                一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑 一些bug遇到的坑
            </div>
            <div class="Information">
                <div class="Information-left">
                    <div class="time">
                        1月前
                    </div>
                    <el-divider direction="vertical" />
                    <div class="look">
                        1.3k
                    </div>
                    <div class="love">
                        9
                    </div>
                    <div class="pingLun">
                        1
                    </div>
                </div>
                <div class="Information-right">
                    <div class="informationBox">
                        前端开发与css
                    </div>
                </div>

            </div>

        </div>
        <div class="cardImg">
            <img src="https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/dc671aba89249f8727cc06da6152f74d.png!mfit_w2048_h2048_jpg_webp" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.articleCard {
    margin-top: 20px;
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
            .Information-left{
                display: flex;
            }
            .Information-right {
                display: flex;

                .informationBox {
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
                }
            }
        }
    }

    .cardImg {
        height: 60px;
        margin: 10px;
        width: 100px;
        margin-left: 20px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}</style>