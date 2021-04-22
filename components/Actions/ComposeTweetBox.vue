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
          class="tweet-input focus:outline-none text-sm text-white cursor-text h-20 bordr border-faded-gray rounded-md"
          contenteditable="true"
          placeholder="What's happening?"
        ></div>
        <div class="flex flex-row justify-between items-center mt-3">
          <p class="text-light-blue hover:text-dark-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
              />
            </svg>
          </p>
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
  methods: {
    contentplaceholderfocus(e) {
      console.log(e)
      if (e.type === 'focus') {
        e.target.textContent = ''
      }
      // const tweetInput = document.querySelector('.tweet-input')
    },
    contentplaceholderblur(e) {
      console.log(e)
      if (e.type === 'blur') {
        e.target.textContent = "What's happening?"
      }
      // const tweetInput = document.querySelector('.tweet-input')
    },
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

[contentEditable='true']:empty:not(:focus):before {
  content: attr(placeholder);
  color: lightgray;
}
</style>
