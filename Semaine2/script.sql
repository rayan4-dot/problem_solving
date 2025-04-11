//facile



INSERT INTO employes (nom, salaire, departement)
VALUES ('Alice', 8000, 'IT');

UPDATE employes
SET salaire = 8500
WHERE id = 1;


DELETE FROM employes
WHERE id = 2;


//moyen

INSERT INTO employes (nom, salaire, departement)
VALUES 
  ('Bob', 3000, 'RH'),
  ('Claire', 4000, 'Finance');


UPDATE employes
SET departement = 'Ressources Humaines'
WHERE departement = 'RH';


DELETE FROM employes
WHERE salaire < 2000;


INSERT INTO employes (nom, salaire, departement)
VALUES ('David', 3200, 'Marketing');

//difficile



UPDATE employes
SET salaire = salaire * 1.10
WHERE departement = 'IT';


DELETE FROM employes
WHERE nom LIKE 'A%';


INSERT INTO employes (nom, salaire, departement)
VALUES ('Eve', 2900, 'Logistique');


UPDATE employes
SET salaire = 3100
WHERE nom = 'Eve';


DELETE FROM employes
WHERE nom = 'Eve';
