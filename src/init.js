import game from "./gameState"
import { TICK_RATE } from "./constants"
import initButtons from "./buttons"

function init() {
  console.log("Starting game")
  initButtons(game.handleUserAction)

  let nextTimeToTick = Date.now()

  function nextAnimationFrame() {
    const now = Date.now()

    if (nextTimeToTick <= now) {
      game.tick()

      nextTimeToTick = now + TICK_RATE
    }

    requestAnimationFrame(nextAnimationFrame)
  }

  requestAnimationFrame(nextAnimationFrame)
}

init()
