<template>
  <div
    v-if="show"
    style="z-index: 2; top: 57px"
    class="send-tweet bg-black sticky border-b border-faded-gray w-full p-3 mt-2"
  >
    <div class="flex flex-row">
      <div class="w-auto mr-4">
        <div class="user-img flex-none w-12 h-12 relative rounded-full">
          <img
            src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
            alt=""
            class="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <div class="w-full grid">
        <div
          style="max-height: 120px; overflow-y: auto"
          class="tweet-input focus:outline-none whitespace-pre-wrap text-light-gray cursor-text h-20 bordr border-faded-gray rounded-md"
          contenteditable="true"
          placeholder="What's happening?"
        ></div>
        <div class="flex flex-row justify-between items-center mt-3">
          <p class="text-white">Upload</p>
          <div class="flex items-center justify-between">
            <p class="text-white pr-4">1/24</p>
            <button
              type="button"
              class="rounded-full bg-light-blue text-gray-200 w-20 py-1"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '~/utils/bus'

export default {
  transition: 'home',
  mode: 'in-out',
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    eventBus.$on('open-compose-tweet-box', (data) => {
      this.show = data
    })

    eventBus.$on('close-compose-tweet-box', (data) => {
      this.show = data
    })
  },
}
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
