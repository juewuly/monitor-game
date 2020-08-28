export default class stringH {
  constructor() {

  }

  static trim(s) {
    return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
  }
}