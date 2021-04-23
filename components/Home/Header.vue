<template>
  <div
    class="header bg-black flex items-center justify-between border-b border-faded-gray sticky z-10 top-0 p-3"
  >
    <p class="place-self-center font-semibold text-xl">Latest tweets</p>

    <p
      v-if="show"
      class="text-light-blue hover:text-dark-blue cursor-pointer"
      @click="openComposeTweetDialog"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="32px"
        viewBox="0 0 24 24"
        width="32px"
        fill="currentColor"
      >
        <g><rect fill="none" height="24" width="24" /></g>
        <g>
          <g />
          <g>
            <path
              d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"
            />
            <path
              d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"
            />
            <rect height="2" width="8" x="7" y="9" />
            <polygon points="7,12 7,14 15,14 15,12 12,12" />
            <rect height="2" width="8" x="7" y="15" />
          </g>
        </g>
      </svg>
    </p>
    <p
      v-if="!show"
      class="text-light-blue hover:text-dark-blue cursor-pointer"
      @click="closeComposeTweetDialog"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32px"
        viewBox="0 0 24 24"
        width="32px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
        />
      </svg>
    </p>
  </div>
</template>

<script>
import { eventBus } from '~/utils/bus'
export default {
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
