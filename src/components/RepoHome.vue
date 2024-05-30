<script setup>
import { ref, watchEffect, computed } from 'vue';
import useFetch from '../UseFetch';
import SearchComp from './SearchComp.vue';
import RepoHomeSkeleton from './Skeletons/RepoHomeSkeleton.vue';

const fetchResults = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 4;
const errorMessage = ref("");
const filteredResults = ref([]);

const { data, error, isLoading } = useFetch(`https://api.github.com/users/Kenbaz/repos`);

watchEffect(() => {
    if (error.value) {
        errorMessage.value = "Failed to fetch"
    }
    if (data.value) {
        fetchResults.value = data.value
    }
});

watchEffect(() => {
    const filteredRepos = searchQuery.value ? fetchResults.value.filter((repo) => {
      return repo.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    }) : fetchResults.value;
    filteredResults.value = filteredRepos;
});

const totalPages = computed(() => Math.ceil(filteredResults.value.length / itemsPerPage));

const currentResults = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredResults.value.slice(startIndex, endIndex);
})

const handlePrevPage = () => { currentPage.value -= 1 };
const handleNextPage = () => { currentPage.value += 1 };

function handleDeleteRepo(repoId) {
    fetchResults.value = fetchResults.value.filter((prev) => {
        prev.filter(repo => repo.id !== repoId)
    });
}

</script>

<template>
    <div class="fragment mt-2">
        <div class="main-repo-container relative w-11/12 rounded-lg m-auto transition ease-linear duration-500">
        <div v-if="isLoading">
          <RepoHomeSkeleton/>
        </div>
        <div v-else-if="errorMessage">
          <div>{{ errorMessage }}</div>
        </div>
        <div v-else class="all-repos-container grid place-items-center">
          <div v-if="fetchResults" class=" w-11/12">
            <div class="flex justify-around w-full m-auto mt-4 mb-4 lg:w-2/3">
              <SearchComp
              @search="searchQuery = $event"
              :current-page="currentPage"
              :set-current-page="value => currentPage = value"
            />
            </div>

            <h2 class="mb-3 text-lg text-center font-semibold md:text-3xl md:mb-8 lg:text-2xl lg:mb-8">
              My Public Repositories
            </h2>
          </div>

          <div class="repo-wrapper text-sm grid gap-2 md:text-2xl md:gap-4 lg:text-base lg:repo-grid lg:mb-7">
            <div v-for="repo in currentResults" :key="repo.id" class="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-80">
              <h3 class="font-bold md:text-3xl mt-3 lg:text-xl lg:font-medium lg:-mb-2">{{ repo.name }}</h3>
              <p class="m-1 mt-0 md:m-3">{{ repo.description }}</p>
              <div class="flex gap-2 mb-2 md:mb-3">
                <router-link :to="`/repo-details/${repo.id}`" title="View repository details">
                  <button type="button" class="info-btn h-8 w-20 p-1 rounded-md bg-tinWhite font-semibold text-gray-800 hover:border-cyan-600 md:w-32 md:h-12 lg:w-28 lg:h-10">More Info</button>
                </router-link>
                <button type="button" class="delete-btn h-8 p-1 w-20 rounded-md bg-tinWhite font-semibold text-gray-800 hover:border-cyan-600 md:w-32 md:h-12 lg:w-28 lg:h-10" @click="handleDeleteRepo(repo.id)">Delete</button>
              </div>
            </div>
          </div>

          <div class="pagination mt-5 mb-5 flex justify-center">
            <button class="h-8 p-1 w-20 bg-tinWhite text-gray-800 rounded-md text-sm md:w-32 md:h-12 md:text-2xl lg:w-28 lg:h-10 lg:text-base" @click="handlePrevPage" :disabled="currentPage === 1">
               <font-awesome-icon class="mr-1" :icon="['fas', 'chevron-left']" />
              Previous
            </button>
            <span class="m-1 text-sm md:m-2 md:text-2xl lg:text-base">
              Page {{ currentPage }} of {{ totalPages }}
            </span>
            <button class="h-8 py-0 w-20 text-sm bg-tinWhite rounded-md text-gray-800 md:w-32 md:h-12 md:text-2xl md:py-1 lg:w-24 lg:h-10 lg:text-base relative" @click="handleNextPage" :disabled="currentPage === totalPages">
              Next
              <font-awesome-icon class="ms-1 md:absolute md:bottom-[9px] md:mt-2.5 lg:left-16 lg:-top-[-1.2px]" :icon="['fas', 'chevron-right']" />
            </button>
          </div>
        </div>

    </div>
  </div>
</template>