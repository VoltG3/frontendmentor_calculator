
// ---------------------------------------------------------------------
//  DEFAULT - onload
// ---------------------------------------------------------------------

var variable = 0;     // first :: input variable
var arr = [];         // after :: add variable to the array
var operator = "";    //   for :: add math operator to the array

// ---------------------------------------------------------------------
//  BTN ROUTER
// ---------------------------------------------------------------------

function operation(target) {
  switch(target) {
    case 1.1: void addOperator(operator = "+"); break; //  [       ADD ]
    case 1.2: void addOperator(operator = "-"); break; //  [  SUBTRACT ] 
    case 1.3: void addOperator(operator = "x"); break; //  [  MULTUPLE ]
    case 1.4: void addOperator(operator = "/"); break; //  [    DIVIDE ]
    case 1.5: void addOperator(operator = "%"); break; //  [   PRECENT ] 
    case 1.6: void addOperator(operator = "p"); break; //  [       POW ] 
    case 1.7: void addOperator(operator = "("); break; //  [         ( ]
    case 1.8: void addOperator(operator = ")"); break; //  [         ) ]
    case 2  : void dots();                              break; //  [       DOT ]
    case 3:   void reset();                             break; //  [     RESET ]
    case 4:   void del();                               break; //  [    DELETE ]
    case 5:   void result();                            break; //  [    RESULT ]
  } void std_cout(arr, variable); 
} 

// ---------------------------------------------------------------------------------------
//  Add digit to variable
// ---------------------------------------------------------------------------------------

function addValue(value) {
    variable = Number(variable += "" + value);                  // :: add digit to variable
    void std_cout(arr, variable);
}

// ---------------------------------------------------------------------------------------
//  Add operation sign
// ---------------------------------------------------------------------------------------

function addOperator(operator){
  if(variable == isNaN(variable)) {                                  // :: one operation sign allowed

  } else {
    void addToArray();
  }

  function addToArray(){
    arr.push (variable);                                              // :: add last variable to array
    arr.push (operator);                                              // :: then add operation sign
    variable = "";                                                    // :: reset variable
  }
}

// ---------------------------------------------------------------------
//  DOT
// ---------------------------------------------------------------------

function dots(){
}

// ---------------------------------------------------------------------
//  RESET to default
// ---------------------------------------------------------------------

function reset(){
  variable = 0;
  arr.length = 0;
  console.log("[RESET ] -  variable [", variable, "] arr.length [", arr.length, "]");
}

// ---------------------------------------------------------------------
//  DELETE
// ---------------------------------------------------------------------

function del() {
}

// ---------------------------------------------------------------------
//  RESULT
// ---------------------------------------------------------------------

function result() {
}

// ---------------------------------------------------------------------
//  OUTPUT
//  if array is empty then output only variable as a string 
//     else add to string array and then variable
// ---------------------------------------------------------------------

function std_cout(arr, variable) {
  let str = "";
  arr === 0 ? str = variable : str = arr.join('') + "" + variable;
  output.innerHTML = str;
  console.table("[ARRAY ] - ", arr);
  console.log("[OUTPUT] - ", str);
}