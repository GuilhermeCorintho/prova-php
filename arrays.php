<?php

/**
 * Echo some states from Brazil on this example format:
 * Eg: SP - São Paulo
 */
function echoStates() {
	$states = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
	$statesAbbreviation = ['ES', 'MG', 'RJ', 'SP'];

	$statesAbbreviation = array_reverse($statesAbbreviation);

	$countStates = count($states);
	$countStatesAbbreviation = count($statesAbbreviation);

	$statesDescription = [];

	for ($i = 0;$i < $countStates;$i++) {
			for ($j = 0;$j < $countStatesAbbreviation;$j++) {
					if ($i === $j) {
							$statesDescription += [$statesAbbreviation[$j] => $states[$i]];
					}
			}
	}

	foreach ($statesDescription as $key => $value) {
			echo nl2br($key . " - " . $value . " \n");
	}
}

echoStates();
?>
