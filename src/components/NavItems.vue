<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/media">Media</router-link>
    <router-link to="/shows">Shows</router-link>
    <!-- <router-link to="/merch">Merch</router-link> -->
    <a href="https://whiletruemusic.bandcamp.com/merch" target="_blank"
      >Merch</a
    >
    <router-link to="/contact">Contact</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
</template>
<style scoped>
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
  font-size: 24px;
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
