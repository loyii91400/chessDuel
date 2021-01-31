import { WidgetComponent } from './WidgetComponent.js'

const Widget = class {
  constructor (type) {
    this.type = type;
    this.components = []
  }

  addComponents (components) {
    components.forEach((component) => {
      this.components.push(new WidgetComponent(component.type, component.properties))
    });
  }
}

export { Widget }
