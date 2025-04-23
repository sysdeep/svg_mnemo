<template>
    <g :transform='trans'>
        <!-- <g> -->
        <!-- // спицы -->
        <line :x1="x + 2" :y1="y + half_size" :x2="x + size - 2" :y2="y + half_size" stroke-width="4"
            stroke="#9D4C16" />

        <line :x1="x + half_size" :y1="y + 2" :x2="x + half_size" :y2="y + size - 2" stroke-width="4"
            stroke="#9D4C16" />

        <!-- // big circle -->
        <circle :r="half_size" :cx="x + half_size" :cy="y + half_size" stroke-width="4" stroke="#9D4C16" fill="none" />

        <!-- // inner big circle -->
        <circle :r="8" :cx="x + half_size" :cy="y + half_size" stroke-width="3" stroke="#9D4C16" fill="none" />

        <!-- // inner gray border -->
        <circle :r="5" :cx="x + half_size" :cy="y + half_size" fill="#d8d8d8" />

        <!-- // inner black dot -->
        <circle :r="4" :cx="x + half_size" :cy="y + half_size" fill="#5b514a" />

    </g>
</template>

<script setup lang="ts">
/**
 * https://css-live.ru/articles/transformacii-dlya-svg-elementov.html
 */
import { computed, onMounted, ref } from 'vue';


type Props = {
    x: number
    y: number
}
const props = defineProps<Props>()

const size = 36
const half_size = size / 2
const ox = props.x + half_size
const oy = props.y + half_size

const angle = ref<number>(0)

const trans = computed(() => {
    return `rotate(${angle.value} ${ox} ${oy})`
})

// const COLORS = {
//     [ColorState.normal]: '#9D4C16',
//     [ColorState.active]: '#c0642c',
//     [ColorState.block]: '#8a8a8a',
//     [ColorState.imitation]: '#2A7CBB',
//     [ColorState.error]: 'red',
// }

onMounted(() => {
    setInterval(() => {
        angle.value = angle.value + 30
    }, 500);
})


</script>