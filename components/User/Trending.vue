<template>
  <div class="min-h-screen flex flex-col">
    <div
      style="z-index: 500; position: sticky; top: 0"
      class="w-full px-4 py-2 bg-black"
    >
      <div
        class="flex flex-row items-center w-full rounded-full bg-faded-gray px-2"
      >
        <p class="text-light-gray">
          <svg
            viewBox="0 0 24 24"
            height="22px"
            width="22px"
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
        </p>
        <input
          v-model="searchtwitter"
          type="text"
          placeholder="search for hashtags or people"
          class="search bg-transparent w-full focus:outline-none p-2"
          @focus="searchTwitter"
        />
      </div>
    </div>

    <div
      class="grid grid-flow-col-dense place-items-center border-b border-light-gray mt-3 text-gray-400"
    >
      <div
        :class="{ 'border-b-2': trending, 'border-light-blue': trending }"
        class="py-3 w-full text-center cursor-pointer"
        @click="trendingOnTwitter"
      >
        <p>Trending</p>
      </div>
      <div
        :class="{ 'border-b-2': search, 'border-light-blue': search }"
        class="py-3 w-full text-center cursor-pointer"
        @click="searchTwitter"
      >
        <p>Search</p>
      </div>
    </div>

    <Trending v-if="trending" />
    <Search v-if="search" :search="searchtwitter" />
  </div>
</template>

<script>
import Trending from '~/components/Trending/Trending'
import Search from '~/components/Trending/Search'
export default {
  components: {
    Trending,
    Search,
  },
  data() {
    return {
      trending: true,
      search: false,
      searchtwitter: '',
    }
  },
  methods: {
    searchTwitter() {
      document.querySelector('.search').focus()
      this.search = true
      this.trending = false
    },
    trendingOnTwitter() {
      this.search = false
      this.trending = true
    },
  },
}
</script>
