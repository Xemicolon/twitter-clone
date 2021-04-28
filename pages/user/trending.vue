<template>
  <div
    style="max-width: 500px"
    class="min-h-screen mx-auto bg-black border-l border-r border-faded-gray"
  >
    <Trending />
  </div>
</template>

<script>
import Trending from '~/components/User/Trending'
export default {
  layout: 'user',
  components: { Trending },
}
</script>
