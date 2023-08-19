<template>
  <movie-layout title="Add movie">
    <template #poster>
      <el-upload
          ref="upload"
          class="avatar-uploader"
          action="#"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onChangeUpload"
      >
        <img v-if="posterUrl" :src="posterUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </template>

    <template #extra>
      <div class="flex items-center">
        <el-button @click="submitForm()" type="success" >Upload</el-button>
      </div>
    </template>

    <template #content>
      <el-form
          :model="movie.form"
          label-width="120px"
      >
        <el-form-item label="Title">
          <el-input
              v-model="movie.form.title"
              size="large"
          />
        </el-form-item>
        <el-form-item label="Director">
          <el-input
              v-model="movie.form.director"
              size="large"
          />
        </el-form-item>
        <el-form-item label="Type">
          <el-select v-model="movie.form.type" size="large" style="width: 100%">
            <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Year">
          <el-date-picker v-model="movie.form.year" type="year" size="large" style="width: 100%"/>
        </el-form-item>
      </el-form>
    </template>

  </movie-layout>
</template>

<script lang="ts" setup>
import MovieLayout from "@/components/MovieLayout.vue";
import {onMounted, ref} from "vue";
import {useMovieStore} from "@/store/modules/movie";
import {typeOptions} from "@/store/models/Movie";
import {Plus} from "@element-plus/icons-vue"

const movie = useMovieStore();

const posterUrl = ref('')

const onChangeUpload = (file: any) => {
  // @TODO Для коректної роботи повинен бути upload фото на сревер. Я здався і зробив простим js...
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file.raw);
  fileReader.addEventListener('load', (event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    posterUrl.value = event.target.result;
  })
}

onMounted(() => {
  movie.clearForm();
})


const submitForm = () => {
  console.log('movie.form', movie.form)
}


</script>

<style scoped>
.avatar-uploader .avatar {
  width: 100%;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>