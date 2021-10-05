<template>
    <div class="sg-base-rectangle">
        <!-- Custome shape -->
        <div class="sg-shape">
            <svg viewBox="0 0 66 75" xmlns="http://www.w3.org/2000/svg">
                <line
                    stroke="#000"
                    id="bottom"
                    y2="56.19054"
                    x2="7.64329"
                    y1="56.19054"
                    x1="57.3046"
                    fill="transparent"
                />
                <line
                    stroke="#000"
                    id="left"
                    y2="7.10303"
                    x2="31.62739"
                    y1="52.45008"
                    x1="6.40888"
                    fill="transparent"
                />
                <line
                    stroke="#000"
                    id="right"
                    y2="6.96996"
                    x2="35.15579"
                    y1="52.79588"
                    x1="59.51894"
                    fill="transparent"
                />

                <ellipse
                    ref="topApex"
                    id="top_apex"
                    ry="3.41656"
                    rx="3.41656"
                    cy="4.41656"
                    cx="33.32589"
                    stroke="#000"
                    :fill="
                        base.apexes?.top_apex?.element?.colors.primary ||
                        'transparent'
                    "
                />

                <ellipse
                    ref="leftApex"
                    id="left_apex"
                    ry="3.41656"
                    rx="3.41656"
                    cy="55.53351"
                    cx="4.41656"
                    stroke="#000"
                    :fill="
                        base.apexes?.left_apex?.element?.colors.primary ||
                        'transparent'
                    "
                />
                <ellipse
                    ref="rightApex"
                    id="right_apex"
                    ry="3.41656"
                    rx="3.41656"
                    cy="56.05913"
                    cx="60.92116"
                    stroke="#000"
                    :fill="
                        base.apexes?.right_apex?.element?.colors.primary ||
                        'transparent'
                    "
                />

                <g
                    class="synergy left"
                    :class="{
                        appear: base.synergies?.left_synergy_apex?.element,
                    }"
                >
                    <!-- Left synergy -->
                    <line
                        stroke="#000"
                        id="left_synergy_1"
                        y2="5.60928"
                        x2="29.96236"
                        y1="16.51821"
                        x1="7.74418"
                        fill="transparent"
                    />
                    <line
                        stroke="#000"
                        id="left_synergy_2"
                        y2="52.17487"
                        x2="4.41656"
                        y1="21.83808"
                        x1="4.41656"
                        fill="transparent"
                    />
                    <ellipse
                        id="left_synergy_apex"
                        ry="3.41656"
                        rx="3.41656"
                        cy="18.08279"
                        cx="4.54796"
                        stroke="#000"
                        fill="transparent"
                    />
                </g>
                <g
                    class="synergy right"
                    :class="{
                        appear: base.synergies?.right_synergy_apex?.element,
                    }"
                >
                    <!-- Right synergy -->
                    <line
                        stroke="#000"
                        id="right_synergy_1"
                        y2="5.48875"
                        x2="36.69186"
                        y1="16.88917"
                        x1="58.77375"
                        fill="transparent"
                    />
                    <line
                        stroke="#000"
                        id="right_synergy_2"
                        y2="22.36126"
                        x2="61.97241"
                        y1="52.76498"
                        x1="61.97241"
                        fill="transparent"
                    />
                    <ellipse
                        id="right_synergy_apex"
                        ry="3.41656"
                        rx="3.41656"
                        cy="18.477"
                        cx="61.70959"
                        stroke="#000"
                        fill="transparent"
                    />
                </g>

                <!-- Bottom synergy -->
                <g
                    class="synergy bottom"
                    :class="{
                        appear: base.synergies?.bottom_synergy_apex?.element,
                    }"
                >
                    <line
                        stroke="#000"
                        id="bottom_synergy_1"
                        y2="58.26159"
                        x2="58.12161"
                        y1="69.68313"
                        x1="36.46006"
                        fill="transparent"
                    />
                    <line
                        stroke="#000"
                        id="bottom_synergy_2"
                        y2="69.52565"
                        x2="30.35658"
                        y1="57.76771"
                        x1="7.25691"
                        fill="transparent"
                    />
                    <ellipse
                        id="bottom_synergy_apex"
                        ry="3.41656"
                        rx="3.41656"
                        cy="71.03942"
                        cx="33.5887"
                        stroke="#000"
                        fill="transparent"
                    />
                </g>
            </svg>
        </div>
        <!-- Source -->
        <div class="sg-source__wrapper">
            <div class="sg-source__dropzone" id="sourceDropzone" ref="sourceDropzone">
                <SourceOrb
                    v-if="base.sources?.sourceDropzone?.element"
                    :source="base.sources?.sourceDropzone?.element"
                />
            </div>
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

<script setup>
import SourceOrb from "../SourceOrb/SourceOrb.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import interact from "interactjs";
const store = useStore();

const topApex = ref(null);
const rightApex = ref(null);
const leftApex = ref(null);
const sourceDropzone = ref(null);

const base = computed(() => store.state.base);

onMounted(() => {
    enableDropzones();
    registerBase();
});

function registerBase() {
    store.dispatch("setActiveBase", {
        type: "triangle",
        apexes: [
            {
                id: "top_apex",
            },
            {
                id: "right_apex",
            },
            {
                id: "left_apex",
            },
        ],
        synergies: [
            {
                id: "left_synergy_apex",
                parents: ["top_apex", "left_apex"],
            },
            {
                id: "right_synergy_apex",
                parents: ["top_apex", "right_apex"],
            },
            {
                id: "bottom_synergy_apex",
                parents: ["left_apex", "right_apex"],
            },
        ],
        sources: [{ id: "sourceDropzone" }],
    });
}

function enableDropzones() {
    // Top Apex Dropzone
    interact(topApex.value).dropzone({
        accept: ".sg-element__orb",
        ondrop: onElementDrop,
    });
    interact(rightApex.value).dropzone({
        accept: ".sg-element__orb",
        ondrop: onElementDrop,
    });
    interact(leftApex.value).dropzone({
        accept: ".sg-element__orb",
        ondrop: onElementDrop,
    });

    interact(sourceDropzone.value).dropzone({
        accept: ".sg-source__orb",
        ondrop: onSourceDrop,
    });
}

function onElementDrop(event) {
    store.dispatch("dropElement", {
        apex: event.target.id,
        element: event.relatedTarget.dataset.element,
    });
}
function onSourceDrop(event) {
    store.dispatch("dropSource", {
        source: event.target.id,
        element: event.relatedTarget.dataset.element,
    });
}
</script>

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
        width: 60%;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg {
            width: 100%;
            height: 100%;
        }
    }
}
.synergy {
    &.left {
        #left_synergy_1 {
            stroke-dasharray: 26px;
            stroke-dashoffset: -26px;
            transition: all 1s ease-in-out;
        }
        #left_synergy_2 {
            stroke-dasharray: 32px;
            stroke-dashoffset: -32px;
            transition: all 1s ease-in-out;
        }
        #left_synergy_apex {
            stroke-dasharray: 22px;
            stroke-dashoffset: 22px;
            transition: all 1s ease-in-out;
        }
        &:is(.appear) {
            #left_synergy_1,
            #left_synergy_2,
            #left_synergy_apex {
                stroke-dashoffset: 0;
            }
        }
    }
    &.right {
        #right_synergy_1 {
            stroke-dasharray: 26px;
            stroke-dashoffset: -26px;
            transition: all 1s ease-in-out;
        }
        #right_synergy_2 {
            stroke-dasharray: 32px;
            stroke-dashoffset: 32px;
            transition: all 1s ease-in-out;
        }
        #right_synergy_apex {
            stroke-dasharray: 22px;
            stroke-dashoffset: 22px;
            transition: all 1s ease-in-out;
        }
        &:is(.appear) {
            #right_synergy_1,
            #right_synergy_2,
            #right_synergy_apex {
                stroke-dashoffset: 0;
            }
        }
    }
    &.bottom {
        #bottom_synergy_1 {
            stroke-dasharray: 26px;
            stroke-dashoffset: -26px;
            transition: all 1s ease-in-out;
        }
        #bottom_synergy_2 {
            stroke-dasharray: 26px;
            stroke-dashoffset: 26px;
            transition: all 1s ease-in-out;
        }
        #bottom_synergy_apex {
            stroke-dasharray: 22px;
            stroke-dashoffset: 22px;
            transition: all 1s ease-in-out;
        }
        &:is(.appear) {
            #bottom_synergy_1,
            #bottom_synergy_2,
            #bottom_synergy_apex {
                stroke-dashoffset: 0;
            }
        }
    }
}
</style>
