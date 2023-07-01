export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(na) {
    if (typeof na !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = na;
    }
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof cd === 'string') {
      this._code = cd;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
