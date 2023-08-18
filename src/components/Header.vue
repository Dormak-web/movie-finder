<template>
  <el-row class="row">
    <el-col :span="4">
      <div class="logo">
        <router-link :to="{ name: 'home' }" class="logo_link">MovieFinder</router-link>
      </div>
    </el-col>
    <el-col :span="16" class="col">
      <el-row :gutter="10" class="row">
        <el-col :span="12">
          <div class="col">
            <el-autocomplete
                v-model="search"
                :fetch-suggestions="querySearch"
                clearable
                placeholder="Search"
                @select="handleSelect"
                size="large"
                class="input"
            >
             <template v-slot:prepend>
               <el-button :icon="Search" circle @click="handleSearch" />
             </template>
            </el-autocomplete>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="col">
            <el-date-picker
                v-model="year"
                type="year"
                placeholder="Pick a year"
                size="large"
                class="input"
            />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="col">
            <el-select v-model="type" placeholder="Type" size="large" class="input">
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
      <div class="actions">
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
import {typeOptions} from "@/store/models/movie";
import {Search} from '@element-plus/icons-vue'

// @TODO move to store ?
const search = ref('');
const year = ref('');
const type = ref('');

const movieSearch = useMovieSearchStore();

const querySearch = async (queryString: string, cb: any) => {
  await movieSearch.search({s: queryString});

  const list = movieSearch.data.items.map((movie) => ({value: movie.title, id: movie.imdbID}))
  cb(list)
}

const handleSelect = (data: { value: string, id: string }) => {
  router.push('/movie/' + data.id)
}

const handleSearch = () => {
  router.push({
    name: 'search',
    query: {
      s: search.value,
      y: new Date(year.value).getFullYear(),
      type: type.value
    }
  })
}

</script>
<style>
.logo {
  display: flex;
  align-items: center;
  height: 100%;
}

.logo_link {
  font-size: var(--el-font-size-extra-large)
}

.actions {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: end;
}

.row {
  height: 100%;
  width: 100%;
}

.col {
  display: flex;
  align-items: center;
  height: 100%;
}

.input {
  width: 100%;
}

</style>