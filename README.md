# Test Nunchee

This app use PHP (cURL) and JS (jQuery) to send request to login endpoint and displays the response of server

### Stack

    - SLIM PHP 3.0
    - JS / jQuery
    - Bootstrap 3

### System Requirements
    - Web server with URL rewriting
    - PHP 5.5 or newer
    - Composer
    
### Installation
After cloning this repo, run:

    $ cd test-tecnico
    $ composer install

If you use your own server, you'll want to:

* Point your virtual host document root to application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command:

    $ composer start


Or direct with PHP:

    $ php -S 0.0.0.0:8080 -t public public/index.php

If you prefer, run this project on your own PHP environment and open this url:

    http://localhost/public/index.php

Where `http://localhost/` is your development server (maybe with some port, etc)

### Loggin
All requests are saved in a log file, the directory is:

    logs/
