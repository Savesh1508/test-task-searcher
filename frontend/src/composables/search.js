import { validateEmail, validateNumber } from '@/validation/validation'
import { useSearchStore } from '@/store/search'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export function useSearch() {
  const email = ref('')
  const number = ref('')
  const emailError = ref('')
  const numberError = ref('')
  const formattedNumber = ref('')

  const store = useSearchStore()
  const { searchResult, loading } = storeToRefs(store)
  const { searchUsers } = useSearchStore()

  function onSubmit() {
    emailError.value = ''
    numberError.value = ''

    let valid = true

    if (!email.value.length && !number.value.length) {
      return
    }
    if (!validateEmail(email.value)) {
      emailError.value = 'Incorrect email'
      valid = false
    }
    if (!validateNumber(number.value)) {
      numberError.value = 'Incorrect number'
      valid = false
    }

    if (number.value) {
      formattedNumber.value = number.value.replace(/-/g, '')
    }

    if (valid) {
      const payload = {}
      if (email.value) payload.email = email.value
      if (number.value) payload.number = formattedNumber.value

      searchUsers(payload)
      formattedNumber.value = ''
    }
  }

  return {
    searchResult,
    email,
    number,
    emailError,
    numberError,
    onSubmit,
    loading
  }
}
