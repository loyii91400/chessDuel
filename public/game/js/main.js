import { Controller } from './controller.js'
import { Display } from './display.js'
import { Engine } from './engine.js'

window.addEventListener('load', function (event) {
  'use strict'

  // Functions
  const resize = function () {
    display.resize(window.innerWidth, window.innerHeight)
    display.render()
  }

  const update = function () {}

  const render = function () {
    display.fill('#1c4966')

    display.render()
  }

  // Objects
  const controller = new Controller()
  const canvas = document.getElementById('ctx')
  const display = new Display(canvas)
  const engine = new Engine(1000 / 30, update, render)

  // Event listeners
  canvas.addEventListener('mousedown', e => {
    const mouseButtonType = 'mouse' + e.button
    controller.keyPressed(e.offsetX, e.offsetY, mouseButtonType)
  })
  canvas.addEventListener('mouseup', e => {
    const mouseButtonType = 'mouse' + e.button
    controller.keyReleased(e.offsetX, e.offsetY, mouseButtonType)
  })
  canvas.addEventListener('mousemove', e => {
    const mouseButtonType = 'mouse' + e.button
    controller.keyMoved(e.offsetX, e.offsetY, mouseButtonType)
  })
  window.addEventListener('resize', () => { resize(); console.log('resized') })

  // Initialize
  resize()
  engine.start()
})
