const Controller = class {
  constructor () {
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
