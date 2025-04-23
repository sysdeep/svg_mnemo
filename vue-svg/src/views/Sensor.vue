<template>
    <!-- <circle :cx=x :cy=y :r="size / 2" :fill=color onMouseDown={()=> onClick()} -->
    <g>

        <circle :cx=x :cy=y :r="r_main" fill="gray" />
        <circle :cx=x :cy=y :r="r_inner" :fill=color />
    </g>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


type Props = {
    x: number;
    y: number;
    color: string;
    size: number;
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