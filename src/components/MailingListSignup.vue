<script setup>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { ref } from 'vue';

const isSubmitting = ref(false);
const firstName = ref('');
const lastName = ref('');
const email = ref('');

const submitForm = async () => {
  if (!isSubmitting.value) {
    isSubmitting.value = true;

    try {
      await axios.post(
        `${process.env.VUE_APP_API_URI}/subscribe-to-newsletter`,
        {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        }
      );

      toast.success('Thank you for signing up for our newsletter!', {
        autoClose: 5000,
        position: 'bottom-right',
      });

      firstName.value = '';
      lastName.value = '';
      email.value = '';
    } catch (err) {
      toast.error(
        'Unable to sign up. Please visit whiletruemusic.beehiiv.com/subscribe to complete signup.',
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
  <div class="form-wrapper">
    <form id="newsletter-sub" @submit.prevent="submitForm">
      <div class="name-group">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            class="form-input"
            type="text"
            name="firstName"
            v-model="firstName"
            id="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            class="form-input"
            type="lastName"
            name="lastName"
            v-model="lastName"
            id="lastName"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div class="email-group">
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
        <div class="btn-wrapper">
          <ButtonComponent
            :success="true"
            type="submit"
            :disabled="isSubmitting"
            >Sign Up</ButtonComponent
          >
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.form-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.name-group {
  display: flex;
  gap: 24px;
  flex-direction: row;
}

.email-group {
  display: flex;
  gap: 24px;
}

.form-group {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  flex: 1;
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
form {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 600px;
}
</style>
