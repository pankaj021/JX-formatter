const symbolGrp = {
    "ARRAY": {
        oSymbol: '[',
        cSymbol: ']' 
    },
    "OBJECT": {
        oSymbol: '{',
        cSymbol: '}' 
    }
}
function putTabs(noOfTabs, thisObj) {
    for (let tab = 0; tab < noOfTabs; tab++) thisObj.formattedOutput += "\t";
}
function putNewLine(thisObj) {
    thisObj.formattedOutput += '\n';
}
function putComma(thisObj) {
    thisObj.formattedOutput += ',';    
}

module.exports = {
    symbolGrp,
    putTabs,
    putNewLine,
    putComma
}