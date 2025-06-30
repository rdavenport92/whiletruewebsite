<script setup>
import axios from 'axios';
import { reset } from '@formkit/vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const submitForm = async (data) => {
  try {
    await axios.post(`${process.env.VUE_APP_API_URI}/contact`, data);
    reset('contact');
    toast.success('Thank you for your message!', {
      autoClose: 5000,
      position: 'bottom-right',
    });
  } catch (err) {
    toast.error(
      'Unable to submit message. Please manually send email to whiletruemusic@gmail.com instead.',
      {
        autoClose: 5000,
        position: 'bottom-right',
      }
    );
  }
};
</script>
<template>
  <h1>Contact Us</h1>
  <div class="form-wrapper">
    <FormKit type="form" id="contact" @submit="submitForm">
      <FormKit
        type="text"
        name="name"
        id="name"
        label="Name"
        validation="required"
        placeholder="“Jon Doe”"
      />
      <FormKit
        type="text"
        name="email"
        id="email"
        label="Email Address"
        validation="required|*email"
        placeholder="youremail@something.com"
      />
      <FormKit
        type="textarea"
        name="message"
        id="message"
        label="Your Message"
        validation="required"
        placeholder="What do you have to say?"
      />
    </FormKit>
  </div>
</template>
<style scoped>
.form-wrapper {
  height: 100%;
  margin-left: 0;
  margin-right: auto;
  display: flex;
  justify-content: center;
}

button {
  width: 160px;
  min-height: 56px;
  font-size: 24px;
}
</style>
<style>
.formkit-label {
  font-family: 'Bebas Neue', sans-serif !important;
}

.formkit-input {
  font-family: 'Bebas Neue', sans-serif !important;
}

.formkit-inner {
  background-color: var(--primary-color) !important;
  width: 480px;
}

.formkit-wrapper button {
  background-color: var(--btn-success) !important;
  font-family: 'Bebas Neue', sans-serif !important;
}

@media (max-width: 576px) {
  .formkit-inner {
    width: 424px;
  }
}
</style>
