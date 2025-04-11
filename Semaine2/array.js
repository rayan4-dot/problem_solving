//facile



let nombres = [1, 2, 3, 4, 5];
console.log(nombres);


console.log(nombres[2]); 


for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}


//moyen

function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
    return somme;
  }
  console.log(sommeTableau([1, 2, 3, 4])); 
  

  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }


  let pairs = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      pairs.push(i);
    }
  }
  console.log(pairs);


  //difficle



function trouverMax(tableau) {
    if (tableau.length === 0) return null;
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
      if (tableau[i] > max) {
        max = tableau[i];
      }
    }
    return max;
  }
  console.log(trouverMax([3, 7, 2, 9, 5])); 
  

  
  let t1 = [5, 2, 8];
  let t2 = [1, 7, 3];
  let fusion = t1.concat(t2).sort((a, b) => a - b);
  console.log(fusion);
  
 
  