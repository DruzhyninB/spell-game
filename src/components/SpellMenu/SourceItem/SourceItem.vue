<script setup>
import interact from "interactjs";
import { ref, onMounted, reactive } from "vue";

const props = defineProps({
    item: Object,
    className: String,
});

const orb = ref(null);
let state = reactive({
    isMoving:false
});

onMounted(function () {
    enableDraggable();
});

function resetPosition() {
    orb.value.style.transform = "translate(" + 0 + "px, " + 0 + "px)";

    // update the posiion attributes
    orb.value.setAttribute("data-x", 0);
    orb.value.setAttribute("data-y", 0);

    state.isMoving = false;
}
const moveListener = (event) => {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.transform = "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);

    state.isMoving = true;
};

function onDragEnd() {
    resetPosition();
    state.isMoving = false;
}

function enableDraggable() {
    interact(orb.value).draggable({
        inertia: true,
        autoScroll: true,
        listeners: {
            move: moveListener,
            end: onDragEnd,
        },
    });
}
</script>

<template>
    <div
        :class="`${className} sg-source`"
        :style="{
            '--primary': item.colors.primary,
            '--secondary': item.colors.secondary,
        }"
    >
        <div ref="orb" :data-element="item.id" class="sg-source__orb">
            <div class="sg-source__icon">
                <div class="sg-source__icon-core"></div>
            </div>
        </div>
        <div class="sg-source__title" v-if="!state.isMoving">{{ item.label }}</div>
    </div>
</template>

<style scoped lang="scss">
@keyframes element-spark-anim {
    0% {
        width: 0%;
        height: 0%;
        border-width: 10px;
        opacity: 1;
    }
    90% {
        border-width: 0;
    }
    100% {
        width: 100%;
        height: 100%;
        opacity: 0;
        border-width: 0;
    }
}
.sg-source {
    width: 100%;
    height: 100%;
    &__icon {
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &-core {
            animation: element-core-anim ease-in-out 1s infinite;
            background: var(--primary);
            width: 60%;
            height: 60%;
            border-radius: 100%;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            transform-origin: center;
            transform: scale(1);

            box-shadow: 0 0 12px white,
                0 -3px 6px rgba(255, 255, 255, 0.5) inset,
                0 -18px 24px black inset;

            &:after {
                width: 2px;
                height: 2px;
                content: '';
                display: block;
                border-radius: 50%;
                background: transparent;
                margin: 0 auto;
                position: relative;
                top: 12px;
                left: 42px;
                box-shadow: -42px -6px 6px 6px rgba(255, 255, 255, 0.5);
                transition: all 0.5s;
            }
            &:before {
                width: 42px;
                height: 6px;
                content: "";
                display: block;
                border-radius: 50%;
                background: transparent;
                margin: 0 auto;
                position: absolute;
                top: 20px;
                box-shadow: 0 20px 9px 1px rgba(0, 0, 0, 0.5);
                transition: all 0.5s;
            }
        }
    }
    &__title {
        text-align: center;
        letter-spacing: 1px;
        font-size: 1.2rem;
    }
}
</style>
