<template>
    <svg viewBox="0 0 300 300" width={300} height={300}>
        <!--
        <MainSupplyView x={100} y={100} vm={app_model.main_supply} />
        <MotorView x={160} y={150} vm={app_model.motor} />

        <PaletteGrid x={0} y={0} />
        -->
        <rect x="0" y="0" width="20" height="20" />

        <MainSupply :x="10" :y="10" />

        <DSensor :x=50 :y=50 />
    </svg>
</template>

<script setup lang="ts">
import DSensor from '../units/DSensor.vue';
import MainSupply from '../units/MainSupply.vue';

</script>