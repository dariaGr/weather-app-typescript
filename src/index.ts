import './index.scss'
import {
  inputRange,
  buttonList,
  iconList,
  iconAssets,
  audioList,
  backgroundList,
} from './elements'

buttonList.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.body.style.background = `url(${backgroundList[index]}) 0 0/cover no-repeat`

    const currAudio = audioList[index]
    currAudio.volume = +inputRange.value

    if (currAudio.paused) {
      inputRange.addEventListener('input', event => {
        currAudio.volume = +(<HTMLTextAreaElement>event.target).value
      })

      audioList.forEach(audio => {
        if (audio === currAudio) {
          audio.play()
        } else {
          audio.pause()
        }
      })

      iconList.forEach((icon, index) => {
        icon.src = iconAssets[index]
      })
    } else {
      currAudio.pause()
      iconList[index].src = 'assets/icons/pause.svg'
    }
  })
})
