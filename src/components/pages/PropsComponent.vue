<template>
    <div>{{ name }}, {{ msg }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { name = "홍길동", msg = "어서오고" } = defineProps<{
    name?: string;
    msg?: string;
}>();
</script>

<style lang="scss"></style>
