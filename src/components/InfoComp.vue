<script setup>
import { ref, watch} from 'vue';
import UseFetch from '../UseFetch.js';
import AvatarComp from './AvatarComp.vue';
import InfoSkeleton from './Skeletons/InfoSkeleton.vue';


const { data, error, isLoading } = UseFetch("https://api.github.com/users/Kenbaz");
const repoCount = ref(null);

watch(data, (newData) => {
    if (newData) {
        repoCount.value = newData.public_repos;
    }
})

</script>


<template>
  <div class="mt-3 grid place-items-center border-secondary border-b md:mb-5 lg:w-11/12 lg:m-auto lg:mb-4">
    <div class="md:grid md:place-items-center lg:mt-8">
      <div v-if="error" class="error-message">
        There was an error while fetching this data, please refresh the page
      </div>
      <div v-else-if="isLoading">
        <InfoSkeleton/>
      </div>
      <div v-else>
        <div class="flex justify-center items-center gap-3 font-medium text-lg mb-2 md:text-3xl lg:text-2xl">
              <AvatarComp />
          <p>Kenneth Bassey</p>
        </div>
        <div class="text-sm mb-2 md:text-2xl lg:text-base">
          Web Developer <span class="text-secondary">|</span> HTML
          <span class="text-secondary">|</span> CSS
          <span class="text-secondary">|</span> JavaScript
          <span class="text-secondary">|</span> React <br />
          <span class="text-secondary">|</span> Python
          <span class="text-secondary">|</span> Django
          <span class="text-secondary">|</span> Tailwindcss
        </div>
        <div class="ms-20 mb-2 md:text-2xl md:mt-2 md:mb-3 lg:text-xl">
          Public Repository: {{ repoCount }}
        </div>
        <div class="flex gap-4 justify-center items-center mb-1 md:mb-3 md:gap-8">
          <a href="mailto:kbassey016@gmail.com" target="_blank">
            <font-awesome-icon
              class="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
              :icon="['fas', 'envelope']"
            />
          </a>
          <a href="https://github.com/Kenbaz" target="_blank">
            <font-awesome-icon
              class="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
              :icon="['fab', 'github']"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kenneth-bassey-593150251"
            target="_blank"
          >
            <font-awesome-icon
              class="w-6 h-6 md:w-10 md:h-10 lg:w-8 lg:h-8"
              :icon="['fab', 'linkedin']"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>