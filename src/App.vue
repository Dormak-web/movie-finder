<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="logo">
              <router-link :to="{ name: 'home' }" class="logo_link">MovieFinder</router-link>
            </div>
          </el-col>
          <el-col :span="16">
            <el-input
                v-model="search"
                class="w-50 m-2"
                size="large"
                placeholder="Please Input"
                :prefix-icon="Search"
            />
          </el-col>
          <el-col :span="4">
            <div class="actions">
              <el-button type="success">+ Add</el-button>
<!--              @TODO remove search link -->
              <el-button type="success" @click="router.push({ name: 'search' })">search</el-button>
<!--              <router-link :to="{ name: 'search' }">Add</router-link>-->
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import {ref} from "vue";
import router from "@/router";

const search = ref('')


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
</style>