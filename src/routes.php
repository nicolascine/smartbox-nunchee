<?php
// Routes

$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->post('/login', function ($request, $response, $args) {
    
    //$loginParams = $request->getParsedBody();
    // $username = $loginParams['username'];
    // $password = $loginParams['password'];
    //$response->getLogin()->params($loginParams['username'], $loginParams['password']);
    return $response;

})->add($sendRequest);