<script setup>
import { inject, computed } from "vue";
import { useStore } from "vuex";

// Components
import Layout from "./components/Layout/Layout.vue";
import Loading from "./components/Layout/Layout.vue";

const store = useStore();
const audio = inject("audio");

audio.loaded.then(() => {
    store.commit('loaded', {system:'audio', loaded:true});
    // audio.play('background', {loop:true, volume:0.05});
});
</script>

<template>
    <Loading v-if="!store.getters.isLoading" />
    <Layout v-else />
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
