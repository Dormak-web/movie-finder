<template>
  <div class="container">
    <el-card class="content" :style="maxWidth ? {maxWidth: maxWidth + 'px'} : {}">
      <template #header>
        <el-page-header :icon="ArrowLeft" @back="handleOnBack">
          <template #content>
            <span class="text-large font-600 mr-3">
              <view-text :text="props.title"/>
            </span>
          </template>
          <template v-if="slots.extra" #extra>
            <slot name="extra"/>
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
import {defineProps, defineEmits, defineSlots} from "vue";
import ViewText from "@/components/ViewText.vue";
import router from "@/router";

const props = defineProps({
  title: String || '',
  maxWidth: String || Number,
})

const emit = defineEmits(['preOnBack'])
const slots = defineSlots();

const handleOnBack = () => {
  emit("preOnBack");
  router.go(-1);
}

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
