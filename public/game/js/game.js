import { Page } from './gameLogics/page.js'

const Game = class {
  constructor () {
    this.world = new World()
  }

  update () {
    this.world.update()
  }
}

const World = class {
  constructor () {
    this.pageID = "./js/gameLogics/pages/homePage.json"
    this.page;
  }

  loadPage (pageData) {
    let page = new Page(pageData.title)
    page.addWidgets(pageData.widgets)
    this.page = page
  }
}

export { Game }
