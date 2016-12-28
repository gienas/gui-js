/// <reference path="validation/Validation.ts" />
/// <reference path="validation/ZipCodeValidator.ts" />

var zipCodeValidator: Validation.ZipCodeValidator = new Validation.ZipCodeValidator();
let result47400:boolean =  zipCodeValidator.isAcceptable("47400");
let resultABCDE:boolean =  zipCodeValidator.isAcceptable("ABCDE");

document.getElementById("root").innerHTML = "Validation result for [47400, ABCDE] " + result47400 + ", " + resultABCDE ;
