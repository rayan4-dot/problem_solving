<?php



class Animal {
    public $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }
}

class Chien extends Animal {
    public function __construct($nom) {
        parent::__construct($nom);
    }

    public function afficherNom() {
        echo "Nom du chien : $this->nom\n";
    }
}

$chien = new Chien("dog");
$chien->afficherNom();



