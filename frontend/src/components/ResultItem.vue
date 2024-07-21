<template>
<div v-for="(item, index) in items" :key="index" class="bg-[#045879] shadow-xl text-white p-3 text-[17px] rounded-[14px] mb-[6px]">
  <div class="font-bold mb-1">Email: <span class="font-normal">{{ item.email }}</span></div>
  <div class="font-bold">Number: <span class="font-normal">{{ item.number }}</span></div>
</div>
</template>

<script setup>
const props = defineProps({
  items: Object
})
</script>