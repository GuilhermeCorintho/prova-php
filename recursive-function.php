
<?php

/**
 * Return the integer smallest divisible number of the given three numbers
 */
function getSmallestDivisible($smallest = 1, $number1 = 2, $number2 = 3, $number3 = 10) {
    if (
        $smallest % $number1 === 0 &&
        $smallest % $number2 === 0 &&
        $smallest % $number3 === 0
    ) { 
        return $smallest;
    }

    return getSmallestDivisible($smallest + 1);
}

echo getSmallestDivisible(1, 2, 3, 10);
