const setRem = () => {
  const scale = document.documentElement.clientWidth / 10
  document.documentElement.style.fontSize = scale + 'px'
}
window.addEventListener('pageshow', () => {
  setRem()
})
window.addEventListener('resize', () => {
  setRem()
})
    