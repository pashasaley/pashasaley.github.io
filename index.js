let formula = "";

//author: Dvornichenko 721701 03.03.2020
window.addEventListener('load',()=>{
	let btnNext = getId('next');
    	let formulaInput1 = getId('panel1');
	let formulaInput2 = getId('panel2');
    	let minLenght = 0;
	let maxLenght = 5;
	do{
		formula = generateFormula("");
		formulaInput1.value = formula;
	} while(formula.length <= minLenght || formula.length >= maxLenght);
	do{
		formula = generateFormula("");
		formulaInput2.value = formula;
	} while(formula.length <= minLenght || formula.length >= maxLenght);
	
	btnNext.addEventListener('click', ()=>{
		minLenght += 5;
		maxLenght += 5;
		if(minLenght >= 40) {
			minLenght = 0;
			maxLenght = 5;
		}
		do{
			formula = generateFormula("");
			formulaInput1.value = formula;
		} while(formula.length <= minLenght || formula.length >= maxLenght);
		do{
			formula = generateFormula("");
			formulaInput2.value = formula;
		} while(formula.length <= minLenght || formula.length >= maxLenght);
	})
})



function getId(id){
    return document.getElementById(id);
}