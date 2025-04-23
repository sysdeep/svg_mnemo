<template>
    <g>
        <Wheel :x="x" :y="y" />
        <Wheel :x="x + 8 * 6" :y="y" />

        <BeltLine :x="x" :y="y" :chunks="6" />
        <BeltLine :x="x" :y="y + 32" :chunks="6" />
    </g>
</template>

<script lang="ts" setup>
import Wheel from './Wheel.vue';
import BeltLine from './BeltLine.vue';
type Props = {
    x: number
    y: number
}

defineProps<Props>()
</script>