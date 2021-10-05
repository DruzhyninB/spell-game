<script setup>
import interact from "interactjs";
import { ref, onMounted } from "vue";

const props = defineProps({
    item: Object,
    className: String,
});

const root = ref(null);

onMounted(function () {
    enableDraggable();
});

function resetPosition() {
    root.value.style.transform = "translate(" + 0 + "px, " + 0 + "px)";

    // update the posiion attributes
    root.value.setAttribute("data-x", 0);
    root.value.setAttribute("data-y", 0);
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
};

function onDragEnd() {
    resetPosition();
}

function enableDraggable() {
    interact(root.value)
        .draggable({
            inertia: true,
            autoScroll: true,
            listeners: {
                move: moveListener,
                end: onDragEnd,
            },
        })
}
</script>

<template>
    <div :class="`${className} sg-element`" ref="root" :data-element="item.id">
        <div class="sg-element__icon">
            <div class="sg-element__icon-spark"></div>
            <div class="sg-element__icon-spark"></div>
            <div class="sg-element__icon-spark"></div>
            <div class="sg-element__icon-core"></div>
        </div>
        <div class="sg-element__title">{{ item.label }}</div>
    </div>
</template>

<style scoped lang="scss">
@keyframes element-spark-anim {
    100% {
        transform: rotateZ(360deg);
    }
}
@keyframes element-core-anim {
    0% {
        transform: scale(1) translate(-50%, -50%);
    }
    50% {
        transform: scale(0.95) translate(-50%, -50%);
    }
    100% {
        transform: scale(1) translate(-50%, -50%);
    }
}
.sg-element {
    width: 100%;
    height: 100%;
    &__icon {
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;

        &-core {
            // animation: element-core-anim-4999f2c1 ease-in-out 1s infinite;
            position: absolute;
            background-image: radial-gradient(#e66465 50%, transparent 75%);
            top: 50%;
            left: 50%;
            width: 60%;
            height: 60%;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            transform-origin: center;
            transform: scale(1) translate(-50%, -50%);
        }

        &-spark {
            // animation: element-spark-anim linear 2s forwards infinite;

            &:nth-child(2) {
                animation-delay: calc(2s / 3);
            }
            &:nth-child(3) {
                animation-delay: calc((2s / 3) * 2);
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
