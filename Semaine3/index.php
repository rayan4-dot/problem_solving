//Faciles
<?php


// moyens



// Classe Vehicule avec attribut vitesse
class Vehicule {
    public $vitesse;

    public function __construct($vitesse) {
        $this->vitesse = $vitesse;
    }
}

// Classe Voiture qui hérite et ajoute marque
class Voiture extends Vehicule {
    public $marque;

    public function __construct($vitesse, $marque) {
        parent::__construct($vitesse);
        $this->marque = $marque;
    }
}

class AppareilElectronique {
    public function allumer() {
        echo "L'appareil électronique s'allume.\n";
    }
}

class Smartphone extends AppareilElectronique {
    public function allumer() {
        echo "Le smartphone s'allume avec l'animation.\n";
    }
}



class Employe {
    public $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }
}

class Manager extends Employe {
    public $equipe;

    public function __construct($nom, $equipe) {
        parent::__construct($nom);
        $this->equipe = $equipe;
    }
}

// Utilisation
$manager = new Manager("Alice", ["Bob", "Claire"]);
echo "Manager : {$manager->nom}\n";
echo "Équipe : "( $manager->equipe) . "\n";
