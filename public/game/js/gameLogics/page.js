import { Widget } from './widget.js'

const Page = class {
  constructor(title){
    this.title = title
    this.widgets = []
  }

  addWidgets(widgets){
    widgets.forEach((widget) => {
      let widgetObject = new Widget(widget.type)
      widgetObject.addComponents(widget.components)
      this.widgets.push(widgetObject)
    });
  }
}

export { Page }
