<template>
  <div
    style="z-index: 470; bottom: 70px; right: 0; left: 0"
    class="bg-gray-900 border-b border-faded-gray rounded-md w-11/12 mx-auto fixed mt-2"
  >
    <div
      class="w-full border-b border-dark-blue pb-2 flex place-items-center p-3"
    >
      <p
        class="text-light-blue hover:text-dark-blue mr-5 w-14 cursor-pointer"
        @click="closereply"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 0 24 24"
          width="22px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>
      </p>
      <p class="font-semibold">Reply</p>
    </div>

    <div class="flex flex-row p-3">
      <div
        style="min-height: 105px; width: 2px; margin-left: 19px"
        class="bg-light-gray fixed rotate-45"
      ></div>

      <div class="w-auto mr-4">
        <div class="user-img flex-none w-10 h-10 relative rounded-full">
          <img
            src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
            alt=""
            class="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      <div class="w-full">
        <div class="user-info flex text-light-gray place-items-center">
          <p class="text-gray-400 font-semibold mr-2 text-sm">X</p>
          <p class="text-sm mr-2">@Xemicolon</p>
          <p class="text-xs place-self-center">• 2d</p>
        </div>
        <div class="tweet text-gray-400 text-sm">
          <p>Damn man. So smooth.</p>
        </div>
        <div class="replying-to text-light-gray mt-3">
          <p class="text-md">
            replying to <span class="text-light-blue">@xemicolon</span>
          </p>
        </div>
      </div>
    </div>

    <div class="reply-to flex flex-row p-3">
      <div class="user-img flex-none w-10 h-10 relative rounded-full mr-2">
        <img
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
          alt=""
          class="absolute inset-0 w-full h-full rounded-full object-cover"
        />
      </div>
      <div class="reply-tweet-box grid w-full">
        <textarea
          id="reply-tweet-input"
          v-model="reply"
          style="max-height: 120px; overflow-y: auto"
          name="twee-input"
          class="reply-tweet-input bg-transparent focus:outline-none text-sm text-white cursor-text h-20"
          placeholder="type your reply here..."
          cols="30"
          rows="10"
        ></textarea>
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
            <p
              :class="
                maxchar - reply.length < 0 ? 'text-red-600' : 'text-white'
              "
              class="pr-2 text-sm"
            >
              {{ maxchar - reply.length }}
            </p>
            <button
              v-if="maxchar - reply.length >= 0"
              type="button"
              class="rounded-full bg-light-blue hover:bg-dark-blue focus:outline-none text-gray-200 w-20 py-1"
              @click="replyTweet"
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
  data() {
    return {
      reply: '',
      maxchar: 280,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    replyTweet() {
      if (!this.reply.length) {
        return
      }
      alert(this.reply)
      eventBus.$emit('close-reply-tweet-box', false)
    },
    closereply() {
      eventBus.$emit('close-reply-tweet-box', false)
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

textarea:focus::placeholder {
  color: transparent;
}

textarea {
  padding: 10px;
}
</style>
