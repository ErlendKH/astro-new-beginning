<script setup lang="ts">

const props = defineProps<{
    pages: any[]
    // pages: {
    //     route: string,
    //     title: string,
    // }[]
}>();

console.log(props?.pages)

</script>

<template>
    <div style="display: flex; flex-direction: column; font-style:italic;">
        <template v-for="page in props.pages">
            <a :href=page.route >{{ page.title }}</a>
        </template>
    </div>
</template>