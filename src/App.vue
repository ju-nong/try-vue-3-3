<template>
    <div class="container">
        <TheHeader />
        <div class="container-visual">
            <router-view></router-view>
        </div>
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import { TheHeader, TheFooter } from "./components";
</script>

<style lang="scss" scoped>
.container {
    max-width: 400px;
    width: 100%;
    height: 100%;

    &-visual {
        padding: 16px 8px;
        height: calc(100% - 108px);
    }
}
</style>
