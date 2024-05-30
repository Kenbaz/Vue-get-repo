<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useFetch from '../UseFetch';
import RepoDetailsSkeleton from './Skeletons/RepoDetailsSkeleton.vue';

const route = useRoute();
const router = useRouter();

const id = ref(route.params.id);
const repo = ref({});
const errorMessage = ref("");
const languages = ref([]);

const { data, error, isLoading } = useFetch(`https://api.github.com/repositories/${id.value}`);

watchEffect(() => {
  if (data.value) {
    repo.value = data.value;
  }
  if (error.value) {
    errorMessage.value = "Failed to fetch details";
  }
});

watch(repo, (newRepo) => {
  if (newRepo.languages_url) {
    const { data: languagesData, error: languagesError } = useFetch(newRepo.languages_url);
    watchEffect(() => {
      if (languagesData.value) {
        languages.value = Object.keys(languagesData.value);
      }
      if (languagesError.value) {
        errorMessage.value = "Failed to fetch languages";
      }
    });
  }
});

const handleHome = () => {
  router.push('/');
};
</script>

<template>
  <div v-if="isLoading">
    <RepoDetailsSkeleton/>
  </div>
  <div v-else>
    <div v-if="error">
      <div>
        {{ errorMessage }}
        <router-link to="/">
          Go back Home
          <font-awesome-icon :icon="['fas', 'home']" />
        </router-link>
      </div>
    </div>
    <div v-else class="details-fragmen">
      <header class="flex justify-center items-center mb-3 h-16 border-secondary border-b md:h-20">
        <p class="font-medium md:text-2xl lg:text-2xl">{{ repo.full_name }}</p>
      </header>
      <h2 class="text-center font-medium mb-2 md:text-3xl md:mb-4 lg:text-xl">
        Repository Details
      </h2>
      <div class="details-container lg:w-1/2 lg:m-auto">
        <main class="main-details">
          <div class="ms-2 mb-1 md:ms-4 md:text-2xl md:mb-4 lg:text-xl">
            <p class="mb-1 md:mb-2">
              <span class="span-style">Languages:</span>
              {{ languages ? languages.join(", ") : "..." }}
            </p>
            <p class="mb-1 md:mb-2">
              <span class="span-style">Owner:</span> {{ repo.owner.login }}
            </p>
            <p>
              <span class="span-style">Forks:</span> {{ repo.forks_count }}
            </p>
          </div>
          <hr class="scale-y-20 lg:ms-4" />
          <div class="ms-2 mt-1 mb-1 md:ms-4 md:text-2xl md:mt-2 md:mb-4 lg:text-xl">
            <p class="mb-1 md:mb-2">
              <span class="span-style">Open Issues:</span>
              {{ repo.open_issues_count }}
            </p>
            <p class="mb-1 md:mb-2">
              <span class="span-style">Created At:</span>
              {{ new Date(repo.created_at).toLocaleDateString() }}
            </p>
            <p>
              <span class="span-style">Last Updated:</span>
              {{ new Date(repo.updated_at).toLocaleDateString() }}
            </p>
          </div>
          <hr class="scale-y-20 lg:ms-4" />
          <div class="ms-2 mt-1 mb-1 md:ms-4 md:text-2xl md:mt-2 md:mb-4 lg:text-xl">
            <p class="mb-1 md:mb-2">
              <span class="span-style">License:</span>
              {{ repo.license ? repo.license.name : "This repo has no license" }}
            </p>
            <p class="mb-1 md:mb-2">
              <span class="span-style">Default Branch:</span>
              {{ repo.default_branch }}
            </p>
            <p>
              <span class="span-style">Stars:</span> {{ repo.stargazers_count }}
            </p>
          </div>
          <hr class="scale-y-20 lg:ms-4" />
          <div class="ms-2 mt-1 mb-5 md:ms-4 md:mt-2 md:mb-4 md:text-3xl lg:text-xl">
            <p class="mb-1 md:mb-2">
              <span class="span-style">Watchers:</span>
              {{ repo.subscribers_count }}
            </p>
            <p>
              <span class="span-style">Subscribers:</span>
              {{ repo.subscribers_count }}
            </p>
          </div>
        </main>
      </div>
      <div class="flex justify-center items-center gap-2 md:mt-10 md:gap-5">
        <a v-if="repo.homepage" :href="repo.homepage" target="_blank" rel="noopener noreferrer">
    <button class="w-36 h-10 font-semibold bg-spanColor rounded-md text-slate-200 focus:outline-none md:w-44 md:h-16 md:text-2xl lg:text-xl lg:w-36 lg:h-14">
      Live site
    </button>
  </a>
        <button
          @click="handleHome"
          class="home-btn h-10 font-semibold w-36 rounded-md bg-spanColor text-slate-200 md:w-44 md:h-16 md:text-2xl lg:text-xl lg:w-36 lg:h-14"
          type="button"
        >
          Home <font-awesome-icon :icon="['fas', 'home']" />
        </button>
      </div>
    </div>
  </div>
</template>