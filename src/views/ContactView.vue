<script setup>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import ButtonComponent from '@/components/ButtonComponent.vue';
import 'vue3-toastify/dist/index.css';
import { ref } from 'vue';

const isSubmitting = ref(false);
const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
  if (!isSubmitting.value) {
    isSubmitting.value = true;

    try {
      await axios.post(`${process.env.VUE_APP_API_URI}/contact`, {
        name: name.value,
        email: email.value,
        message: message.value,
      });
      toast.success('Thank you for your message!', {
        autoClose: 5000,
        position: 'bottom-right',
      });
      name.value = '';
      email.value = '';
      message.value = '';
    } catch (err) {
      toast.error(
        'Unable to submit message. Please manually send email to whiletruemusic@gmail.com instead.',
        {
          autoClose: 5000,
          position: 'bottom-right',
        }
      );
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>
<template>
  <h1>Contact Us</h1>
  <div class="form-wrapper">
    <form id="contact" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-input"
          type="text"
          name="name"
          v-model="name"
          id="name"
          placeholder="Jon Doe"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          class="form-input"
          type="email"
          name="email"
          v-model="email"
          id="email"
          placeholder="youremail@something.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea
          class="form-input"
          name="message"
          v-model="message"
          id="message"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div class="btn-wrapper">
        <ButtonComponent :success="true" type="submit" :disabled="isSubmitting"
          >Submit</ButtonComponent
        >
      </div>
    </form>
  </div>
</template>
<style scoped>
.form-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
}

.form-group {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  width: 440px;
}

button {
  width: 160px;
  min-height: 56px;
  font-size: 24px;
}
.btn-wrapper {
  padding-top: 16px;
}
.form-input {
  height: 32px;
  font-family: inherit;
  font-size: 18px;
  width: 312px;
  width: 100%;
}
#label {
  font-size: 18px;
}
textarea {
  min-height: 128px;
}
@media (max-width: 576px) {
  .form-wrapper {
    width: 100%;
    display: flex;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-group {
    width: 85%;
  }
}
</style>
