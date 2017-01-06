<?php

// Application middleware
$sendRequest = function ($request, $response, $next) {

    $END_POINT = 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend';
    $loginParams = $request->getParsedBody();

    $fields = array(
        'username' => urlencode($loginParams['username']),
        'password' => urlencode($loginParams['password'])
    );

    //Url-ify the data for the POST
    foreach($fields as $key=>$value) { 
        $fields_string .= $key.'='.$value.'&'; 
    }
    rtrim($fields_string, '&');

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $END_POINT);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $remote_server_output = curl_exec ($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    //Add HTTP Status code to array
    $obj = json_decode($remote_server_output, true);
    $obj['code'] = $httpcode;
    $response_array = stripslashes(json_encode($obj));

    $response->getBody()->write($response_array);
    return $response;
};