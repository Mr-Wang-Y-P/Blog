<template>
    <el-menu
      default-active="action"
      class="el-menu-vertical-demo"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <span>我的专栏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="">实习学习笔记</el-menu-item>
          <el-menu-item index="1-2">考题</el-menu-item>
        </el-menu-item-group>
          <el-menu-item index="1-3">小程序开发</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="article">
        <template #title>我的文章</template>
      </el-menu-item>
      <el-menu-item index="collection">
        <template #title>我的收藏</template>
      </el-menu-item>
      
      <el-menu-item index="action" default-active>
        <template #title>
            我的动态
        </template>
      </el-menu-item>
    </el-menu>
  </template>
  
  <script  setup>

  </script>
  
  <style scoped>

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
    height: 100%;
  }
  .el-menu-item{
    height: 80px;
    font-size: 16px;
  }
  .el-sub-menu__title span{
        font-size: 16px;
  }
  .item{
    text-decoration: none;
  }
  </style>
  