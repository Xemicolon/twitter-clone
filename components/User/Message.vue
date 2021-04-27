<template>
  <div class="min-h-screen bg-black">
    <div class="flex flex-row justify-start recipeint mt-4 w-full">
      <div
        style="place-self: flex-end"
        class="user-img flex-none bottom-0 w-10 h-10 relative rounded-full mr-3"
      >
        <img
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
          alt=""
          class="absolute inset-0 w-full h-full rounded-full object-cover"
        />
      </div>

      <div class="message" style="max-width: 230px">
        <div class="bg-faded-gray rounded-lg rounded-bl-none w-full">
          <p class="text-sm p-2">This message is from the recipeient</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-end sender mt-4 w-full">
      <div class="message" style="max-width: 230px">
        <div class="bg-light-blue rounded-lg rounded-br-none w-full">
          <p class="text-sm p-2">This message is from the sender.</p>
        </div>
      </div>
      <div
        style="place-self: flex-end"
        class="user-img flex-none bottom-0 w-10 h-10 relative rounded-full ml-3"
      >
        <img
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
          alt=""
          class="absolute inset-0 w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
