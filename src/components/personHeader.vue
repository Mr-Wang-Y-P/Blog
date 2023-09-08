<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
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

  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('1')

  </script>
<style scoped>
.el-menu--horizontal>.el-menu-item {
    width: 150px;
}
</style>