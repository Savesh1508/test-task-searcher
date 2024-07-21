<template>
  <div>
    <div class="flex items-center">
      <label v-if="label" :for="label" class="text-[18px] font-semibold">{{ label }}</label>
      <span v-if="isRequired" title="This is a required field"
        class="text-red-500 text-[18px] ml-[2px] font-bold">*</span>
    </div>
    <input
      ref="maskedInput"
      :type="type ? type : 'text'"
      :id="label" :placeholder="placeholder"
      class="font-semibold px-[14px] w-full border-[1px] mt-1 outline-none rounded-[8px] h-[45px]"
      @input="updateValue"
      :class="error ? 'border-red-400': ''"
    />
    <span class="text-red-400">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IMask from 'imask'

const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  isRequired: {
    type: Boolean,
    default: false
  },
  mask: String,
  error: String
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref('')

const maskedInput = ref(null)

onMounted(() => {
  if (props.mask) {
    const maskInstance = IMask(maskedInput.value, {
      mask: props.mask
    })

    maskedInput.value.addEventListener('input', () => {
      internalValue.value = maskInstance.value
      emit('update:modelValue', internalValue.value)
    })
  }
})

function updateValue(event) {
  internalValue.value = event.target.value
  emit('update:modelValue', internalValue.value)
}
</script>

<style scoped>
.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>