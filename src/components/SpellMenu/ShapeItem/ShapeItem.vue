<script setup>
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
    item: Object,
    className: String,
});

const onDragStart = (e) => {
    e.dataTransfer.setData(
        "payload",
        JSON.stringify({
            type: "shape",
            shape: props.item,
        })
    );
};

const onHover = (ishovered) => {
    let target = ishovered ? props.item : undefined;
    store.dispatch("dashboard/setTarget", { target });
};
</script>

<template>
    <div
        :class="`${className} sg-source`"
        v-hover="onHover"
    >
        <div class="sg-source__icon" draggable="true" @dragstart="onDragStart">
            <div class="sg-source__icon-core"></div>
        </div>
        <div class="sg-source__title">
            {{ item.label }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.sg-source {
    width: 100%;
    height: 100%;
    opacity: 0.99;
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
            background: var(--primary);
            width: 60%;
            height: 60%;
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
                content: "";
                display: block;
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
