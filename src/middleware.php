<?php

// API End point
$END_POINT = $container->get('settings')['API_ENDPOINT']['url'];

/**
 * Application middleware
 * -------------------------------------------- */ 
$sendRequest = function ($request, $response, $next) {
    $loginParams = $request->getParsedBody();
    $fields = array(
        'username' => urlencode($loginParams['username']),
        'password' => urlencode($loginParams['password'])
    );
    $responseArray = _curlRequest($fields);
    $response->getBody()->write($responseArray);

    return $response;
};


/**
 * Send Request and response formatted array 
 * -------------------------------------------- */ 
function _curlRequest($fields){
    global $END_POINT;

    // Url-ify the data for the POST
    foreach($fields as $key=>$value) { 
        $fieldStrings .= $key.'='.$value.'&'; 
    }
    rtrim($fieldStrings, '&');

    // Init Curl Request
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $END_POINT);
    curl_setopt($curl, CURLOPT_POST, TRUE);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $fieldStrings);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $serverResponse = curl_exec ($curl);
    $httpcode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    
    // Add HTTP Status code to array
    $obj = json_decode($serverResponse, true);
    $obj['code'] = $httpcode;
    $responseArray = stripslashes(json_encode($obj));

    return $responseArray;

}