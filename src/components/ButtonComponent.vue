<script setup>
import { defineEmits, defineProps } from 'vue';

const emits = defineEmits(['click']);
const props = defineProps(['success']);

const backgroundStyle = props.success ? 'var(--btn-success)' : 'transparent';
</script>
<template>
  <button @click="emits('click')"><slot></slot></button>
</template>
<style scoped>
button {
  border: var(--btn-border);
  color: var(--primary-color);
  border-radius: 4px;
  background-color: v-bind(backgroundStyle);
  max-height: 40px;
  font-family: inherit;
  font-size: 18px;
}

button:hover {
  cursor: pointer;
  background-color: var(--btn-hover);
  transition: ease-in-out all 0.2s;
}
</style>
