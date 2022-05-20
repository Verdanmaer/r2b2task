<?php declare(strict_types = 1);

echo '<h1>index.php</h1>';
echo '<ul>';

foreach (glob(__DIR__ . '/api/*.php') as $filename) {
	$route = str_replace(__DIR__, '', $filename);
	echo '<li><a href="' . $route . '">' . $route . '</a></li>';
}
echo '</ul>';
exit;