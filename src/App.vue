<script setup>
import NavBar from './views/NavBar';
</script>
<template>
  <video autoplay loop muted>
    <source src="./assets/wt_website_vid.mp4" type="video/webm" />
    <source src="./assets/wt_website_vid.mp4" type="video/mp4" />
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
  padding-top: 48px;
  padding-bottom: 32px;
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
