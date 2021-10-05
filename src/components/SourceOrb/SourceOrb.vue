<script setup>
const props = defineProps({
    source: Object,
});
</script>

<template>
    <div
        class="sg-source"
        :style="{
            '--primary': source.colors.primary,
            '--secondary': source.colors.secondary,
        }"
    >
        <div class="sg-source__orbit"></div>
        <div class="sg-source__orbit"></div>
        <div class="sg-source__orbit"></div>
        <div class="sg-source__orbit"></div>
        <div class="sg-source__orbit"></div>
        <div class="sg-source__orbit"></div>
        <div class="sg-source__core"></div>
    </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@keyframes orbit-rotate-clockwise {
    100% {
        transform: rotateZ(360deg);
    }
}
@keyframes orbit-rotate-counter-clockwise {
    100% {
        transform: rotateZ(-360deg);
    }
}
.sg-source {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

        &__core {
            // animation: element-core-anim ease-in-out 1s infinite;
            background: var(--primary);
            width: 40%;
            height: 40%;
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
    &__orbit {
        animation: linear 2s backwards infinite;
        position: absolute;
        border-radius: 100%;
        border-style: solid;
        border-color: var(--secondary);
        border-radius: 100%;

        @for $i from 1 to 6 {
            &:nth-child(#{$i}) {
                width: 45% + 6 * $i;
                height: 45% + 6 * $i;
                border-width: 2px;
                animation-duration: 1s + math.random() * 2;
            }
        }
        &:nth-child(2n) {
            animation-name: orbit-rotate-clockwise;
        }
        &:nth-child(2n + 1) {
            animation-name: orbit-rotate-counter-clockwise;
        }

        &:nth-child(4n) {
            border-left-color: transparent;
            border-bottom-color: transparent;
            border-right-color: transparent;
        }
        &:nth-child(4n + 1) {
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-right-color: transparent;
        }
        &:nth-child(4n + 2) {
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: transparent;
        }
        &:nth-child(4n + 3) {
            border-top-color: transparent;
            border-left-color: transparent;
            border-bottom-color: transparent;
        }
    }
}
</style>
