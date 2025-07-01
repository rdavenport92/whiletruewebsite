<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import LiveEvent from '../components/LiveEvent.vue';

const events = ref([]);
const error = ref(false);
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  try {
    const result = await axios.get(`${process.env.VUE_APP_API_URI}/shows`);
    events.value = result.data;
  } catch (err) {
    error.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>
<template>
  <div class="shows">
    <h1>Upcoming Shows</h1>
    <Transition>
      <div v-if="!isLoading && !error">
        <LiveEvent v-for="event of events" :key="event.title" :event="event" />
      </div>
    </Transition>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">
      An error occurred while trying to display upcoming shows. Please visit
      <a href="https://www.bandsintown.com/a/15572863-while(true)"
        >Bandsintown</a
      >
      for more details.
    </div>
  </div>
</template>
<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.shows {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
