<template>
  <div>
    <Header />
    <Feeds />
    <Navigation />
  </div>
</template>

<script>
import Header from '~/components/shared/Header.vue'
import Feeds from '~/components/shared/Feeds.vue'
import Navigation from '~/components/shared/Navigation.vue'

export default {
  components: {
    Header,
    Feeds,
    Navigation,
  },
}
</script>

<style scoped></style>
