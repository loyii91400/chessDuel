const Widget = class {
  constructor (type) {
    this.type = type;
    this.components = new Map()
  }

  addComponents (components) {
    components.forEach((component) => {
      this.components.set(component.type, component.properties)
    });
  }
}

export { Widget }
