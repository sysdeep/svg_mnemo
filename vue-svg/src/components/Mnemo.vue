<template>
    <svg viewBox="0 0 300 300" width="300" height="300">
        <!--
        <MainSupplyView x={100} y={100} vm={app_model.main_supply} />
        <MotorView x={160} y={150} vm={app_model.motor} />

        <PaletteGrid x={0} y={0} />
        -->
        <!-- <rect x="0" y="0" width="20" height="20" /> -->

        <MainSupply :x="10" :y="10" :model="pro" />

        <!-- <rect x="70" y="70" width="32" height="32" stroke="black" fill="none" /> -->
        <!-- <Wheel :x="70" :y="70" /> -->
        <!-- <Wheel :x="70" :y="100" />
        <Wheel :x="70" :y="130" />
        <Wheel :x="70" :y="160" />

        <Wheel :x="110" :y="70" />
        <Wheel :x="110" :y="100" />
        <Wheel :x="110" :y="130" />
        <Wheel :x="110" :y="160" />

        <Wheel :x="150" :y="70" />
        <Wheel :x="150" :y="100" />
        <Wheel :x="150" :y="130" />
        <Wheel :x="150" :y="160" /> -->

        <Belt :x="100" :y="100" />



        <!-- <DSensor :x=50 :y=50 /> -->
    </svg>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MainSupplyModel from '../project/MainSupplyModel';
import MainSupply from '../units/MainSupply.vue';
import DSensorModel from '../project/DSensorModel';
import Wheel from '../views/belt_legacy/Wheel.vue';
import Belt from '../views/belt_legacy/Belt.vue';

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