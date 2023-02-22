<template>
    <component :is="tag">
        {{ content }}
    </component>
</template>

<script setup>
import  { defineProps } from 'vue';

const { tag, content } = defineProps({
    tag:String,
    content:String,
});
</script>
