<template>
    <Sensor :x="x" :y="y" :size="size" :color="color" @click="do_click" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Sensor from "../views/Sensor.vue"
import useDSensor from "./useDSensor";
import type DSensorModel from "../project/DSensorModel";


type Props = {
    x: number;
    y: number;
    model: DSensorModel
}

const props = defineProps<Props>()

const size = 12


const { is_active, is_block, is_error, on_click } = useDSensor(props.model)

const color = computed(() => {
    if (is_block.value) return "gray"
    if (is_error.value) return "red"
    return is_active.value ? "green" : "yellow"
})

const do_click = () => {
    on_click()
}

</script>