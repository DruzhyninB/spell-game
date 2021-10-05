<script setup>
import { useStore } from "vuex";
import { computed, reactive } from "vue";

import ElementItem from "./ElementItem/ElementItem.vue";
import SourceItem from "./SourceItem/SourceItem.vue";

const store = useStore();
const elements = computed(() => store.state.elements);
const sources = computed(() => store.state.sources);

let state = reactive({
    activeTab: 0,
});
</script>

<template>
    <div class="spell-menu">
        <div class="spell-menu__bar">
            <div
                class="spell-menu__bar-item"
                :class="{ active: state.activeTab === 0 }"
                @click="state.activeTab = 0"
            >
                Элементы
            </div>
            <div
                class="spell-menu__bar-item"
                :class="{ active: state.activeTab === 1 }"
                @click="state.activeTab = 1"
            >
                Источники
            </div>
            <div
                class="spell-menu__bar-item"
                :class="{ active: state.activeTab === 2 }"
                @click="state.activeTab = 2"
            >
                Базы
            </div>
            <div
                class="spell-menu__bar-item"
                :class="{ active: state.activeTab === 3 }"
                @click="state.activeTab = 3"
            >
                Формы
            </div>
        </div>

        <div class="spell-menu__wrapper" v-if="state.activeTab === 0">
            <div class="spell-menu__title">Элементы</div>
            <div class="spell-menu__container">
                <ElementItem
                    :className="'spell-menu__item'"
                    :item="element"
                    v-for="element in elements"
                    :key="element.id"
                />
            </div>
        </div>

        <div class="spell-menu__wrapper" v-if="state.activeTab === 1">
            <div class="spell-menu__title">Источники силы</div>
            <div class="spell-menu__container">
                <SourceItem
                    :className="'spell-menu__item'"
                    :item="source"
                    v-for="source in sources"
                    :key="source.id"
                />
            </div>
        </div>
        <div class="spell-menu__wrapper" v-if="state.activeTab === 2">
            <div class="spell-menu__title">Базы</div>
            <div class="spell-menu__container"></div>
        </div>
        <div class="spell-menu__wrapper" v-if="state.activeTab === 3">
            <div class="spell-menu__title">Формы</div>
            <div class="spell-menu__container"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.spell-menu {
    width: 100%;
    height: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &:after {
        content: "";
        display: block;
        width: 155%;
        height: 100%;
        position: absolute;
        top: 4%;
        left: 0%;
        background-repeat: no-repeat;
        background-size: 130%;
        background-position: 7% 75%;
        background-image: url(/src/assets/book.png);
        z-index: -1;
    }
    &__title {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 2px;
    }
    &__wrapper {
        width: 80%;
        height: 80%;
    }
    &__container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    &__bar {
        display: flex;
        position: absolute;
        top: 3%;
        left: 6%;
        &-item {
            background-repeat: no-repeat;
            background-size: 260px;
            background-position: -12px -14px;
            padding: 5px 10px;
            background-image: url(/src/assets/book.png);
            box-shadow: inset -6px 0px 6px -6px #000000;
            transition: all 0.45 linear;
            cursor: pointer;
            &:last-of-type,
            &.active {
                box-shadow: inset 0px 0px 0px 0px #000000;
            }

            &.active + & {
                box-shadow: inset -6px 0px 6px -6px #000000,
                    inset 6px 0px 6px -6px #000000;
                &:last-of-type {
                    box-shadow: inset 6px 0px 6px -6px #000000;
                }
            }
        }
    }
}
</style>
