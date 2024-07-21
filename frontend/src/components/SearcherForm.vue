<template>
  <form class="w-[450px] rounded-[16px] shadow-2xl mt-[100px] px-10 py-5 bg-white flex flex-col">
    <h2 class="mx-auto text-[40px] font-semibold mb-[20px]">3205.team</h2>
    <BaseInput v-model="email" class="mb-2" placeholder="someemail@gmail.com" :error="emailError" label="Email"
      type="email" />
    <BaseInput v-model="number" :error="numberError" class="mb-8" placeholder="12-34-56" label="Number" type="text"
      mask="00-00-00" />
    <BaseButton @click="onSubmit" class="mb-5" text="Search" />
  </form>
</template>

<script setup>
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useSearch } from '@/composables/search'

const { email, number, emailError, numberError, onSubmit } = useSearch()
</script>
