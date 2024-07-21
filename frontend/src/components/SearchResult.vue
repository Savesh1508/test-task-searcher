<template>
  <div class="w-[750px] rounded-[16px] shadow-2xl mt-[30px] px-10 py-5 bg-white flex flex-col">
    <div v-if="loading" class="w-full h-fit flex items-center justify-center"><Loading /></div>
    <div v-else>
      <div v-if="searchResult.length" class="h-fit">
        <h2 class="mx-auto text-[40px] font-semibold py-[10px] mb-2">Results:</h2>
        <ResultItem :items="searchResult"/>
      </div>
      <div v-else class="mx-auto flex justify-center">
        <h2 class="text-[40px] font-semibold py-[10px] mb-2">Search someone :)</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearch } from '@/composables/search'
import Loading from '@/components/base/Loading.vue';
import ResultItem from '@/components/ResultItem.vue'
const { searchResult, loading } = useSearch()

</script>
