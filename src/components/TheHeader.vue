<template>
    <div class="header">
        <button
            v-if="route.name != 'HOME'"
            class="header-back"
            @click="router.back"
        >
            <img src="/images/ic-left-arrow.svg" alt="뒤로가기" />
        </button>
        <div class="header-title">
            <p>{{ route.meta.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    padding: 16px 24px;
    height: 50px;

    &-back {
        position: absolute;
        z-index: 10;
        height: 21px;

        img {
            height: 100%;
        }
    }

    &-title {
        text-align: center;
    }
}
</style>
