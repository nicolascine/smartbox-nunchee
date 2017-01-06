# Test Nunchee

This app use PHP (cURL) and JS (jQuery) to send request to login endpoint and displays the response of server

### Test Stack

    - SLIM PHP 3.0
    - JS / jQuery
    - Bootstrap 3

### System Requirements
    - PHP
    - Composer
    
### Installation
After cloning this repo, run:

    $ cd test-tecnico
    $ composer install

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command:

    $ composer start

Or direct with PHP:

    $ php -S 0.0.0.0:8080 -t public public/index.php

If you prefer, run this project on your own PHP environment and open this url:

    http://localhost/public/index.php

Wehe `http://localhost/` is your developmnet server (maybe with some port, etc)

### Loggin
All requests are saved in a log file, the directory is:

    /logs
