<template>
    <Sensor :x="x" :y="y" :size="size" color="red" />
</template>

<script lang="ts" setup>
import Sensor from "../views/Sensor.vue"

type Props = {
    x: number;
    y: number;
}

const props = defineProps<Props>()

const size = 20

</script>