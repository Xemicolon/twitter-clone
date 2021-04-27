<template>
  <div
    style="z-index: 200"
    class="bg-black header flex flex-row items-center justify-between border-b border-faded-gray sticky top-0 p-3"
  >
    <div class="flex place-items-center">
      <nuxt-link
        to="/user/messages"
        class="trending text-light-blue hover:text-dark-blue cursor-pointer flex place-items-center w-8"
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
      <nuxt-link to="/user/profile" class="w-full flex">
        <div class="user-img flex-none w-10 h-10 relative rounded-full mx-3">
          <img
            src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
            alt=""
            class="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        </div>
        <div class="flex flex-col">
          <p class="font-extrabold text-white">X</p>
          <p class="text-sm text-light-gray">@xemicolon</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: '',
    },
  },
}
</script>
