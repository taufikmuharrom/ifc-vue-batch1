<script setup>
import { RouterLink, RouterView } from "vue-router";

import HeaderLayout from "../src/layout/HeaderLayout.vue";
import FooterLayout from "../src/layout/FooterLayout.vue";
</script>

<template>
  <HeaderLayout />
  <RouterView />
  <FooterLayout />
</template>

<style scoped></style>
