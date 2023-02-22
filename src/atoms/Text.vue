<template>
    <p>{{ text }}</p>
</template>

<script setup>
import { defineProps } from 'vue';

const { text } = defineProps(['text']);


</script>
