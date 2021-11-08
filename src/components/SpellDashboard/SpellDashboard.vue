<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const target = computed(() => store.state.dashboard.target);
</script>

<template>
    <div class="spell-dashboard" ref="root">
        <div v-if="target">
            <div class="sd-element-name">{{ target.label }}</div>
            <div class="sd-element-description">{{ target.description }}</div>
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
.sd {
    &-element {
        &-name {
            font-size: 2rem;
        }
        &-description {
            font-size: 1.5rem;
        }
    }
}
</style>
