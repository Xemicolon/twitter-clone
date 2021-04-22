<template>
  <div class="min-h-screen bg-black w-full">
    <Header />
    <compose-tweet-box />
    <div style="background-color: #181a1b" class="h-2"></div>
    <Feeds />
    <Navigation />
  </div>
</template>

<script>
import Header from '~/components/shared/Header.vue'
import Feeds from '~/components/shared/Feeds.vue'
import Navigation from '~/components/shared/Navigation.vue'
import ComposeTweetBox from '~/components/Actions/ComposeTweetBox.vue'
export default {
  components: {
    Header,
    Feeds,
    Navigation,
    ComposeTweetBox,
  },
}
</script>

<style scoped></style>
