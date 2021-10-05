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
    <div :class="`${className} sg-element`" :style="{'--primary':item.colors.primary,'--secondary':item.colors.secondary}">
        <div ref="orb" :data-element="item.id" class="sg-element__orb">
            <div class="sg-element__icon">
                <div class="sg-element__icon-spark"></div>
                <div class="sg-element__icon-core"></div>
            </div>
        </div>
        <div class="sg-element__title" v-if="!state.isMoving">{{ item.label }}</div>
    </div>
</template>

<style scoped lang="scss">
@keyframes element-spark-anim {
    0%{
        width: 0%;
        height: 0%;
        border-width: 10px;
        opacity: 1;
    }
    90%{
        border-width: 0;
        opacity: 0;
    }
    100% {
        width:100%;
        height: 100%;
        border-width: 0;
    }
}
@keyframes element-core-anim {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
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
        display: flex;
        align-items: center;
        justify-content: center;

        &-core {
            animation: element-core-anim ease-in-out 1s infinite;
            background-image: radial-gradient(var(--primary) 35%, transparent 75%);
            width: 60%;
            height: 60%;
            background-size: 100% 100%;
            background-position: center;
            background-repeat: no-repeat;
            transform-origin: center;
            transform: scale(1);
        }

        &-spark {
            animation: element-spark-anim linear 2s forwards infinite;
            position: absolute;
            border-radius: 100%;
            border-style: solid;
            border-color: var(--secondary);;
        }
    }
    &__title {
        text-align: center;
        letter-spacing: 1px;
        font-size: 1.2rem;
    }
}
</style>
