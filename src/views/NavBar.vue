<template>
  <div class="head">
    <div class="logo-wrapper">
      <img
        alt="while(true) logo"
        src="https://whiletrueassets.s3.ca-central-1.amazonaws.com/logo.png"
      />
    </div>
    <div class="links-wrapper">
      <div class="top-wrapper">
        <div class="stream">
          <iframe
            style="border: 0; width: 100%; height: 42px"
            src="https://bandcamp.com/EmbeddedPlayer/track=3338345172/size=small/bgcol=333333/linkcol=ffffff/transparent=true/"
            seamless
          ></iframe>
        </div>
        <div class="socials-wrapper">
          <a href="https://www.instagram.com/whiletruemusic" target="_blank">
            <img src="../assets/socials/ig.png" />
          </a>
          <a href="https://www.facebook.com/whiletruemusic" target="_blank">
            <img src="../assets/socials/fb.png" />
          </a>
          <a href="https://www.youtube.com/whiletruemusic_" target="_blank">
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
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/media">Media</router-link>
        <router-link to="/shows">Shows</router-link>
        <!-- <router-link to="/merch">Merch</router-link> -->
        <a href="https://whiletruemusic.bandcamp.com/merch" target="_blank"
          >Merch</a
        >
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 115px;
}

.head {
  display: flex;
  padding: 24px 0px 24px 24px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--header-background);
}

.logo-wrapper {
  display: flex;
  flex: 1;
}

.stream {
  flex: 1;
  padding-right: 24px;
}

.top-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.socials-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 4px;
  padding-right: 32px;
  gap: 24px;
}

.socials-wrapper img {
  max-width: 22px;
  max-height: 22px;
}

.socials-wrapper img:hover {
  cursor: pointer;
}

.links-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
}

nav a {
  text-decoration: none;
  color: var(--nav-link);
  flex: 1;
}

nav a:hover {
  color: var(--link-hover);
  transition: ease-in-out all 0.2s;
}

nav {
  font-size: 28px;
  width: 100%;
  height: 24px;
  display: flex;
  color: var(--primary-color);
  align-items: center;
  justify-content: center;
}

nav a.router-link-exact-active {
  color: var(--link-active);
}
</style>
