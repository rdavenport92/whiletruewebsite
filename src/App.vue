<script setup>
import NavBar from './views/NavBar';
import 'vue3-toastify/dist/index.css';
</script>
<template>
  <video autoplay loop muted playsinline>
    <source
      src="https://whiletrueassets.s3.ca-central-1.amazonaws.com/bg_vid.mp4"
      type="video/webm"
    />
    <source
      src="https://whiletrueassets.s3.ca-central-1.amazonaws.com/bg_vid.mp4"
      type="video/mp4"
    />
  </video>
  <NavBar />
  <div class="app-body">
    <router-view />
  </div>
</template>

<style>
@import './assets//styles/variables.css';

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  background-color: var(--primary-color);
}
#app {
  font-family: 'Bebas Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  font-size: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
a {
  /* font-weight: bold; */
  color: var(--link);
  text-decoration: none;
}
a:hover {
  color: var(--link-hover);
  transition: ease-in-out all 0.2s;
}
h1 {
  font-size: 48px;
}
</style>

<style scoped>
.app-body {
  background-color: var(--body-background);
  flex: 1;
  overflow: scroll;
  padding-bottom: 32px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox, Safari 18.2+, Chromium 121+ */
}
video {
  z-index: -1000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>
