<template>
    <header>
        <button v-if="route.name != 'HOME'" @click="router.back">
            <img src="/images/ic-left-arrow.svg" alt="뒤로가기" />
        </button>
        <div>
            {{ route.meta.name }}
        </div>
    </header>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped>
header {
    position: relative;
    padding: 16px 24px;

    border-bottom: 1px solid #bbb;

    button {
        position: absolute;
        z-index: 10;
        height: 21px;

        img {
            height: 100%;
        }
    }

    > div {
        text-align: center;
    }
}
</style>
