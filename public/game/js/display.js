const Display = class {
  constructor (canvas) {
    this.buffer = document.createElement('canvas').getContext('2d')
    this.context = canvas.getContext('2d')
    this.canvas = canvas
  }

  resize (newWidth, newHeight) {
    this.canvas.width = newWidth
    this.canvas.height = newHeight
  }

  fill (color) {
    this.buffer.fillStyle = color
    this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height)
  }

  render () {
    this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.canvas.width, this.canvas.height)
  }
}

export { Display }
