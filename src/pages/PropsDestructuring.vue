<template>
    <div>
        <!-- <PropsComponents :name="name" />
        <button @click="name = '이준용'">이름 변경</button> -->
        <highlightjs
            language="vue"
            code="const { name = &#x22;홍길동&#x22;, msg = &#x22;어서오고&#x22; } = defineProps&#x3C;{
    name?: string;
    msg?: string;
}&#x3E;();"
        />
    </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import { PropsComponents } from "../components/pages";

// const name = ref("");
</script>

<style lang="scss"></style>
