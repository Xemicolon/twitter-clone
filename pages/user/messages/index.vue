<template>
  <div>
    <Header
      style="z-index: 200"
      class="bg-black header flex flex-row justify-between items-center border-b border-faded-gray sticky top-0 p-3"
    >
      <template #heading>
        <div>
          <p class="place-self-center font-semibold text-xl">Messages</p>
        </div>
      </template>
      <template #actionBtns>
        <p
          class="text-light-blue hover:text-dark-blue cursor-pointer"
          @click="openComposeTweetDialog"
        >
          <svg
            viewBox="0 0 24 24"
            height="28px"
            width="28px"
            fill="currentColor"
          >
            <g>
              <path
                d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"
              ></path>
            </g>
          </svg>
        </p>
      </template>
    </Header>
    <Messages />
  </div>
</template>

<script>
import Messages from '~/components/User/Messages'
import Header from '~/components/shared/Header.vue'
import { eventBus } from '~/utils/bus'

export default {
  layout: 'user',
  components: { Messages, Header },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    openComposeTweetDialog() {
      this.show = false
      return eventBus.$emit('open-compose-tweet-box', true)
    },
    closeComposeTweetDialog() {
      this.show = true
      return eventBus.$emit('close-compose-tweet-box', false)
    },
  },
}
</script>
