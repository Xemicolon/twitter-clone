<template>
  <div>
    <message-header />
    <Message class="px-3" />
    <div
      class="bg-black input w-full sticky bottom-0 flex flex-row items-center h-16 px-3 reply-msg"
    >
      <div class="icons">
        <p
          class="text-light-blue hover:text-dark-blue cursor-pointer flex place-items-center"
        >
          <svg
            viewBox="0 0 24 24"
            height="26px"
            width="26px"
            class="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path
                d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
              ></path>
              <circle cx="8.868" cy="8.309" r="1.542"></circle>
            </g>
          </svg>
        </p>
      </div>
      <form class="flex flex-row items-center w-full">
        <input
          type="text"
          placeholder="Start a new message"
          class="border-0 rounded-full px-3 py-1 text-sm focus:outline-none w-full bg-faded-gray mr-3 input-msg"
        />
        <p
          class="text-light-blue hover:text-dark-blue cursor-pointer flex place-items-center text-center"
        >
          <svg
            viewBox="0 0 24 24"
            height="26px"
            width="26px"
            class="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g>
              <path
                d="M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"
              ></path>
            </g>
          </svg>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '~/components/User/Message'
import MessageHeader from '~/components/shared/MessageHeader'

export default {
  components: {
    Message,
    MessageHeader,
  },
}
</script>

<style scoped></style>
