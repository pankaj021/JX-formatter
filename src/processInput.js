import { symbolGrp, putTabs, putNewLine, putComma } from './helper';

function processInput(type) {
    this.formattedOutput = "";
    if(type === 'JSON'){
        try {
            var noOfTabs = 0;
            var rawInput = JSON.parse(document.getElementById('user-input').value);
            if(!rawInput || typeof rawInput !== 'object') throw new Error("Not object type.");
            processJSON(rawInput, this, noOfTabs);
            this.setState({userInput: this.formattedOutput, errMsg: ""});
        } catch (error) {
            console.log("Invalid JSON : ", error.message);
            this.setState({errMsg: 'Invalid JSON input...'});
        }
    }
    else{
        processXML(this, rawInput);
    }
}

const processJSON = (rawInput, thisObj, noOfTabs) => {
    if(rawInput && typeof rawInput === 'object'){
        var symbol, rawInputArr, isArray = Array.isArray(rawInput);
        if( isArray ){
            symbol = symbolGrp["ARRAY"];
            rawInputArr = rawInput;
        } else {
            symbol = symbolGrp["OBJECT"];
            rawInputArr = Object.keys(rawInput);;    
        }
        thisObj.formattedOutput += symbol.oSymbol;
        if(rawInputArr.length > 0) putNewLine(thisObj);
        noOfTabs++;
        rawInputArr.forEach((key, index) => {
            putTabs(noOfTabs, thisObj);
            var nextKey = key;
            if(!isArray){
                thisObj.formattedOutput += "\"" + key + "\"";
                thisObj.formattedOutput += ": ";
                nextKey = rawInput[key];
            }
            processJSON(nextKey, thisObj, noOfTabs);
            if(index < rawInputArr.length - 1) putComma(thisObj);
            putNewLine(thisObj);
        });
        noOfTabs--;
        if(rawInputArr.length > 0) putTabs(noOfTabs, thisObj);
        thisObj.formattedOutput += symbol.cSymbol;
    } else {
        if(typeof rawInput === "string") return thisObj.formattedOutput += " " + "\"" + rawInput + "\"";
        return thisObj.formattedOutput += " " + rawInput;
    }
}

const processXML = (thisObj) => {
    thisObj.setState({errMsg: 'Invalid XML input...'});
}

module.exports = {processInput};