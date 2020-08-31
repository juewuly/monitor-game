export default class eventH {
  constructor() {
  }

  /**
   * Event相关方法
   * @type {Object}
   */
  static fix(e) {
    if (!('target' in e)) {
      let node = e.srcElement || e.target;
      if (node && node.nodeType == 3) {
        node = node.parentNode;
      }
      e.target = node;
    }
    return e;
  } 
}