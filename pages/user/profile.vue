<template>
  <div
    style="max-width: 500px"
    class="min-h-screen mx-auto bg-black border-l border-r border-faded-gray"
  >
    <Header
      class="bg-black header flex items-center border-b border-faded-gray p-3"
    >
      <template #icon>
        <nuxt-link
          to="/user/profile"
          class="text-light-blue hover:text-dark-blue cursor-pointer flex place-items-center w-16"
        >
          <svg
            viewBox="0 0 24 24"
            height="26px"
            width="26px"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path
                d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
              ></path>
            </g>
          </svg>
        </nuxt-link>
      </template>

      <template #heading>
        <div>
          <p class="place-self-center font-bold text-xl">X</p>
          <p class="text-xs font-light text-light-gray">24.5k tweets</p>
        </div>
      </template></Header
    >
    <profile />
  </div>
</template>

<script>
import Header from '~/components/shared/Header.vue'
import Profile from '~/components/User/Profile.vue'
export default {
  layout: 'user',
  components: {
    Header,
    Profile,
  },
}
</script>
