//@author: Klimenkov
const GRAMMAR = {
    symbol: ["A", "B", "C", "D", "E", "F", "G", "H", "I", 
                "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                "S", "T", "U", "V", "W", "X", "Y", "Z"],
    const: ['1','0'],
    bracket: ['(',')'],
    unar_operation: ['!'],
    bin_operation: ['&','|'],
};


// author: Dvornichenko 721701 22.03.2020
let generateFormula = function () {
    let arity = Math.floor(Math.random() * 2)+1;
    let formula = "(";
	let inverse = Math.floor(Math.random() * 25);
	if (inverse === 0) formula = "(!(";
    if (arity === 1) {
		let rand = Math.floor(Math.random() * 2);
		if (rand === 0) formula = formula.concat("!");
		else {
			formula = generateAtomicElement();
			return formula;
		}
        formula = formula.concat(generateAtomicElement());
    }
    else if(arity === 2){
        formula = formula.concat(generateElement());
        let operatorType = Math.floor(Math.random() * GRAMMAR.bin_operation.length);
        formula = formula.concat(GRAMMAR.bin_operation[operatorType]).concat(generateElement());
    }
    formula = formula.concat(")");
	if (inverse === 0) formula = formula.concat(")");
    return formula;
};

// author: Dvornichenko 721701 22.03.2020
let generateElement = function () {
    let type = Math.floor(Math.random() * 2);
    let element;
    if (type === 0) {
        element = generateFormula();
    }
    else {
        element = generateAtomicElement();
    }
    return element;
};


let generateAtomicElement = function () {
    let constant = Math.floor(Math.random() * 10);
    let index;
    if (constant === 5) {
        index = Math.floor(Math.random() * GRAMMAR.const.length);
        return GRAMMAR.const[index];
    }
    else {
        index = Math.floor(Math.random() * GRAMMAR.symbol.length);
        return GRAMMAR.symbol[index];
    }
};