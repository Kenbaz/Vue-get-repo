<script setup>
import useFetch from "../UseFetch";
import { ref, computed, watchEffect } from "vue";
import SidebarSearch from "./SidebarSearch.vue";
import SidebarRepoSkeleton from "./Skeletons/SidebarRepoSkeleton.vue";

const sidebarSearchQuery = ref("");
const errorMessage = ref("");
const isLoading = ref("");

const { data, error } = useFetch("https://api.github.com/users/Kenbaz/repos");

watchEffect(() => {
  if (error.value) {
    errorMessage.value = "Sidebar unavailable";
  }
  isLoading.value = data.value ? false : "Loading... please wait"
});

function setSidebarSearchQuery(query) {
    sidebarSearchQuery.value = query;
}

const filteredData = computed(() => {
  return sidebarSearchQuery.value
    ? data.value.filter((repo) => {
        return repo.full_name
          .toLowerCase()
          .includes(sidebarSearchQuery.value.toLowerCase());
      })
    : data.value;
});
</script>

<template>
  <div class="sidebar-container lg:mt-10">
    <div v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div v-else-if="isLoading">
      <SidebarRepoSkeleton/>
    </div>
    <div v-else>
      <h3 class="ms-4 mb-3 font-medium">Top Repositories</h3>

      <div class="lg:w-11/12 lg:m-auto lg:h-10 lg:rounded-md">
       <SidebarSearch @search="setSidebarSearchQuery" />
      </div>
      <div class="sidebar-repo-wrapper ms-4 mt-2">
        <div
          v-for="repo in filteredData"
          :key="repo.id"
          class="sidebar-repo-container mb-2"
        >
          <router-link :to="`/repo-details/${repo.id}`">
            <p class="data">{{ repo.full_name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
