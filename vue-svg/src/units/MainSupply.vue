<template>
    <g>
        <rect :width="width" :height="height" :x="x" :y="y" rx="5" :fill="color" @click="do_click" />

        <g>
            <DSensor v-for="(sid, i) in sensors" :key="i" :model="sid.sid" :x="sid.x" :y="sid.y" />
        </g>

        <!-- {sensors_view} -->

        <!-- <DSensorErrorView x={x + 30} y={y + 14} size={24} vm={vm.emergency_sensor} /> -->
    </g>
</template>

<script lang="ts" setup>

import { computed, ref } from 'vue';
import type MainSupplyModel from '../project/MainSupplyModel';
import DSensor from './DSensor.vue';
import useMainSupply from './useMainSupply';

type Props = {
    x: number;
    y: number;
    model: MainSupplyModel
}

const props = defineProps<Props>()

const width = 50
const height = 60

const { is_block, is_error } = useMainSupply(props.model)

const color = computed(() => {
    if (is_block.value) return "gray"
    if (is_error.value) return "red"
    return is_click.value ? "brown" : "purple"
})

const is_click = ref<boolean>(false)

const sensors = props.model.sensors.map((sid, i) => {
    return {
        sid: sid,
        x: width - 4,
        y: 0 + 12 + 4 + ((12 + 4) * i),
    }
})

const do_click = () => {
    is_click.value = !is_click.value
}

</script>