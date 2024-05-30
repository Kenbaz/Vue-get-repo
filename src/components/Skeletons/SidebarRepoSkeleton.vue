<script setup>
import SkeletonBase from './SkeletonBase.vue'
</script>

<template>
  <div class="sidebar-container lg:mt-10">
    <SkeletonBase type="w-36 h-6 mb-3 ml-4 font-medium" />

    <div class="lg:w-11/12 lg:m-auto lg:h-8">
      <SkeletonBase type="w-full h-full" />
    </div>
    
    <div class="sidebar-repo-wrapper ms-4 mt-2">
      <SkeletonBase v-for="index in 15" :key="index" type="w-[200px] h-5 mb-2" />
    </div>
  </div>
</template>