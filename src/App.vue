<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
        <el-divider />
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>