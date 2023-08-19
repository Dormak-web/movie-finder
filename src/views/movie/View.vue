<template>
  <movie-layout :title="movie.data.title || ''" @pre-on-back="onClear">
    <template #poster>
      <el-image :src="movie.data.poster" class="image" fit="cover">
        <template #error>
          <el-empty :image-size="80" description=" "/>
        </template>
      </el-image>
    </template>

    <template #content>
      <div>
        <el-text size="large">
          Director:
        </el-text>
        <el-text>
          {{movie.data.director}}
        </el-text>
      </div>
      <div>
        <el-text size="large">
          Year:
        </el-text>
        <el-text>
          {{movie.data.year}}
        </el-text>
      </div>
      <div>
        <el-text size="large">
          Rated:
        </el-text>
        <el-text>
          {{movie.data.rated}}
        </el-text>
      </div>
      <div>
        <el-text size="large">
          Language:
        </el-text>
        <el-text>
          {{movie.data.language}}
        </el-text>
      </div>
    </template>
  </movie-layout>
</template>
<script lang="ts" setup>
import {onMounted} from "vue";
import {useMovieStore} from "@/store/modules/movie";
import {useRoute} from "vue-router";
import MovieLayout from "@/components/MovieLayout.vue";

const route = useRoute();
const movie = useMovieStore()

onMounted(() => {
  movie.query = {i: route.params.id || ''};

  movie.view();
})

const onClear = () => {
  movie.clear();
}
</script>
<style scoped>
.image {
  width: 100%;
}
</style>