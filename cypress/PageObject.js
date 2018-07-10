// This modal locator is used for Key Events (Key Codes)
const modalLocator = "#cwtltblr";

const calculatorScreen = {
  calculatorComponent: {
    idLocator: "#cwmcwd"
  },
  resultOutput: {
    idLocator: "#cwos"
  }
};
const keyCode = {
  enter: {
    idLocator: modalLocator,
    keyCode: "{enter}"
  },
  delete: {
    idLocator: modalLocator,
    keyCode: "{backspace}"
  }
};

const numbers = {
  zero: {
    value: 0,
    idLocator: "#cwbt43"
  },
  one: {
    value: 1,
    idLocator: "#cwbt33",
    keyCode: "{1}"
  },
  two: {
    value: 2,
    idLocator: "#cwbt34"
  },
  three: {
    value: 3,
    idLocator: "#cwbt35"
  },
  four: {
    value: 4,
    idLocator: "#cwbt23"
  },
  five: {
    value: 5,
    idLocator: "#cwbt24"
  },
  six: {
    value: 6,
    idLocator: "#cwbt25"
  },
  seven: {
    value: 7,
    idLocator: "#cwbt13"
  },
  eight: {
    value: 8,
    idLocator: "#cwbt14"
  },
  nine: {
    value: 9,
    idLocator: "#cwbt15"
  },
  deleteCE: {
    idLocator: "#cwclrbtnCE"
  },
  deleteAC: {
    idLocator: "#cwclrbtnAC"
  },
  divide: {
    value: "/",
    displayValue: "÷",
    idLocator: "#cwbt16"
  },
  multiply: {
    value: "*",
    displayValue: "×",
    idLocator: "#cwbt26"
  },
  subtract: {
    value: "-",
    displayValue: "-",
    idLocator: "#cwbt36"
  },
  add: {
    value: "+",
    displayValue: "+",
    idLocator: "#cwbt46"
  },
  result: {
    idLocator: "#cwbt45 "
  },
  point: {
    displayValue: ".",
    idLocator: "#cwbt44 "
  }
};

module.exports = {
  numbers,
  calculatorScreen,
  keyCode
};
