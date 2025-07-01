<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const urls = ref([]);

const videosToDisplay = 6;

onMounted(async () => {
  await loadVideos();
});

const loadVideos = async () => {
  const urlResults = [];
  const cid = 'UC9lrz0HXUKUcnEgg4-hctHQ';
  const channelURL = encodeURIComponent(
    `https://youtube.com/feeds/videos.xml?channel_id=${cid}`
  );
  const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

  const result = await axios.get(reqURL);
  for (let i = 0; i < videosToDisplay; i++) {
    if (result.data.items.length >= i + 1) {
      const link = result.data.items[i].link;
      const id = link.substring(link.indexOf('=') + 1);
      urlResults.push(`https://youtube.com/embed/${id}?controls=0&autoplay=1`);
      // <iframe width="560" height="315" src="https://www.youtube.com/embed/fCSv8E8o-ZA?si=BQDgw9B2BxSRo25j" ></iframe>
    }
  }
  urls.value = urlResults;
};
</script>
<template>
  <div class="media-page-wrapper">
    <h1>Stream Our Latest Single</h1>
    <div class="single-stream">
      <iframe
        style="border: 0; width: 350px; height: 442px"
        src="https://bandcamp.com/EmbeddedPlayer/track=3338345172/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      ></iframe>
    </div>
    <br />
    <h1>Listen/Watch</h1>
    <div class="latest-vids">
      <iframe
        v-for="url of urls"
        :key="url"
        class="yt-vid"
        height="340"
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        :src="url"
      ></iframe>
    </div>
  </div>
</template>
<style scoped>
.latest-vids {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 16px;
}

.yt-vid {
  width: 600px;
}

@media (max-width: 768px) {
  .yt-vid {
    width: 90%;
  }
}
</style>
