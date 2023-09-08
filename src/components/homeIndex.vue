<template>
    <div class="indexBody">
        <div v-if="showHeader">
            <indexHeader></indexHeader>
        </div>
        <div class="indexContent">
            <el-container class="elContent">
                <el-aside width="300px">
                    <indexLeft></indexLeft>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
              </el-container>
        </div>
    </div>
</template>

<script setup>
 import indexHeader from './indexHeader.vue';
 import indexLeft from './indexLeft.vue'
 const {showHeader} = defineProps({
    showHeader:{
        type:Boolean
    }
 })
</script>

<style  scoped>
.indexBody{
    height: 100%;
}
.indexContent{
    height: calc(100% - 100px);
    position: relative;
    top: 100px;
}
.elContent{
    height: 100%;
    color: black;
}
.el-main{
    padding-top: 0px;
    overflow-x: hidden;
}
.el-main::-webkit-scrollbar {  
    display: none;/* 隐藏滚动条 */  
  }
</style>