<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const element = computed(() => store.state.dashboard.element);
</script>

<template>
    <div class="spell-dashboard" ref="root">
        <div v-if="element">
            <div class="sd-element-type">Елемент</div>
            <div class="sd-element-name">{{element.label}}</div>
            <div class="sd-element-description">{{element.description}}</div>
        </div>
    </div>
</template>
 
<style scoped lang="scss">
.spell-dashboard {
    width: 100%;
    height: 30vh;
    display: block;
    background-color: white;
    padding: 2rem;
}
.sd{
    &-element{
        &-name{
            font-size: 2rem;
        }
        &-description{
            font-size: 1.5rem;
        }
    }
}
</style>
