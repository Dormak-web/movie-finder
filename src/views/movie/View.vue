<template>
  <page-layout
      :title="movie.data.title || ''" max-width="800"
      @pre-on-back="onClear"
  >
    <div class="content">
      <el-row gutter="20">
        <el-col :span="12">
          <el-image :src="movie.data.poster" class="image" fit="cover">
            <template #error>
              <el-empty image-size="80" description=" "/>
            </template>
          </el-image>
        </el-col>
        <el-col :span="12">
          <div class="movie-info">
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
          </div>
        </el-col>
      </el-row>
    </div>
  </page-layout>
</template>
<script lang="ts" setup>
import PageLayout from "@/components/PageLayout.vue";
import {onMounted} from "vue";
import {useMovieStore} from "@/store/modules/movie";
import {useRoute} from "vue-router";

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
.movie-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>