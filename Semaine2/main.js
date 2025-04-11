//faciles


let nombre = -3;

if (nombre > 0) {
  console.log("positif");
} else {
  console.log("negatif ou nul");
}


let age = 16;

if (age >= 18) {
  console.log("majeur");
} else {
  console.log("mineur");
}


//moyen


function isAdut(age) {
    return age >= 18;
  }
  console.log(isAdut(20)); 
  console.log(isAdut(12)); 
  

  let jour = 3;
  
  switch (jour) {
    case 1:
      console.log("Lundi");
      break;
    case 2:
      console.log("Mardi");
      break;
    case 3:
      console.log("Mercredi");
      break;
    case 4:
      console.log("Jeudi");
      break;
    case 5:
      console.log("Vendredi");
      break;
    case 6:
      console.log("Samedi");
      break;
    case 7:
      console.log("Dimanche");
      break;
    default:
      console.log("jour invalide");
  }
  

  let x = 0;
  
  if (x === 0) {
    console.log("nul");
  } else if (x % 2 === 0) {
    console.log("pair");
  } else {
    console.log("impair");
  }
  

  function maxTrois(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(maxTrois(3, 7, 5)); 
  

  //difficile


function calculatrice(a, b, operation) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : "Division par zéro impossible";
    default:
      return "Opération inconnue";
  }
}
console.log(calculatrice(10, 5, '+')); 

