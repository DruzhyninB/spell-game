<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import Element from "./Element/Element.vue";

const store = useStore();
const spells = computed(() => store.state.elements);
</script>

<template>
    <div class="spell-menu">
        <div class="spell-menu__wrapper">
            <div class="spell-menu__title">Элементы</div>
            <div class="spell-menu__container">
                <Element
                    :className="'spell-menu__item'"
                    :item="spell"
                    v-for="spell in spells"
                    :key="spell.name"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.spell-menu {
    &__title {
        font-size: 2rem;
        text-align: center;
        letter-spacing: 2px;
    }
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
        background-image: url(/src/assets/book1.png);
        z-index: -1;
    }
    &__wrapper {
        width: 80%;
        height: 80%;
    }
    &__container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>
