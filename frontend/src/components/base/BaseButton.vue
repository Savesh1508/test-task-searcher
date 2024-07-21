<template>
  <button
    :type="type ? type : 'button'"
    class="shadow-xl tracking-wider hover:bg-[#ff3939] font-bold text-white bg-[#ff1515] h-[55px] rounded-[20px]"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: String
})
</script>
