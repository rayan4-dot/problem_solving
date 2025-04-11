//Faciles

SELECT employes.nom, departements.nom AS departement
FROM employes 
JOIN departements  ON employes.departement_id = departements.id;

//moyen

SELECT e.nom, e.salaire
FROM employes e
JOIN departements d ON e.departement_id = d.id
WHERE d.nom = 'IT';


//difficile