<script setup>
import { onMounted, ref } from "vue";
import * as sgKonvaService from "../../services/konva";

const canvasWrapper = ref(null);

onMounted(function () {
    sgKonvaService.initStage({
        container: "spell-canvas",
        width: canvasWrapper.value.offsetWidth,
        height: canvasWrapper.value.offsetHeight,
    });
});

function linkNode() {
    sgKonvaService.linkNode();
}

function removeNode() {
    sgKonvaService.removeNode();
}
</script>

<template>
    <div class="spell-canvas__wrapper">
        <div ref="canvasWrapper" id="spell-canvas"></div>
        <div
            ref="contextMenu"
            class="context-menu"
            v-show="sgKonvaService.state.isContextMenuShown"
            :style="sgKonvaService.state.contextMenuPosition"
        >
            <button @click="linkNode">Связать</button>
            <button @click="removeNode">Убрать</button>
        </div>
    </div>
</template>
 
<style scoped>
#spell-canvas {
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
.context-menu {
    position: absolute;
    background-color: white;
    box-shadow: 0 0 5px grey;
    border-radius: 3px;
    z-index: 20;
}

.context-menu button {
    width: 100%;
    background-color: white;
    border: none;
    margin: 0;
    padding: 10px;
}

.context-menu button:hover {
    background-color: lightgray;
}
</style>
