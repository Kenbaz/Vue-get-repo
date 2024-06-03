<script setup>
import { ref } from "vue";

const props = defineProps({
  onSearch: Function,
});

const searchQuery = ref("");

function handleChange(event) {
  const query = event.target.value;
  searchQuery.value = query;
  props.onSearch(query);
}
</script>

<template>
  <div
    class="w-full rounded-md border-2 border-secondary hover:border-cyan-700 h-full"
  >
    <input
      class="w-full h-full rounded-md placeholder-gray-800 bg-tinWhite text-gray-800 relative font-medium focus:outline-none lg:text-md md:pl-4"
      type="text"
      placeholder="Search repository..."
      @input="handleChange"
    />
  </div>
</template>
