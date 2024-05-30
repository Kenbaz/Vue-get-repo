<script setup>
import { computed } from 'vue';
import ShimmerSkeleton from './ShimmerSkeleton.vue'

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    className: {
        type: String,
        default: '',
    }
});

const combinedClasses = computed(() => {
    return ['skeleton', props.type, props.className].filter(Boolean).join(' ');
});
</script>

<template>
    <div :class="combinedClasses">
        <ShimmerSkeleton/>
    </div>
</template>