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

  printWidget (properties) {
    this.buffer.fillStyle = 'white';
    this.buffer.fillRect(properties.position.x, properties.position.y, properties.size.width, properties.size.height);
    this.buffer.fillStyle = properties.textStyle.color
    this.buffer.font = properties.textStyle.size + 'px '+ properties.textStyle.font
    this.buffer.textAlign = 'center'
    this.buffer.fillText(properties.text, properties.position.x + (properties.size.width/2), properties.position.y + properties.size.height/2 + properties.textStyle.size/3);
  }
}

export { Display }
