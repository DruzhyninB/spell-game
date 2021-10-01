<script setup>
import interact from "interactjs";
import { ref, onMounted } from "vue";

const props = defineProps({
    item: Object,
    className: String,
});
let draggable,
    startPos,
    snapTargets = [];

const root = ref(null);
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
function onDragStart(event) {
    if (!startPos) {
        var rect = interact.getElementRect(event.target);

        // record center point when starting the very first a drag
        startPos = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
    }

    // snap to the start position
    snapTargets.length = 0;
    snapTargets.push(startPos);
}
onMounted(function () {
    draggable = interact(root.value)
        .draggable({
            inertia: true,
            autoScroll: true,
            modifiers: [
                interact.modifiers.snap({
                    targets: snapTargets,
                    relativePoints: [
                        { x: 0.5, y: 0.5 }, // to the center
                    ],
                    endOnly: true,
                }),
            ],
            listeners: {
                move: moveListener,
            },
        })
        .on("dragstart", onDragStart);
});
</script>

<template>
    <div :class="`${className} sg-element`" ref="root">
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
