<template>
  <div class="min-h-screen">
    <div
      v-for="(i, index) of 30"
      :key="index"
      class="h-20 flex flex-row place-items-center border-b border-faded-gray px-3 cursor-pointer hover:bg-faded-blue"
      @click="readmessage"
    >
      <div class="w-full flex flex-row">
        <div class="user-img flex-none w-10 h-10 relative rounded-full mr-3">
          <img
            src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
            alt=""
            class="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        </div>
        <div class="flex flex-col text-gray-100 w-full">
          <div class="flex flex-row justify-between">
            <p class="font-bold">
              X
              <span class="text-sm text-light-gray font-normal"
                >@xemicolon</span
              >
            </p>
            <p class="text-sm text-light-gray">1h</p>
          </div>
          <div class="message text-light-gray text-sm">
            <p>Hey there</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    readmessage() {
      this.$router.push('/user/messages/' + 2)
    },
  },
}
</script>
