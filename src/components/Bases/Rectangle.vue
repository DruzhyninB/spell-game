<script setup>
</script>

<template>
    <div class="sg-base-rectangle">
        <!-- Custome shape -->
        <div class="sg-shape">
            <div class="sg-shape__background"></div>
        </div>
        <!-- Source -->
        <div class="sg-source__wrapper">
            <div class="sg-source__dropzone"></div>
            <svg viewBox="0 0 100 100">
                <path
                    id="curve-path"
                    d="M 0, 50 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
                    fill="transparent"
                ></path>
                <text>
                    <textPath xlink:href="#curve-path" startOffset="0">
                        onetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothreeonetwothree
                    </textPath>
                </text>
            </svg>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sg-base-rectangle {
    width: 100%;
    height: 100%;

    .sg-source {
        &__wrapper {
            width: 158px;
            height: 158px;
            position: absolute;
            z-index: 10;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 100%;
            border: 2px solid black;

            svg {
                width: 97%;
                height: 97%;
                position: relative;
                z-index: 1;
                text {
                    font-size: 9px;
                }
            }
        }
        &__dropzone {
            width: 100%;
            height: 100%;
            position: absolute;
        }
    }
    .sg-shape {
        width: 100%;
        height: 100%;
        &__background {
            background-image: url("/src/assets/bases/rectangle.svg");
            width: 100%;
            height: 100%;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>
