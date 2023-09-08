<template>
  <div class="header">
    <div class="Nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="1">点赞</el-menu-item>
        <el-sub-menu index="2">
          <template #title>文章</template>
          <el-menu-item index="2-1">CSS</el-menu-item>
          <el-menu-item index="2-2">JS</el-menu-item>
          <el-menu-item index="2-3">小程序</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">沸点</el-menu-item>
        <el-menu-item index="4">收藏集</el-menu-item> 
      </el-menu>
    </div>
   <div class="search">
    <el-input v-model="input" class="w-50 m-2" placeholder="Please Input" :suffix-icon="Search" />
   </div>
  </div>
  
   
 
</template>
  
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const activeIndex = ref('1')
const input = ref('')
</script>
<style scoped>
.el-menu--horizontal>.el-menu-item {
  width: 150px;
}
.header{
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.search{
  min-width: 110px;
  margin-right: 20px;
}
</style>