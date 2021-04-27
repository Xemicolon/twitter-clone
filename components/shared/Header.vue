<template>
  <div
    style="z-index: 200"
    class="bg-black header flex items-center border-b border-faded-gray sticky top-0 p-3"
  >
    <slot name="icon"></slot>

    <slot name="heading"></slot>

    <slot name="actionBtns"></slot>
  </div>
</template>

<script>
export default {}
</script>
