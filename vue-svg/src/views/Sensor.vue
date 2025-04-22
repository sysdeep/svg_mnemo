<template>
    <!-- <circle :cx=x :cy=y :r="size / 2" :fill=color onMouseDown={()=> onClick()} -->
    <circle :cx=x :cy=y :r="size / 2" :fill=color />
</template>

<script lang="ts" setup>

type Props = {
    x: number;
    y: number;
    color: string;
    size: number;
    // onClick: () => void;
}

const props = defineProps<Props>()

</script>