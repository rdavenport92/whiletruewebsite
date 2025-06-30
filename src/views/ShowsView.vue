<template>
  <div class="shows">
    <h1>Upcoming Shows</h1>
    <template v-for="event of events" :key="event.title">
      <LiveEvent :event="event" />
    </template>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import LiveEvent from '../components/LiveEvent.vue';

const events = ref([]);

onMounted(async () => {
  const result = await axios.get(`${process.env.VUE_APP_API_URI}/shows`);
  events.value = result.data;
});
</script>
<style scoped>
.shows {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
