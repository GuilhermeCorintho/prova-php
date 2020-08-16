<?php

/**
 * Exercício de lógica de programação
 */

/**
 * Return the sum of all numbers that are multiple of 3 or 5 and lower than 1000
 */
function main () {
    $sum = 0;
    for ($i = 999; $i >= 1; $i--) {
      if ($i % 3 === 0 || $i % 5 === 0) {
        $sum += $i;
      }
    }
    return $sum;
}

echo main ();