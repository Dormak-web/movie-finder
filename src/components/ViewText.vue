<template>
  <div v-if="text">
    {{text}}
  </div>
  <div v-else>
    <span>---</span>
  </div>
</template>
<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({text: String})
</script>