<?php
// Routes
$app->get('/', function ($request, $response, $args) {
    // Render index view
    //$app->log->debug('Request path: ' . $request->getPathInfo());
    $this->logger->info("Slim-Skeleton '/' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->post('/login', function ($request, $response, $args) {
    return $response;
})->add($sendRequest);