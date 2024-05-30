<script setup>
import SkeletonBase from './SkeletonBase.vue';
</script>

<template>
  <div class="fragment mt-2">
    <div class="main-repo-container w-11/12 rounded-lg m-auto transition ease-linear duration-500">
      <div class="all-repos-container grid place-items-center gap-3">
        <SkeletonBase type="w-40 md:w-80 lg:w-96 h-8 md:h-12 lg:h-10" />
        <div class="repo-wrapper gap-3 w-11/12 grid md:gap-4 lg:repo-grid lg:mb-7">
          <div v-for="index in 4" :key="index" class="repo-container border w-11/12 m-auto border-secondary rounded-md grid place-items-center lg:w-full lg:rounded-lg lg:h-64">
            <SkeletonBase type=" title w-36 md:w-48 lg:w-64 h-6 md:h-12 lg:text-xl lg:font-medium mt-3" />
            <SkeletonBase type=" text" />
            <SkeletonBase type=" text" />
            <SkeletonBase type=" text" />
            <div class="mt-2 flex gap-2 mb-2 md:mb-3">
              <SkeletonBase type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
              <SkeletonBase type="w-24 h-8 md:w-32 md:h-12 lg:w-28 lg:h-10" />
            </div>
          </div>
        </div>
        <div class="flex justify-around gap-3">
          <SkeletonBase type="w-24 md:w-24 lg:w-36 h-8 md:h-12 lg:mb-5" />
          <SkeletonBase type="h-8 w-24 md:h-12 md:w-24 lg:w-36 lg:mb-5" />
        </div>
      </div>
    </div>
  </div>
</template>