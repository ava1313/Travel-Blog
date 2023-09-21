<?php
$client_id = 'ebce225a13092d0c93df';
$client_secret = '91312e6d39176cf5067d8016b5788155e0836b11';

if (isset($_GET['code'])) {
    $code = $_GET['code'];
    
    // Exchange the code for an access token
    $postdata = http_build_query([
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'code' => $code,
    ]);
    
    $opts = [
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-type: application/x-www-form-urlencoded',
            'content' => $postdata,
        ],
    ];
    
    $context  = stream_context_create($opts);
    $response = file_get_contents('https://github.com/login/oauth/access_token', false, $context);
    
    // Parse the response
    parse_str($response, $output);
    $access_token = $output['access_token'];
    
    // Redirect back to your CMS admin panel
    header('Location: /admin/#access_token=' . $access_token);
}
?>
