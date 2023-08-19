<template>
  <page-layout title="Search" max-width="1600">
    <div>
      <h1>Total: {{ total }}</h1>
      <el-divider/>

      <el-carousel
          @change="onChange"
          indicator-position="outside"
          trigger="click"
          class="carousel"
          height="950px"
          :autoplay="false"
          ref="carousel"
      >
        <el-carousel-item v-for="(items, index) in pages" :key="index">
          <div class="d-grid">
            <div v-for="item in items" :key="item.imdbID">
              <search-movie-card  :movie="item"/>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

    </div>
  </page-layout>
</template>

<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
import {useRoute} from "vue-router";
import {onMounted, Ref, ref, watch} from "vue";
import {useMovieSearchStore} from "@/store/modules/movie-search";
import {IMovie, Movie} from "@/store/models/movie";
import SearchMovieCard from "@/components/Search/SearchMovieCard.vue";

const route = useRoute();
const movieSearch = useMovieSearchStore();
const pages: Ref<Array<Array<IMovie | Movie>>> = ref([]);
const total = ref(0);

const carousel = ref<HTMLInputElement | undefined>();

const getPage = async () => {
  await movieSearch.search();
  let newItems: Array<IMovie> = [];

  movieSearch.data.items.map((movie: IMovie) => newItems.push(movie));
  if(newItems.length > 0) {
    pages.value.push(newItems);
  }
}

const getNextPage = async () => {
  if (movieSearch.query.page) {
    movieSearch.query.page++
  } else {
    movieSearch.query.page = 2;
  }
  await getPage();
}

const onChange = async (index: number) => {
  if (index == pages.value.length - 1) {
    await getNextPage();

    if(!carousel.value) return
    if(movieSearch.data.items.length > 0){
      carousel.value.setActiveItem(pages.value.length - 2);
    } else {
      carousel.value.setActiveItem(pages.value.length - 1);
    }
  }
}

watch(
    () => route.query,
    () => {
      onSearch();
    }
)

const onSearch = async () => {
  pages.value = [];
  await getPage();
  total.value = movieSearch.data.totalResults;
  await getNextPage();
}

onMounted(() => {
  movieSearch.query = route.query;
  onSearch();
})

</script>

<style scoped>
.d-grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
}
</style>