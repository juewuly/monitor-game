class eventHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new eventHelper();
    }

    return this._instance;
  }

  // 兼容ie8
  fix(e) {
    if (!('target' in e)) {
      let node = e.srcElement;
      if (node && node.nodeType == 3) {
        node = node.parentNode;
      }
      e.target = node;
    }
    
    return e;
  }
}

export default eventHelper.Instance;