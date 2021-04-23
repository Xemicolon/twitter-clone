<template>
  <div class="min-h-screen w-full">
    <Header />
    <compose-tweet-box />
    <div class="h-2 divider bg-divider-light-black"></div>
    <Feeds />
  </div>
</template>

<script>
import Header from '~/components/Home/Header.vue'
import Feeds from '~/components/Home/Feeds.vue'
import ComposeTweetBox from '~/components/Actions/ComposeTweetBox.vue'
export default {
  components: {
    Header,
    Feeds,
    ComposeTweetBox,
  },
}
</script>

<style scoped></style>
