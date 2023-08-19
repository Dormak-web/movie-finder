<template>
  <div class="container">
    <el-card class="content" :style="maxWidth ? {maxWidth: maxWidth + 'px'} : {}">
      <template #header>
        <el-page-header :icon="ArrowLeft">
          <template #content>
            <span class="text-large font-600 mr-3" v-text="props.title"/>
          </template>
        </el-page-header>
      </template>
      <div>
        <slot/>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import {ArrowLeft} from '@element-plus/icons-vue'
import {defineProps} from "vue";

const props = defineProps({title: String, maxWidth: Number})
</script>
<style scoped>
.container {
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
}
.content {
  width: 100%;
}
</style>
