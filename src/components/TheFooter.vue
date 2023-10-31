<template>
    <footer>
        <router-link :to="{ name: next }">{{
            next === "HOME" ? "홈으로" : "다음"
        }}</router-link>
    </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { Meta } from "../router";

const route = useRoute();
const next = computed(() => (route.meta as Meta).next);
</script>

<style lang="scss" scoped>
footer {
    padding: 16px 24px;
    text-align: center;
}
</style>
