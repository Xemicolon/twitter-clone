<template>
  <div class="trending min-h-screen w-full sticky top-0 mt-2 text-gray-100">
    <div
      v-for="(i, index) in 30"
      :key="index"
      class="flex flex-col p-3 border-b border-faded-gray"
    >
      <p class="text-light-gray text-sm">1 . Trending</p>
      <p class="font-bold text-xl">#lmao</p>
      <p class="text-light-gray text-sm">11 tweets</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingTweet: [{}],
    }
  },
}
</script>
