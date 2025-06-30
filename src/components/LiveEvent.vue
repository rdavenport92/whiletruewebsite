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
      <ButtonComponent
        v-if="props.event.tickets"
        :success="true"
        @click="navigateToLink(props.event.tickets.url)"
        >Buy Tickets</ButtonComponent
      >
      <ButtonComponent @click="navigateToLink(props.event.url)"
        >More Details</ButtonComponent
      >
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
  width: 680px;
}

@media (max-width: 768px) {
  .event-wrapper {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .event-wrapper {
    flex-direction: column;
  }
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
  width: 128px;
}
.location {
  flex: 1;
  font-size: 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 768px) {
  .location {
    padding-top: 16px;
    font-size: 48px;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .venue {
    font-size: 36px;
  }
}

@media (min-width: 769px) {
  .venue {
    font-size: 24px;
  }
}
.event-title {
  font-weight: 600;
}
.calendar-wrapper {
  width: 24px;
  display: flex;
}
.venue {
  color: var(--secondary-color);
}
.cta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 128px;
}
@media (max-width: 768px) {
  .cta {
    padding-top: 24px;
    flex-direction: row;
    width: 100%;
  }
  .cta button {
    max-width: 192px;
    min-height: 48px;
    font-size: 24px;
  }
}
.cta div {
  display: flex;
  align-items: center;
}
.cta button {
  width: 100%;
  height: 100%;
}
</style>
