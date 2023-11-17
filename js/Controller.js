const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    this.store = store;

    // TODO
    this.searchFormView = searchFormView;
    
    this.subscribeViewEvents()
  }

  subscribeViewEvents(){
    this.searchFormView.on('@submit', (event) => this.search(event.detail.value))
  }

  search(keyword){
    console.log(tag, keyword);
  }
}
 