let isLocal;
//有时候monitor.js会在file://或者res://协议下使用，判断下
isLocal = true;
try {
  var protocol = location.protocol.toLowerCase();
  if(protocol == 'http:' || protocol == 'https:') {
    isLocal = false;
  }
} catch(e) { }

export default isLocal;