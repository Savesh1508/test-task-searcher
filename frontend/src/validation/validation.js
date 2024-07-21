export function validateEmail(value) {
  if (!value.length) {
    return true
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(value)
}

export function validateNumber(value) {
  if (!value.length) {
    return true
  }
  const numberPattern = /^\d{2}-\d{2}-\d{2}$/
  return numberPattern.test(value)
}
