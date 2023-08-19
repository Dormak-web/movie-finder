<template>
  <page-layout
      :title="title"
      max-width="800"
      @pre-on-back="emit('preOnBack');"
  >
    <template v-if="slots.extra" #extra>
      <slot name="extra"/>
    </template>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="12">
          <slot name="poster"/>
        </el-col>
        <el-col :span="12">
          <div class="movie-info">
            <slot name="content"/>

          </div>
        </el-col>
      </el-row>
    </div>
  </page-layout>
</template>
<script lang="ts" setup>
import PageLayout from "@/components/PageLayout.vue";
import {defineEmits, defineProps, defineSlots} from "vue";

const props = defineProps({
  title: String || '',
})

const emit = defineEmits(['preOnBack'])
const slots = defineSlots();


</script>
<style scoped>
.movie-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>