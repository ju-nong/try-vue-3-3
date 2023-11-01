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

//https://mokkapps.de/blog/whats-new-in-vue-3-3#props-destructuring
//https://blog.vuejs.org/posts/vue-3-3
//https://www.youtube.com/watch?v=Z-qLPtWFZps
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
