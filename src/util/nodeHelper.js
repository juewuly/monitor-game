class nodeHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new nodeHelper();
    }

    return this._instance;
  }

  on(element, type, func) {
    if (!element) {
      return;
    }

    if (element.addEventListener) {
      element.addEventListener(type, func, false);
    } else {
      element.attachEvent('on' + type, func);
    }
  }

  parentNode(element, tagName, deep = 5) {
    tagName = tagName.toUpperCase();
    while (element && deep-- > 0) {
      if (element.tagName === tagName) {
        return element;
      }

      element = element.parentNode;
    }

    return null;
  }
}

export default nodeHelper.Instance;