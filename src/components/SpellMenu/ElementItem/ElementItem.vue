<script setup>
import { inject } from "vue";
import { useStore } from "vuex";
const store = useStore();
const audio = inject("audio");
const props = defineProps({
    item: Object,
    className: String,
});

const onDragStart = (e) => {
    e.dataTransfer.setData(
        "payload",
        JSON.stringify({
            type: "element",
            element: props.item,
        })
    );
    audio.play("element-pickup");
};
const onHover = (ishovered) => {
    let target = ishovered ? props.item : undefined;
    store.dispatch("dashboard/setTarget", { target });
};
</script>

<template>
    <div
        :class="`${className} sg-element`"
        :style="{
            '--primary': item.colors.primary,
            '--secondary': item.colors.secondary,
        }"
        v-hover="onHover"
    >
        <div class="sg-element__orb" @dragstart="onDragStart" draggable="true">
            <div class="sg-element__icon">
                <div class="sg-element__icon-spark"></div>
                <div class="sg-element__icon-core"></div>
            </div>
        </div>
        <div class="sg-element__title">
            {{ item.label }}
        </div>
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
        opacity: 0;
    }
    100% {
        width: 100%;
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
    opacity: 0.999;
    &__icon {
        width: 60px;
        height: 60px;
        position: relative;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;

        &-core {
            animation: element-core-anim ease-in-out 1s infinite;
            background-image: radial-gradient(
                var(--primary) 35%,
                transparent 75%
            );
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
            border-color: var(--secondary);
        }
    }
    &__title {
        text-align: center;
        letter-spacing: 1px;
        font-size: 1.2rem;
    }
}
</style>
