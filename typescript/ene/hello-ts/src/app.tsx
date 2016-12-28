import { Conversion } from './converters/StringConverter'

var someArray = [9, 2, 5];
for (var item in someArray) {
      console.log(item); // 0,1,2
}

let stringConverter: Conversion.StringConverter = new Conversion.StringConverter()
document.getElementById("rdiv").innerHTML = "Lib version =" + Conversion.conversionLibraryVersion;
