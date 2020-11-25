let input = prompt ("В яку країну відправити товар? ");
let inputlower = input.toLowerCase();
console.log(inputlower);

let cost = 0;

switch (inputlower) {
   case "китай" :
   cost = 100;
      break

case "чилі" :
 cost = 250;
 break

case "австралія " :
 cost = 170;
 break

 case "індія" :
 cost = 80;
break

 case "ямайка" :
 cost = 120;
 break
  default:
   
  alert ("У вашу країні доставка неможлива")

}

alert (`Доставка в ${inputlower } буде коштувати ${cost }`)




