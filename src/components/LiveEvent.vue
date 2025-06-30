<script setup>
import { CalendarIcon } from '@heroicons/vue/24/solid';
import { defineProps } from 'vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const props = defineProps(['event']);

const navigateToLink = (url) => window.open(url, '_blank');
</script>
<template>
  <div class="event-wrapper">
    <div class="date">
      <div class="calendar-wrapper">
        <CalendarIcon />
      </div>
      <span>{{ props.event.prettyDate }}</span>
    </div>
    <div class="location">
      <span>{{ props.event.location }}</span>
      <span class="venue">{{ props.event.venue }}</span>
    </div>
    <div class="cta">
      <div v-if="props.event.tickets">
        <ButtonComponent
          :success="true"
          @click="navigateToLink(props.event.tickets.url)"
          >Buy Tickets</ButtonComponent
        >
      </div>
      <div>
        <ButtonComponent @click="navigateToLink(props.event.url)"
          >More Details</ButtonComponent
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.event-wrapper {
  margin: 16px;
  justify-content: center;
  padding: 16px;
  display: flex;
  flex-direction: row;
  background-color: var(--card-background);
  border-radius: 4px;
  width: 800px;
}

.event-wrapper div {
  flex: 1;
}
.event-row {
  display: flex;
  justify-content: center;
}
.date {
  display: flex;
  gap: 4px;
  align-items: center;
  height: 100%;
}
.location {
  font-size: 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.event-title {
  font-weight: 600;
}
.calendar-wrapper {
  max-width: 24px;
  display: flex;
}
.venue {
  color: var(--secondary-color);
}
.cta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}
.cta div {
  display: flex;
  align-items: center;
  width: 75%;
}
.cta button {
  width: 100%;
  height: 100%;
}
</style>
