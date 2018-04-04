export const pageNamePassed = (name) => {
  return /^[a-zA-Z][a-zA-Z0-9]{0,19}$/.test(name)
}