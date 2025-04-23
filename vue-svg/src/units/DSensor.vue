<template>
    <Lamp :x="x" :y="y" :size="size" :color_bg="color_bg" :color_fg="color_fg" @click="do_click" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useDSensor from "./useDSensor";
import type DSensorModel from "../project/DSensorModel";
import Lamp from "../views/Lamp.vue";
import { DSensorLampColor } from "./DSensorLampColor";



// off(main, blick), on(main, blick)
const colors_map = {
    // # DSensorLampColor.green 	: (("#4d590d", "#9bbe89"), ("#8fd400", "#caffbb")),
    // # DSensorLampColor.green 	: (("#4d590d", "#9bbe89"), ("#8fd400", "#8eff6f")),

    [DSensorLampColor.green]: [
        ["#4d590d", "#9bbe89"],
        ["#8fd400", "#caffbb"],
    ],
    [DSensorLampColor.blue]: [
        ["#01648e", "#aaaaaa"],
        ["#5fdaff", "#d2edf6"],
    ],
    [DSensorLampColor.red]: [
        ["#890500", "#c52a2a"],
        ["#ff1616", "#f76262"],
    ],
    [DSensorLampColor.gray]: [
        ["#424848", "#afafaf"],
        ["#9c9d9d", "#d7d7d7"],
    ],
    // # DSensorLampColor.yellow 	: [["#faff34", "#feffe3"], ["#dfd40f", "#ecf0b9"]],
    [DSensorLampColor.yellow]: [
        ["#ca8a04", "#feffe3"],
        ["#fef08a", "#ecf0b9"],
    ],
};

type Props = {
    x: number;
    y: number;
    // color: DSensorLampColor
    model: DSensorModel
}

const props = defineProps<Props>()

const size = 12


const { is_active, is_block, is_error, on_click } = useDSensor(props.model)
const primary_color = colors_map[DSensorLampColor.green]


const color_fg = computed(() => {
    if (is_block.value) return "gray"
    if (is_error.value) return "red"

    let colors_pair = is_active.value ? primary_color[1] : primary_color[0];
    return colors_pair[0]
})


// """цвет обводки - если сработанное состояние - выбираем самый тёмный"""
const BG_COLOR = "#e9e9e9";
const color_bg = computed(() => {
    if (is_active.value) return primary_color[0][0];

    return BG_COLOR;
})


const do_click = () => {
    on_click()
}

</script>