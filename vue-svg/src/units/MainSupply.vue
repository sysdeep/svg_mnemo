<template>
    <g>
        <rect :width="width" :height="height" :x="x" :y="y" rx="5" :fill="color" />


        <!-- {sensors_view} -->

        <!-- <DSensorErrorView x={x + 30} y={y + 14} size={24} vm={vm.emergency_sensor} /> -->
    </g>
</template>

<script lang="ts" setup>

type Props = {
    x: number;
    y: number;
}

const props = defineProps<Props>()

const width = 50
const height = 60
const color = "brown"
const size = 20

</script>