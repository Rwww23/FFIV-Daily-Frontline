<template>
    <span>轮换规则：</span>
    <div class="rotation">
        <template v-for="(map, index) in frontlineALL" :key="index" >
            <div :class="{ 'highlight': index === currentIndex }">{{ map }}</div>
            <span v-if="index < frontlineALL.length - 1">→</span>
        </template>        
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { frontlineALL, getMapIndex, getMap } from '../utils/getMap';

const today = new Date();
console.log(today)
console.log(getMap(today))
console.log(getMapIndex(today))
const currentIndex = ref(getMapIndex(today));
</script>

<style scoped>
.highlight {
    color: rgb(50, 82, 239);
    font-weight: bold;
}
.rotation {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>