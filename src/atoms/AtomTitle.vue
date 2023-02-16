<template>
    <component :is="tag" class="text-xl">
        {{ content }}
    </component>
</template>

<script setup>
import  { defineProps } from 'vue';

const { tag, content } = defineProps(['tag', 'content']);
</script>
