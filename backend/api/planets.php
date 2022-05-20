<?php

declare(strict_types=1);

function fetchPlanets(int $planet = 0): array
{
  $curl = curl_init('https://swapi.dev/api/planets/' . $planet);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $planetData = curl_exec($curl);

  return json_decode($planetData, true);
}

// HINT: set proper content header
header('Content-Type: application/json; charset=utf-8');

// HINT: you might want to setup CORS header

// TASK: use query parameters `dummy` and pass it to fetchData function
$planet = 1;
if (isset($_GET['planet'])) {
  $planet = $_GET['planet'];
}

$test = fetchPlanets($planet);

// HINT: set proper response code
echo json_encode(['name' => $test['name'] ?? 0] ?? []);
// echo $planet;

exit;
