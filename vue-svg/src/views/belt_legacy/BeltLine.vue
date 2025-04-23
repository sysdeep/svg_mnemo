<template>
    <g>
        <line v-for="c of chunks_list" :key="c.cid" :x1="c.x1" :y1="c.y1" :x2="c.x2" :y2="c.y2" :stroke="c.color"
            stroke-width="3" />
        <!-- <text :x="x" :y="y">{{ chunks.length }}</text> -->

        <!-- <g> -->
        <!-- <text v-for="(c, i) of chunks_list" :x="c.x1" :y="c.y1" :key="i">{{ c.color }}</text> -->
        <!-- <text v-for="(c, i) of chunks" :x="c.x2" :y="c.y2" :key="i">e</text> -->
        <!-- </g> -->
    </g>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';


type Props = {
    x: number
    y: number
    chunks: number
}
const props = defineProps<Props>()

type Chunk = {
    cid: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    color: string,
}

const len = 18


const chunks_list = ref<Chunk[]>([...make_chunks()])

const rotate = () => {
    console.log("rotate")
    // chunks.value = [
    //     ...chunks.value.slice(chunks.value.length - 1, chunks.value.length),
    //     ...chunks.value.slice(0, chunks.value.length - 1),
    // ]

    chunks_list.value = [...chunks_list.value.slice(1, chunks_list.value.length), ...chunks_list.value.slice(0, 1)]
    // console.log(chunks_list.value[0].color)
}

onMounted(() => {
    // setInterval(() => {
    //     rotate()
    // }, 1000)
})

function make_chunks(): Chunk[] {
    let cks: Chunk[] = []
    let c_counter = 0;
    for (let i = 0; i < props.chunks; i++) {

        // let color = c_counter % 3 ? "#984000" : "#8A3A00"
        let color = c_counter % 3 ? "#8A3A00" : "red"
        cks.push({
            cid: i,
            x1: props.x + (i * len),
            y1: props.y,
            x2: props.x + (i * len) + len,
            y2: props.y,
            color: color,
        })

        c_counter++
    }

    return cks
}

</script>