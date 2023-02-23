export const inputRange = document.querySelector(
  '.scroll-bar',
) as HTMLInputElement

export const buttonList = document.querySelectorAll('button')
export const iconList = document.querySelectorAll(
  'button img',
) as NodeListOf<HTMLImageElement>

export const iconAssets = [
  'assets/icons/sun.svg',
  'assets/icons/cloud-rain.svg',
  'assets/icons/cloud-snow.svg',
]
export const audioList = [
  new Audio('assets/sounds/summer.mp3'),
  new Audio('assets/sounds/rain.mp3'),
  new Audio('assets/sounds/winter.mp3'),
]
export const backgroundList = [
  'assets/background/summer-bg.jpg',
  'assets/background/rainy-bg.jpg',
  'assets/background/winter-bg.jpg',
]
