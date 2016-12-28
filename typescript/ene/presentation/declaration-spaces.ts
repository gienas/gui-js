//Type declaration spaces
class Fooo {
  c: number;
}
interface Bar {
}
type Bas = {}
// this mean you can User
var foo: Fooo;
var bar: Bar;
var bas: Bas;
// for interface you can't do that:
//  var bar = Bar;
//because name Bar isn't defined in variable scope

//VARIABLE DECLARATION SCOPE

// you can do that :)
var someTypeVar =  Fooo;
// creating class also contribute variable declaration scope
//you can use belowe what is a bit strange
var someOtherVar = new someTypeVar();
//but cant do below:
//var someOtherVar2:someTypeVar;

//TYPEOF - tells that something should have the same type
var tovar = 123;
var tovar2: typeof tovar;
tovar = 234; //OK
//tovar = '234' //BAD
