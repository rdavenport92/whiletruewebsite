<script setup>
import BandcampPlayer from '@/components/BandcampPlayer.vue';
import NavItems from '@/components/NavItems.vue';
import { useMediaQuery } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { Slide } from 'vue3-burger-menu';

const router = useRouter();
const is768 = useMediaQuery('(max-width: 768px)');
</script>
<template>
  <div class="head">
    <div class="logo-wrapper">
      <Slide v-if="is768" :closeOnNavigation="true" right width="192">
        <div class="hamburger-items">
          <NavItems />
        </div>
      </Slide>
      <img
        alt="while(true) logo"
        src="https://whiletrueassets.s3.ca-central-1.amazonaws.com/logo.png"
        @click="router.push({ name: 'home' })"
      />
    </div>
    <div class="links-wrapper">
      <div class="top-wrapper">
        <div class="stream">
          <BandcampPlayer />
        </div>
        <div class="socials-wrapper">
          <a href="https://www.instagram.com/whiletruemusic" target="_blank">
            <img src="../assets/socials/ig.png" />
          </a>
          <a href="https://www.facebook.com/whiletruemusic" target="_blank">
            <img src="../assets/socials/fb.png" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9lrz0HXUKUcnEgg4-hctHQ"
            target="_blank"
          >
            <img src="../assets/socials/yt.png" />
          </a>
          <a
            href="https://open.spotify.com/artist/1IOLV8Y0tg9Mmne9MVdqcq?si=Bm16wF40TmukGRUTUoL4rA"
            target="_blank"
          >
            <img src="../assets/socials/spotify.png" />
          </a>
          <a href="https://whiletruemusic.bandcamp.com/" target="_blank">
            <img src="../assets/socials/bc.png" />
          </a>
        </div>
      </div>
      <NavItems v-if="!is768" />
    </div>
  </div>
</template>
<style scoped>
img {
  height: 115px;
}

img:hover {
  cursor: pointer;
  opacity: 0.9;
  transition: ease-in-out 0.2s;
}

.hamburger-items nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 32px;
  transform: translateY(128px);
}

.head {
  display: flex;
  padding: 24px 0px 24px 24px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--header-background);
}

@media (max-width: 768px) {
  .head {
    align-items: center;
    flex-direction: column;
    padding-bottom: 16px;
    padding: 24px 16px 8px 16px;
  }
}

.logo-wrapper {
  display: flex;
  flex: 1;
}

@media (max-width: 768px) {
  .logo-wrapper {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .logo-wrapper {
    width: 100%;
    justify-content: flex-start;
  }
}

@media (max-width: 576px) {
  .logo-wrapper img {
    max-height: 72px;
  }
}

.stream {
  flex: 1;
  padding-right: 24px;
}

@media (max-width: 1024px) {
  .stream {
    padding-left: 32px;
    padding: 16px;
  }
}

@media (max-width: 768px) {
  .stream {
    padding-top: 8px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .links-wrapper {
    width: 100%;
  }
}

.top-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .top-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: column-reverse;
    height: 100%;
  }
}

.socials-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  padding-right: 32px;
  gap: 24px;
}

@media (max-width: 768px) {
  .socials-wrapper {
    flex: 1;
    justify-content: center;
    padding-top: 16px;
    padding-right: 0;
  }
}

.socials-wrapper img {
  max-width: 22px;
  max-height: 22px;
}

@media (max-width: 576px) {
  .socials-wrapper {
    gap: 24px;
    justify-content: flex-start;
    padding-top: 16px;
  }
  .socials-wrapper img {
    max-width: 20px;
    max-height: 20px;
  }
}

.socials-wrapper img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.links-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
<style>
.bm-burger-bars {
  background-color: var(--primary-color) !important;
}

.bm-burger-button {
  right: 36px !important;
  left: auto !important;
}

.hamburger-items nav {
  display: flex !important;
  justify-content: center !important;
  align-items: flex-end !important;
  padding-right: 16px !important;
}
</style>
