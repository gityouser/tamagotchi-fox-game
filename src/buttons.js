import { ICONS } from "./constants"

const toggleHighlighted = (iconIndex, show) =>
  document
    .querySelector(`.${ICONS[iconIndex]}-icon`)
    .classList.toggle("highlighted", show)

export default function initButtons(handleUserAction) {
  let selectedIconIndex = 0

  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIconIndex, false)
      selectedIconIndex = (2 + selectedIconIndex) % ICONS.length
      toggleHighlighted(selectedIconIndex, true)
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIconIndex, false)
      selectedIconIndex = (1 + selectedIconIndex) % ICONS.length
      toggleHighlighted(selectedIconIndex, true)
    } else {
      handleUserAction(ICONS[selectedIconIndex])
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick)
}
