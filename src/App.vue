<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Layout from "./components/Layout/Layout.vue";
</script>

<template>
    <Layout />
</template>

<style>
@font-face {
    font-family: "Gothic";
    src: url("/src/assets/fonts/gothic_font2.ttf");
    font-weight: bold;
}
html,
body {
    font-family: "Gothic";
    height: 100%;
}
#app {
    height: 100%;
}
</style>
