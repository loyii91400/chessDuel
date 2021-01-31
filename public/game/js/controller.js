const Controller = class {
  constructor () {
    /*
     * keyDict contains a dictionary for each key
     * x: x position of cursor relative to canvas
     * y: y position of cursor relative to canvas
     * keyDown: boolean is the key down
     */
    this.keyDict = {}
  }

  keyPressed (x, y, key) {
    if (!(key in this.keyDict)) this.keyDict[key] = {}
    this.keyDict[key].keyDown = true
    this.keyDict[key].x = x
    this.keyDict[key].y = y
  }

  keyReleased (x, y, key) {
    if (!(key in this.keyDict)) this.keyDict[key] = {}
    this.keyDict[key].keyDown = false
    this.keyDict[key].x = x
    this.keyDict[key].y = y
  }

  keyMoved (x, y, key) {
    if (!(key in this.keyDict)) this.keyDict[key] = {}
    this.keyDict[key].x = x
    this.keyDict[key].y = y
  }
}

export { Controller }
