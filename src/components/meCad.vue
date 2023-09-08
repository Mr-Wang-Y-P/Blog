<template>
    <div class="box">
        <div class="card">
            <div class="imgBox">
                <img src="https://gitee.com/unfortunately-there-is-no-if/img/raw/master/Image/5d18eb25e3c888b7f3bc19ec8e459af5~100x100.awebp" alt="">
            </div>
            <div class="content">
                <div class="details">
                    <div class="group">
                            <h4>所在地区:&nbsp;<span>江西省南昌市</span></h4>
                            <h4>社交网络:&nbsp;<span><a href="https://juejin.cn/user/4341314038804935"><img src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg" alt="gold" class="icon source-icon" data-v-96420278=""></a></span></h4>
                            <h4>个人介绍:&nbsp;<span>一名喜欢听音乐的程序员</span></h4>
                        </div>
                    <div class="data">
                        <div>
                            <h3>14 <br><span>动态</span></h3>
                        </div>
                        <span style="border:solid 0.1px #555;"></span>
                        <div>
                            <h3>33 <br><span>关注</span></h3>
                        </div>
                        <span style="border:solid 1px #555;"></span>
                        <div>
                            <h3>10 <br><span>粉丝</span></h3>
                        </div>
                    </div>
                    <div class="Btn">
                        <button>+关注</button>
                        <button><span><svg t="1683123965373" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2236" width="200" height="200"><path d="M887.808 841.04533332H129.024c-35.84 0-65.024-29.184-65.024-65.024V219.98933332c0-35.84 29.184-65.024 65.024-65.024h759.296c35.84 0 65.024 29.184 65.024 65.024v556.032c-0.512 35.84-29.696 65.024-65.536 65.024zM129.024 206.16533332c-7.68 0-13.824 6.144-13.824 13.824v556.032c0 7.68 6.144 13.824 13.824 13.824h759.296c7.68 0 13.824-6.144 13.824-13.824V219.98933332c0-7.68-6.144-13.824-13.824-13.824H129.024z" fill="#000000" p-id="2237"></path><path d="M486.912 555.86133332L203.264 272.21333332c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0l283.648 283.648c10.24 10.24 10.24 26.112 0 36.352-10.24 9.728-26.624 9.728-36.352 0z" fill="#000000" p-id="2238"></path><path d="M813.568 271.18933332l-283.648 283.648c-10.24 10.24-26.112 10.24-36.352 0s-10.24-26.112 0-36.352l283.648-283.648c10.24-10.24 26.112-10.24 36.352 0 9.728 10.24 9.728 26.624 0 36.352z" fill="#000000" p-id="2239"></path></svg></span> <span>私信</span> </button>
                    </div>
                </div>
            </div>
    </div>
    
    </div>
</template>

<script setup>

</script>

<style scoped>
.box{
    font-size:16px
}
.card {
    background-image: url(https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/2242c60f0b0127977f5f543841940b40.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_960%2ch_540);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    width: 20em;
    height: 13em;
    /* background: #fff; */
    border-radius: 1.5em;
    box-shadow: 0 2em 5em rgba(0, 0, 0, 0.15);
    transition: 1.25s;
    color: white;
}

/*.card:hover {
    height: 28em;
    background-image: url(https://wallpaper-static.cheetahfun.com/wallpaper/sites/mobile/statics/anime/1.jpg);
}*/

.imgBox {
    position: absolute;
    left: 50%;
    top: -5em;
    transform: translateX(-50%);
    width: 9em;
    height: 9em;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1em 5em rgba(0, 0, 0, 0.35);
    overflow: hidden;
    transition: 1.25s;
}
/*
.card:hover .imgBox {
    width: 14em;
    height: 14em;
    border-radius: 1.5em;
}*/

.imgBox img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}

.card .content .details {
    padding: 2em;
    text-align: center;
    width: 100%;
    transition: 1.25s;
    transform: translateY(12em);
}
.card .content .details .group{
    text-align: left;
    color: #fff;
}
.card .content .details .group h4{
    padding-bottom: 0.25em;
 }
 .card .content .details .group h4 img{
   position: relative;
   top: 2px;
 }
.card .content .details .group span{
   
    opacity: 0.5;
 }
.card .content .details .group a img{
    width: 1em;
    height: 1em;
 }
 /*
.card:hover .content .details {
    padding: 2em;
    text-align: center;
    width: 100%;
    transition: 1.25s;
    transform: translateY(1em);
    
}*/

.card .content .details h2 {
    font-size: 1.25em;
    font-weight: 600;
    color: #fff;
    line-height: 1.2em;
}


.card .content .details h2 span {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
}
.card .content .details .data{
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0;
   
}

.card .content .details .data h3{
    font-size: 1em;
    color: #fff;
    line-height: 1.2em;
    font-weight: 600;
}
.card .content .details .data h3 span{
    font-size: 0.85em;
    font-weight: 400;
    opacity: 0.5;
}
.card .content .details .Btn button svg{
    text-align: center;
    width:  1em;
    height: 1em;
}
.card .content .details .Btn{
    width: 16em;
   display: flex;
   justify-content: space-between;
}
.card .content .details .Btn button{
    padding: 0.75em 2.25em;
    border-radius: 0.75em;
    border: none;
    outline: none;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
}

.card .content .details .Btn button:hover{
 background: linear-gradient(45deg, #fbda61, #ff5acd)
}
</style>