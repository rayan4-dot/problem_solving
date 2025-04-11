// facile


<?php

class Voiture {
    public $marque;

    public function __construct($marque) {
        $this->marque = $marque;
    }

    public function demarrer() {
        echo "La voiture démarre\n";
    }
}
$maVoiture = new Voiture("Toyota");
$maVoiture->demarrer();
?>

//moyen 

<?php


class CompteBancaire {
    public $solde;

    public function __construct() {
        $this->solde = 0;
    }

    public function deposer($montant) {
        $this->solde += $montant;
    }

    public function retirer($montant) {
        if ($montant <= $this->solde) {
            $this->solde -= $montant;
        } else {
            echo "Solde insuffisant\n";
        }
    }
}

//
$compte = new CompteBancaire();
$compte->deposer(100);
$compte->retirer(50);
echo "solde actuel : " . $compte->solde . "\n";

class Etudiant {
    public $nom;
    public $notes;

    public function __construct($nom, $notes) {
        $this->nom = $nom;
        $this->notes = $notes;
    }

    public function moyenne() {
        $somme = array_sum($this->notes);
        $nbNotes = count($this->notes);
        return $nbNotes > 0 ? $somme / $nbNotes : 0;
    }
}

$etudiant = new Etudiant("Alice", [15, 18, 12]);
echo "Moyenne de {$etudiant->nom} : " . $etudiant->moyenne() . "\n";
?>

// difficile

<?php


// Classe Personne
class Personne {
    public $nom;
    public $age;

    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function anniversaire() {
        $this->age++;
    }
}
$pers = new Personne("Jean", 29);
$pers->anniversaire();
echo "{$pers->nom} a maintenant {$pers->age} ans.\n";
