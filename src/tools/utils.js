'use strict';

const testfunc = function () {
    console.log('testfunc');
}

// fData 2017-1-6 H:i:s
const stringToDate = (fDate) => {
  var fullDate = fDate.split(" ")[0].split("-");
  return new Date(fullDate[0], fullDate[1]-1, fullDate[2], 0, 0, 0);
}

exports.testfunc = testfunc;
exports.stringToDate = stringToDate;
