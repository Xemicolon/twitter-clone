<template>
  <div>
    <Header
      style="z-index: 200"
      class="bg-black header flex items-center border-b border-faded-gray sticky top-0 p-3"
    >
      <template #heading>
        <div>
          <p class="place-self-center font-semibold text-xl">Notifications</p>
        </div>
      </template>
    </Header>
    <Notifications />
  </div>
</template>

<script>
import Notifications from '~/components/User/Notifications'
import Header from '~/components/shared/Header.vue'

export default {
  components: { Notifications, Header },
  layout: 'user',
}
</script>
