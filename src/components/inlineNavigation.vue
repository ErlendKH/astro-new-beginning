<script setup lang="ts">

const props = defineProps<{
    pages?: any[]
}>();

</script>

<template>
    <div style="display: flex; flex-direction: column; font-style:italic;">
        <template v-for="page in pages">
            <a href={{ page.href }}>{{ page.title }}</a>
        </template>
        <!-- 
        <a href="/">Home, sweet home</a>
        <a href="/about/">About</a>
         -->
    </div>
</template>