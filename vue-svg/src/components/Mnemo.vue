<template>
    <svg viewBox="0 0 300 300" width="300" height="300">
        <!--
        <MainSupplyView x={100} y={100} vm={app_model.main_supply} />
        <MotorView x={160} y={150} vm={app_model.motor} />

        <PaletteGrid x={0} y={0} />
        -->
        <!-- <rect x="0" y="0" width="20" height="20" /> -->

        <MainSupply :x="10" :y="10" :model="pro" />

        <!-- <DSensor :x=50 :y=50 /> -->
    </svg>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MainSupplyModel from '../project/MainSupplyModel';
import MainSupply from '../units/MainSupply.vue';
import DSensorModel from '../project/DSensorModel';

const pro = new MainSupplyModel()

onMounted(() => {
    setInterval(() => {

        // main supply
        const mab = pro.get_attr(MainSupplyModel.Attrs.block)
        mab.set_value(!mab.get_value())

        // sensors
        for (let s of pro.sensors) {
            s.set_error(!s.get_attr(DSensorModel.Attrs.error).get_value())
        }
    }, 1000)
})



</script>