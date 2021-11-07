<script setup>
import SpellMenu from "../SpellMenu/SpellMenu.vue";
import SpellCanvas from "../SpellCanvas/SpellCanvas.vue";
import SpellDashboard from "../SpellDashboard/SpellDashboard.vue";
</script>

<template>
    <section class="container-fluid sg-wrapper">
        <div class="row">
            <div class="col-8">
                <SpellCanvas />
            </div>
            <div class="col-4">
                <SpellMenu />
                <SpellDashboard />
            </div>
        </div>
    </section>
</template>

<style scoped>
.sg-wrapper{
    background-image: url("/src/assets/wood.jpg");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
}
</style>
