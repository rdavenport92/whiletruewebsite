<script setup>
import BeholdWidget from '@behold/vue';
import MailingListSignup from '../components/MailingListSignup.vue';
</script>
<template>
  <h1>Join Our Mailing List</h1>
  <MailingListSignup />
  <br />
  <h1>Feed</h1>
  <div class="ig-container">
    <BeholdWidget feed-id="S4oITuFmihmdgKwirUZ2" />
  </div>
</template>
<style scoped>
@media (max-width: 768px) {
  .ig-container {
    padding: 0 16px;
  }
}
</style>
