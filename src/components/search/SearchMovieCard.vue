<template>
  <el-card @click="router.push({name: 'movie.view', params: {id: movie?.imdbID}})" shadow="hover" style="cursor: pointer">
    <div class="container">

      <el-image :src="movie?.poster" class="image" fit="cover">
        <template #error>
          <el-empty image-size="80" description=" "/>
        </template>
      </el-image>

      <div class="poster-info">
        <span v-text="movie?.title"></span>
        <div class="bottom">
          <time class="time" v-text="movie?.year"></time>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import {defineProps} from "vue/dist/vue";
import router from "@/router";
import {Movie} from "@/store/models/Movie";

const props = defineProps({
  movie: Movie,
})


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 400px;
}

.poster-info {
  width: 100%;
  padding: 10px 0;
  background: rgba(0,0,0, .75);
  position: absolute;
  bottom: 0;

  text-align: center;

  color: #fff;
}

.image {
  height: 100%;
}
</style>