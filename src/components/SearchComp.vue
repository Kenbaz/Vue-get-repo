<script setup>
import { ref } from 'vue';

const props = defineProps({
    onSearch: Function,
    currentPage: Number,
    setCurrentPage: Function,
})

const searchQuery = ref("");

function handleChange(event) {
    const query = event.target.value;
    searchQuery.value = query;
    props.onSearch(query);

    if (query === "") {
        props.setCurrentPage(props.currentPage);
    } else {
        props.setCurrentPage(1)
    }
}

</script>

<template>
  <div class="rounded-md w-11/12 h-8 border-2 border-secondary hover:border-cyan-700 md:h-[59px] md:mb-2 md:mt-2 lg:w-3/4 lg:h-11 lg:rounded-lg">
    <input
      class="w-full bg-tinWhite text-gray-800 h-full rounded-md placeholder-gray-800 relative pl-2 text-sm font-medium focus:outline-none md:h-14 md:text-2xl md:pl-4 lg:text-base lg:h-full lg:rounded-lg"
      type="text"
      placeholder="Search repository..."
      @input="handleChange"
    />
  </div>
</template>