<?php

declare(strict_types=1);

function fetchData(bool $dummyData = false): array
{
  if ($dummyData === true) {

    return [
      'count' => 1,
      'results' => [
        "birth_year" => "19 BBY",
        "eye_color" => "Blue",
        "films" => [],
        "gender" => "Male",
        "hair_color" => "GREY",
        "height" => "172",
        "homeworld" => "https://swapi.dev/api/planets/dummy",
        "mass" => "77",
        "name" => "Target Dummy",
        "skin_color" => "Fair",
        "created" => "2014-12-09T13:50:51.644000Z",
        "edited" => "2014-12-10T13:52:43.172000Z",
        "species" => [],
        "starships" => [],
        "url" => "https://swapi.dev/api/people/dummy",
        "vehicles" => [],
      ],
    ];
  }

  // if ($planets) {
  //   $curl = curl_init('https://swapi.dev/api/planets/1');
  //   curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  //   $data = curl_exec($curl);

  //   json_decode($data, true);
  //   echo json_encode(['name' => $data['name'] ?? 0] ?? []);
  // }

  $curl = curl_init('https://swapi.dev/api/people');
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $data = curl_exec($curl);
  return json_decode($data, true);
}

// HINT: set proper content header
header('Content-Type: application/json; charset=utf-8');

// HINT: you might want to setup CORS header

// TASK: use query parameters `dummy` and pass it to fetchData function
$dummyData = false;
if (isset($_GET['dummy'])) {
  $dummyData = true;
}

$data = fetchData($dummyData);

// HINT: set proper response code
echo json_encode(['count' => $data['count'] ?? 0, 'results' => $data['results'] ?? []]);

exit;
