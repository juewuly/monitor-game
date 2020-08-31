export default {
  on : function(el, type, fn) {
    if(el.addEventListener) {
      el && el.addEventListener(type, fn, false);
    } else {
      el && el.attachEvent('on' + type, fn);
    }
  },
  parentNode : function(el, tagName, deep) {
    deep = deep || 5;
    tagName = tagName.toUpperCase();
    while(el && deep-- > 0) {
      if(el.tagName === tagName) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }
}