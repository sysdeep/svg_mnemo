<template>
    <!-- <circle :cx=x :cy=y :r="size / 2" :fill=color onMouseDown={()=> onClick()} -->
    <g>

        <circle :cx=x :cy=y :r="r_main" :fill=color_bg />
        <circle :cx=x :cy=y :r="r_inner" :fill=color_fg />
    </g>
</template>

<script lang="ts" setup>
import { computed } from 'vue';



type Props = {
    x: number;
    y: number;
    color_fg: string;
    color_bg: string;
    size: number;
    // state: boolean
    // onClick: () => void;
}

const props = defineProps<Props>()

const r_main = computed(() => {
    return props.size / 2
})

const r_inner = computed(() => {
    return props.size * 0.8 / 2
})



</script>