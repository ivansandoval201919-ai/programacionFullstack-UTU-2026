<?php

// =====================================================
// Personaje.php
// =====================================================

abstract class Personaje
{
    protected string $nombre;
    private int $vida;

    public function __construct(string $nombre, int $vida)
    {
        $this->nombre = $nombre;
        $this->vida = $vida;
    }

    public function getVida(): int
    {
        return $this->vida;
    }

    public function recibirDanio(int $cantidad): void
    {
        $this->vida -= $cantidad;
    }

    abstract public function atacar(): void;
}


// =====================================================
// Guerrero.php
// =====================================================

class Guerrero extends Personaje
{
    private int $fuerza;

    public function __construct(string $nombre, int $vida, int $fuerza)
    {
        // Ejecutamos el constructor de la clase padre
        parent::__construct($nombre, $vida);

        $this->fuerza = $fuerza;
    }

    public function atacar(): void
    {
        echo $this->nombre .
             " ataca con su espada con fuerza " .
             $this->fuerza .
             "<br>";
    }
}


// =====================================================
// Mago.php
// =====================================================

class Mago extends Personaje
{
    private int $mana;

    public function __construct(string $nombre, int $vida, int $mana)
    {
        // Ejecutamos el constructor de la clase padre
        parent::__construct($nombre, $vida);

        $this->mana = $mana;
    }

    public function atacar(): void
    {
        echo $this->nombre .
             " lanza un hechizo usando " .
             $this->mana .
             " puntos de maná<br>";
    }
}


// =====================================================
// index.php
// En un proyecto real, desde acá se utilizarían las clases.
// Los archivos anteriores se importarían con require_once.
// =====================================================

$guerrero = new Guerrero("Aragorn", 100, 80);
$mago = new Mago("Gandalf", 80, 120);

$personajes = [$guerrero, $mago];

foreach ($personajes as $personaje) {
    $personaje->atacar();
}