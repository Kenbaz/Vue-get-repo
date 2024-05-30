<script setup>
import SkeletonBase from './SkeletonBase.vue';
</script>

<template>
  <div class="details-fragment">
    <div class="grid justify-center mb-10">
      <SkeletonBase type="w-80 h-8 mb-3" />
      <SkeletonBase type="w-60 h-7 mb-2 ms-[45px]" />
    </div>

    <div class="details-container lg:w-1/2 lg:m-auto">
      <main class="main-details">
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />

        <SkeletonBase type="w-72 h-6 mt-5 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />

        <SkeletonBase type="w-72 mt-5 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
        <SkeletonBase type="w-72 h-6 mb-1 md:mb-2 ms-2 md:ms-4" />
      </main>
    </div>

    <div class="flex justify-center items-center gap-2 md:mt-10 md:gap-5">
      <SkeletonBase type="w-36 h-12 md:w-44 md:h-16 lg:w-36 lg:h-14" />
      <SkeletonBase type="w-36 h-12 md:w-44 md:h-16 lg:w-36 lg:h-14" />
    </div>
  </div>
</template>