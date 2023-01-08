<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Quill from '../lib/quill';
const editor = ref();

onMounted(() => {
    new Quill(editor.value, {
        theme: 'snow'
    });
})
</script>

<template>
    <div ref="editor" id="editor">
    </div>
</template>

<style scoped>
body {
    margin: 0;
}
</style>