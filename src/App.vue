<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';

const appVersion = ref('1.0.0');
const isProduction = import.meta.env.PROD;

onMounted(() => {
  console.log(`App version: ${appVersion.value} (${isProduction ? 'production' : 'development'})`);
});
</script>

<template>
  <RouterView />
  <VueQueryDevtools />
</template>
