<template>
  <el-row class="header-row">
    <el-col :span="4">
      <div class="header-logo">
        <router-link :to="{ name: 'home' }" class="header-logo_link">MovieFinder</router-link>
      </div>
    </el-col>
    <el-col :span="16" class="header-col">
      <el-row :gutter="10" class="header-row">
        <el-col :span="12">
          <div class="header-col">
            <el-autocomplete
                v-model="movieSearch.query.s"
                :fetch-suggestions="querySearch"
                clearable
                placeholder="Search"
                @select="handleSelect"
                size="large"
                class="header-input"
            >
             <template v-slot:prepend>
               <el-button :icon="Search" circle @click="handleSearch" />
             </template>
            </el-autocomplete>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="header-col">
            <el-date-picker
                v-model="year"
                type="year"
                placeholder="Pick a year"
                size="large"
                class="header-input"
            />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="header-col">
            <el-select v-model="movieSearch.query.type" placeholder="Type" size="large" class="header-input" clearable>
              <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </div>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="4">
      <div class="header-actions">
<!--        @TODO Add create movie-->
        <el-button type="success" @click="router.push({ name: 'search' })">+ Add</el-button>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import {ref} from "vue";
import router from "@/router";
import {useMovieSearchStore} from "@/store/modules/movie-search";
import {typeOptions} from "@/store/models/Movie";
import {Search} from '@element-plus/icons-vue'

const year = ref('');

const movieSearch = useMovieSearchStore();

const querySearch = async (queryString: string, cb: any) => {
  movieSearch.query.s = queryString;
  await movieSearch.search();

  const list = movieSearch.data.items.map((movie) => ({value: movie.title, id: movie.imdbID}))
  cb(list)
}

const handleSelect = (data: { value: string, id: string }) => {
  router.push('/movie/' + data.id)
}

const handleSearch = () => {
  const qYear = year.value ? new Date(year.value).getFullYear() : null;
  movieSearch.query.y = qYear

  movieSearch.query.page = 1
  router.push({
    name: 'search',
    query: {
      s: movieSearch.query.s,
      y: qYear,
      type: movieSearch.query.type,
    }
  })
}

</script>
<style>
.header-logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-logo_link {
  font-size: var(--el-font-size-extra-large)
}

.header-actions {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: end;
}

.header-row {
  height: 100%;
  width: 100%;
}

.header-col {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}

.header-input {
  width: 100% !important;
}

</style>