import { Controller } from './controller.js'
import { Display } from './display.js'
import { Engine } from './engine.js'
import { Game } from './game.js'

window.addEventListener('load', function (event) {
  'use strict'

  // Functions
  const resize = function () {
    display.resize(window.innerWidth, window.innerHeight)
    display.render()
  }

  const update = function () {}

  const render = function () {
    display.fill('#1c6969')

    game.world.page.widgets.forEach((widget) => {
      widget.components.forEach((component) => {
        if (component.type == "print") {
          display.printWidget(component.properties)
        }
      });
    });

    display.render()
  }

  const requestJSON = function(url, callback) {
    let request = new XMLHttpRequest();

    request.addEventListener("load", function(event) {
      callback(JSON.parse(this.responseText));
    }, { once:true });

    request.open("GET", url);
    request.send();
  }

  // Objects
  const controller = new Controller()
  const canvas = document.getElementById('ctx')
  const display = new Display(canvas)
  const engine = new Engine(1000 / 30, update, render)
  const game = new Game()

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
  requestJSON(game.world.pageID, (pageData) => {
    game.world.loadPage(pageData)
    console.log(game.world.page)
    resize()
    engine.start()
  })
})
