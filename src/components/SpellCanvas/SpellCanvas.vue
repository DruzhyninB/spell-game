<script setup>
import Rectangle from '../spell-components/Bases/Rectangle.vue'
</script>

<template>
    <div class="spell-canvas__wrapper" ref="root">
        <div class="spell-canvas">
            <Rectangle />
        </div>
    </div>
</template>
 
<style scoped>
.spell-canvas {
    width: 75%;
    height: 75%;
    display: block;
    position: relative;
    z-index: 10;
}
.spell-canvas__wrapper:after {
    content: "";
    display: block;
    width: 97%;
    height: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    background-image: url("/src/assets/spell-canvas.png");
}
.spell-canvas__wrapper {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
